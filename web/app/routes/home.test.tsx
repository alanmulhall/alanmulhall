import { describe, it, expect, vi, beforeEach } from "vitest";
import { action } from "./home";

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
