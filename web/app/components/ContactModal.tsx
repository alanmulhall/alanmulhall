import { useCallback, useEffect, useState } from "react";
import { useFetcher } from "react-router";

interface Props {
  onClose: () => void;
}

export default function ContactModal({ onClose }: Props) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const success = fetcher.data?.success;
  const serverError = fetcher.data?.error;
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (fetcher.data?.success) {
      gtag("event", "contact_sent");
      gtag("event", "generate_lead");
    } else if (fetcher.data?.error) {
      gtag("event", "contact_failed");
    }
  }, [fetcher.data]);
  const [visible, setVisible] = useState(false);

  // Trigger slide-in on next frame so the CSS transition fires
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // On desktop, slide out then unmount; on mobile, close immediately
  const handleClose = useCallback(() => {
    gtag("event", "contact_modal_closed");
    if (window.matchMedia("(min-width: 768px)").matches) {
      setVisible(false);
      setTimeout(onClose, 300);
    } else {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    const email = String(data.get("email") ?? "").trim();
    if (!String(data.get("name") ?? "").trim()) {
      errs.name = "Name is required.";
    }
    if (!email) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email.";
    }
    if (!String(data.get("message") ?? "").trim()) {
      errs.message = "Message is required.";
    }
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});
    gtag("event", "contact_submit_clicked");
    fetcher.submit(data, { method: "post" });
  };

  return (
    <>
      {/* Desktop overlay — click to close */}
      <div className="hidden md:block fixed inset-0 bg-black/20 z-40" onClick={handleClose} />

      {/* Panel — full screen on mobile, slide-in from right on desktop */}
      <div
        className={`fixed z-50 bg-white overflow-y-auto
          inset-0
          md:inset-auto md:right-0 md:top-0 md:h-full md:w-[420px]
          md:transition-transform md:duration-300 md:ease-out
          ${visible ? "md:translate-x-0" : "md:translate-x-full"}`}
      >
        <div className="p-8 relative">
          <button
            onClick={handleClose}
            aria-label="Close"
            className="absolute top-5 right-5 text-black hover:opacity-50 transition-opacity"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <h2 className="font-mono text-2xl font-medium mb-6">Contact</h2>

          {success ? (
            <p className="font-mono text-sm text-gray-500">Message sent. I'll be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-mono text-base text-gray-500" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="border border-black/20 px-3 py-2 text-sm font-mono focus:outline-none focus:border-black transition-colors"
                />
                {fieldErrors.name && (
                  <p className="font-mono text-sm text-red-500">{fieldErrors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-base text-gray-500" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="border border-black/20 px-3 py-2 text-sm font-mono focus:outline-none focus:border-black transition-colors"
                />
                {fieldErrors.email && (
                  <p className="font-mono text-sm text-red-500">{fieldErrors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-base text-gray-500" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="border border-black/20 px-3 py-2 text-sm font-mono focus:outline-none focus:border-black transition-colors resize-none"
                />
                {fieldErrors.message && (
                  <p className="font-mono text-sm text-red-500">{fieldErrors.message}</p>
                )}
              </div>

              {serverError && <p className="font-mono text-sm text-red-500">{serverError}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="font-mono text-base bg-black text-white py-2 hover:opacity-70 transition-opacity mt-2 disabled:opacity-40"
              >
                {isSubmitting ? "Sending…" : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
