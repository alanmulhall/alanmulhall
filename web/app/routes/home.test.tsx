import { describe, it, expect, vi, beforeEach } from "vitest";
import { action } from "./home";

const mockSend = vi.hoisted(() => vi.fn());
const mockContactsCreate = vi.hoisted(() => vi.fn());

vi.mock("resend", () => ({
  Resend: vi.fn(function () {
    return {
      emails: { send: mockSend },
      contacts: { create: mockContactsCreate },
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
  mockContactsCreate.mockReset().mockResolvedValue({ error: null });
});

describe("home action — newsletter signup", () => {
  it("adds the email to the Resend audience and returns success", async () => {
    const result = await action(
      actionArgs({ intent: "newsletter_signup", email: "fan@example.com" })
    );
    expect(mockContactsCreate).toHaveBeenCalledWith(
      expect.objectContaining({ email: "fan@example.com" })
    );
    expect(mockSend).not.toHaveBeenCalled();
    expect(result).toEqual({ success: true });
  });

  it("returns an error when the email is missing", async () => {
    const result = await action(actionArgs({ intent: "newsletter_signup", email: "  " }));
    expect(mockContactsCreate).not.toHaveBeenCalled();
    expect(result).toEqual({ success: false, error: "Email is required." });
  });

  it("returns an error when Resend fails", async () => {
    mockContactsCreate.mockResolvedValue({ error: { message: "boom" } });
    const result = await action(
      actionArgs({ intent: "newsletter_signup", email: "fan@example.com" })
    );
    expect(result).toEqual({
      success: false,
      error: "Something went wrong. Please try again.",
    });
  });
});

describe("home action — contact form", () => {
  it("sends an email and returns success for a valid submission", async () => {
    const result = await action(
      actionArgs({ name: "Alice", email: "alice@example.com", message: "Hello!" })
    );
    expect(mockSend).toHaveBeenCalledOnce();
    expect(mockContactsCreate).not.toHaveBeenCalled();
    expect(result).toEqual({ success: true });
  });

  it("returns an error when required fields are missing", async () => {
    const result = await action(actionArgs({ name: "Alice", email: "", message: "" }));
    expect(mockSend).not.toHaveBeenCalled();
    expect(result).toEqual({ success: false, error: "All fields are required." });
  });
});
