import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ContactModal from "./ContactModal";

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

  describe("analytics", () => {
    it("fires contact_modal_closed when the close button is clicked", () => {
      render(<ContactModal onClose={vi.fn()} />);
      fireEvent.click(screen.getByLabelText("Close"));
      expect(gtag).toHaveBeenCalledWith("event", "contact_modal_closed");
    });

    it("fires contact_modal_closed when Escape is pressed", () => {
      render(<ContactModal onClose={vi.fn()} />);
      fireEvent.keyDown(document, { key: "Escape" });
      expect(gtag).toHaveBeenCalledWith("event", "contact_modal_closed");
    });

    it("fires contact_submit_clicked when the form is submitted with valid data", () => {
      render(<ContactModal onClose={vi.fn()} />);
      fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Alice" } });
      fireEvent.change(screen.getByLabelText("Email"), { target: { value: "alice@example.com" } });
      fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello!" } });
      fireEvent.click(screen.getByRole("button", { name: "Send" }));
      expect(gtag).toHaveBeenCalledWith("event", "contact_submit_clicked");
    });

    it("does not fire contact_submit_clicked when validation fails", () => {
      render(<ContactModal onClose={vi.fn()} />);
      fireEvent.click(screen.getByRole("button", { name: "Send" }));
      expect(gtag).not.toHaveBeenCalledWith("event", "contact_submit_clicked");
    });

    it("fires contact_sent when the server returns success", () => {
      mockFetcher.data = { success: true };
      render(<ContactModal onClose={vi.fn()} />);
      expect(gtag).toHaveBeenCalledWith("event", "contact_sent");
    });

    it("fires contact_failed when the server returns an error", () => {
      mockFetcher.data = { success: false, error: "Failed to send. Please try again." };
      render(<ContactModal onClose={vi.fn()} />);
      expect(gtag).toHaveBeenCalledWith("event", "contact_failed");
    });
  });

  describe("per-field validation", () => {
    it("shows name required error when name is empty", () => {
      render(<ContactModal onClose={vi.fn()} />);
      fireEvent.click(screen.getByRole("button", { name: "Send" }));
      expect(screen.getByText("Name is required.")).toBeInTheDocument();
    });

    it("shows email required error when email is empty", () => {
      render(<ContactModal onClose={vi.fn()} />);
      fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Alice" } });
      fireEvent.click(screen.getByRole("button", { name: "Send" }));
      expect(screen.getByText("Email is required.")).toBeInTheDocument();
    });

    it("shows invalid email error when email format is wrong", () => {
      render(<ContactModal onClose={vi.fn()} />);
      fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Alice" } });
      fireEvent.change(screen.getByLabelText("Email"), { target: { value: "notanemail" } });
      fireEvent.click(screen.getByRole("button", { name: "Send" }));
      expect(screen.getByText("Please enter a valid email.")).toBeInTheDocument();
    });

    it("shows message required error when message is empty", () => {
      render(<ContactModal onClose={vi.fn()} />);
      fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Alice" } });
      fireEvent.change(screen.getByLabelText("Email"), { target: { value: "alice@example.com" } });
      fireEvent.click(screen.getByRole("button", { name: "Send" }));
      expect(screen.getByText("Message is required.")).toBeInTheDocument();
    });

    it("does not call submit when validation fails", () => {
      render(<ContactModal onClose={vi.fn()} />);
      fireEvent.click(screen.getByRole("button", { name: "Send" }));
      expect(mockFetcher.submit).not.toHaveBeenCalled();
    });

    it("calls submit when all fields are valid", () => {
      render(<ContactModal onClose={vi.fn()} />);
      fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Alice" } });
      fireEvent.change(screen.getByLabelText("Email"), { target: { value: "alice@example.com" } });
      fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello!" } });
      fireEvent.click(screen.getByRole("button", { name: "Send" }));
      expect(mockFetcher.submit).toHaveBeenCalledOnce();
    });
  });
});
