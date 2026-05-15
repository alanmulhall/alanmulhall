import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ContactModal from "./ContactModal";

const mockFetcher = vi.hoisted(() => ({
  state: "idle" as "idle" | "submitting",
  data: undefined as { success?: boolean; error?: string } | undefined,
}));

vi.mock("react-router", async (importOriginal) => ({
  ...(await importOriginal<typeof import("react-router")>()),
  useFetcher: () => ({
    state: mockFetcher.state,
    data: mockFetcher.data,
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
});

describe("ContactModal", () => {
  it("renders all form fields", () => {
    render(<ContactModal onClose={vi.fn()} />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
  });

  it("shows Sending… and disables the button while submitting", () => {
    mockFetcher.state = "submitting";
    render(<ContactModal onClose={vi.fn()} />);
    const btn = screen.getByRole("button", { name: /sending/i });
    expect(btn).toBeDisabled();
  });

  it("shows success message after a successful submission", () => {
    mockFetcher.data = { success: true };
    render(<ContactModal onClose={vi.fn()} />);
    expect(screen.getByText(/message sent/i)).toBeInTheDocument();
    expect(screen.queryByLabelText("Name")).not.toBeInTheDocument();
  });

  it("shows the error message returned from the action", () => {
    mockFetcher.data = { success: false, error: "Failed to send. Please try again." };
    render(<ContactModal onClose={vi.fn()} />);
    expect(screen.getByText("Failed to send. Please try again.")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = vi.fn();
    render(<ContactModal onClose={onClose} />);
    fireEvent.click(screen.getByLabelText("Close"));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when Escape is pressed", () => {
    const onClose = vi.fn();
    render(<ContactModal onClose={onClose} />);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when the backdrop is clicked", () => {
    const onClose = vi.fn();
    const { container } = render(<ContactModal onClose={onClose} />);
    const overlay = container.firstChild as HTMLElement;
    fireEvent.click(overlay, { target: overlay });
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("does not call onClose when the modal content is clicked", () => {
    const onClose = vi.fn();
    render(<ContactModal onClose={onClose} />);
    fireEvent.click(screen.getByRole("heading", { name: "Contact" }));
    expect(onClose).not.toHaveBeenCalled();
  });

  it("locks body scroll when open and restores it on unmount", () => {
    const { unmount } = render(<ContactModal onClose={vi.fn()} />);
    expect(document.body.style.overflow).toBe("hidden");
    unmount();
    expect(document.body.style.overflow).toBe("");
  });
});
