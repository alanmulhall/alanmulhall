import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Home, { action, loader } from "./home";

const mockSend = vi.hoisted(() => vi.fn());

vi.mock("resend", () => ({
  Resend: vi.fn(function () {
    return {
      emails: { send: mockSend },
    };
  }),
}));

function actionArgs(fields: Record<string, string>) {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    body.set(key, value);
  }
  const request = new Request("http://localhost/", { method: "POST", body });
  // Only `request` is read by the action.
  return { request } as Parameters<typeof action>[0];
}

beforeEach(() => {
  mockSend.mockReset().mockResolvedValue({ error: null });
});

describe("home action — contact form", () => {
  it("sends an email and returns success for a valid submission", async () => {
    const result = await action(
      actionArgs({ name: "Alice", email: "alice@example.com", message: "Hello!" })
    );
    expect(mockSend).toHaveBeenCalledOnce();
    expect(result).toEqual({ success: true });
  });

  it("returns an error when required fields are missing", async () => {
    const result = await action(actionArgs({ name: "Alice", email: "", message: "" }));
    expect(mockSend).not.toHaveBeenCalled();
    expect(result).toEqual({ success: false, error: "All fields are required." });
  });

  it("rejects an invalid email format without sending", async () => {
    const result = await action(
      actionArgs({ name: "Alice", email: "not-an-email", message: "Hello!" })
    );
    expect(mockSend).not.toHaveBeenCalled();
    expect(result).toEqual({ success: false, error: "Please enter a valid email." });
  });

  it("rejects an oversized message without sending", async () => {
    const result = await action(
      actionArgs({ name: "Alice", email: "alice@example.com", message: "x".repeat(5001) })
    );
    expect(mockSend).not.toHaveBeenCalled();
    expect(result).toEqual({ success: false, error: "Submission is too long." });
  });

  it("rejects an oversized name without sending", async () => {
    const result = await action(
      actionArgs({ name: "n".repeat(201), email: "alice@example.com", message: "Hello!" })
    );
    expect(mockSend).not.toHaveBeenCalled();
    expect(result).toEqual({ success: false, error: "Submission is too long." });
  });

  it("returns an error when Resend fails", async () => {
    mockSend.mockResolvedValue({ error: { message: "boom" } });
    const result = await action(
      actionArgs({ name: "Alice", email: "alice@example.com", message: "Hello!" })
    );
    expect(result).toEqual({ success: false, error: "Failed to send. Please try again." });
  });
});

describe("Home page", () => {
  it("renders without crashing when the gallery is empty", () => {
    // WorkSlider assumes at least one image; Home must not mount it with none
    render(<Home {...({ loaderData: { images: [] } } as unknown as Parameters<typeof Home>[0])} />);
    expect(screen.getByText("Alan Mulhall")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "contact" })).toBeInTheDocument();
  });
});

describe("home loader", () => {
  const apiImage = { url: "https://cdn/img.jpg", title: "West Cork", year: 2024 };

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns normalized images from the API", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response(JSON.stringify([apiImage, { url: null }])))
    );
    const result = await loader();
    expect(result).toEqual({
      images: [{ url: "https://cdn/img.jpg", title: "West Cork", year: 2024 }],
    });
  });

  it("returns an empty gallery on an HTTP error response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("boom", { status: 500 })));
    const result = await loader();
    expect(result).toEqual({ images: [] });
  });

  it("returns an empty gallery and logs when the API is unreachable", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("fetch failed")));
    const result = await loader();
    expect(result).toEqual({ images: [] });
    expect(errorSpy).toHaveBeenCalledOnce();
    errorSpy.mockRestore();
  });

  it("passes an abort signal so a hanging API cannot block rendering", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("[]"));
    vi.stubGlobal("fetch", fetchMock);
    await loader();
    expect(fetchMock.mock.calls[0][1]?.signal).toBeInstanceOf(AbortSignal);
  });
});
