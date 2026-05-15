import { describe, it, expect, vi, beforeEach } from "vitest";

const mockSend = vi.hoisted(() => vi.fn());

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: mockSend };
  },
}));

vi.mock("../utils/getWorkImages", () => ({
  getWorkImages: vi.fn().mockResolvedValue([]),
}));

const { action } = await import("./home");

const makeRequest = (fields: Record<string, string>) => {
  const formData = new FormData();
  Object.entries(fields).forEach(([k, v]) => formData.set(k, v));
  return new Request("http://localhost/", { method: "POST", body: formData });
};

const validFields = {
  name: "Alan",
  email: "alan@example.com",
  message: "Hello there",
};

describe("home action", () => {
  beforeEach(() => {
    mockSend.mockClear();
    mockSend.mockResolvedValue({ data: {}, error: null });
  });

  it("returns an error when any field is empty", async () => {
    const result = await action({ request: makeRequest({ name: "", email: "", message: "" }), params: {}, context: {} });
    expect(result).toEqual({ success: false, error: "All fields are required." });
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("returns an error when only some fields are missing", async () => {
    const result = await action({ request: makeRequest({ name: "Alan", email: "", message: "" }), params: {}, context: {} });
    expect(result).toEqual({ success: false, error: "All fields are required." });
  });

  it("calls resend with the correct email payload", async () => {
    await action({ request: makeRequest(validFields), params: {}, context: {} });
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "alanmulhall@gmail.com",
        subject: `New message from ${validFields.name}`,
        text: expect.stringContaining(validFields.message),
      })
    );
  });

  it("returns success when the email is sent", async () => {
    const result = await action({ request: makeRequest(validFields), params: {}, context: {} });
    expect(result).toEqual({ success: true });
  });

  it("returns an error when resend fails", async () => {
    mockSend.mockResolvedValue({ data: null, error: { message: "API error" } });
    const result = await action({ request: makeRequest(validFields), params: {}, context: {} });
    expect(result).toEqual({ success: false, error: "Failed to send. Please try again." });
  });

  it("trims whitespace from fields before sending", async () => {
    await action({
      request: makeRequest({ name: "  Alan  ", email: "  alan@example.com  ", message: "  Hi  " }),
      params: {},
      context: {},
    });
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({ subject: "New message from Alan" })
    );
  });
});
