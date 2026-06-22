import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import SignupForm from "./SignupForm";

const mockFetcher = vi.hoisted(() => ({
  state: "idle" as "idle" | "submitting",
  data: undefined as { success?: boolean; error?: string } | undefined,
  submit: vi.fn(),
}));

vi.mock("react-router", async (importOriginal) => ({
  ...(await importOriginal<typeof import("react-router")>()),
  useFetcher: () => ({
    state: mockFetcher.state,
    data: mockFetcher.data,
    submit: mockFetcher.submit,
    Form: ({
      children,
      ...props
    }: React.FormHTMLAttributes<HTMLFormElement> & { children?: React.ReactNode }) => (
      <form {...props}>{children}</form>
    ),
  }),
}));

beforeEach(() => {
  mockFetcher.state = "idle";
  mockFetcher.data = undefined;
  mockFetcher.submit.mockClear();
  (globalThis as unknown as Record<string, unknown>).gtag = vi.fn();
});

describe("SignupForm", () => {
  it("renders the email input, encouraging copy, and submit button", () => {
    render(<SignupForm />);
    expect(screen.getByLabelText(/new work and shows/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("your@email.com")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign up" })).toBeInTheDocument();
  });

  it("submits with the newsletter_signup intent", () => {
    render(<SignupForm />);
    expect(screen.getByDisplayValue("newsletter_signup")).toBeInTheDocument();
  });

  it("disables the button while submitting", () => {
    mockFetcher.state = "submitting";
    render(<SignupForm />);
    expect(screen.getByRole("button", { name: "…" })).toBeDisabled();
  });

  it("shows a confirmation message after a successful signup", () => {
    mockFetcher.data = { success: true };
    render(<SignupForm />);
    expect(screen.getByText(/you're on the list/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("your@email.com")).not.toBeInTheDocument();
  });

  it("shows the error message returned from the action", () => {
    mockFetcher.data = { success: false, error: "Something went wrong. Please try again." };
    render(<SignupForm />);
    expect(screen.getByText("Something went wrong. Please try again.")).toBeInTheDocument();
  });

  it("fires newsletter_signup analytics event on success", () => {
    mockFetcher.data = { success: true };
    render(<SignupForm />);
    expect(gtag).toHaveBeenCalledWith("event", "newsletter_signup");
  });

  it("does not fire newsletter_signup when the action returns an error", () => {
    mockFetcher.data = { success: false, error: "Something went wrong. Please try again." };
    render(<SignupForm />);
    expect(gtag).not.toHaveBeenCalledWith("event", "newsletter_signup");
  });
});
