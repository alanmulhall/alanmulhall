import { useEffect, useRef } from "react";
import { useFetcher } from "react-router";

interface Props {
  onClose: () => void;
}

export default function ContactModal({ onClose }: Props) {
  const fetcher = useFetcher();
  const overlayRef = useRef<HTMLDivElement>(null);
  const isSubmitting = fetcher.state === "submitting";
  const success = fetcher.data?.success;
  const error = fetcher.data?.error;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-6"
    >
      <div className="bg-white w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-black hover:opacity-50 transition-opacity"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 className="font-mono text-2xl font-medium mb-6">Contact</h2>

        {success ? (
          <p className="font-mono text-sm text-gray-500">Message sent. I'll be in touch soon.</p>
        ) : (
          <fetcher.Form method="post" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-mono text-base text-gray-500" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="border border-black/20 px-3 py-2 text-sm font-mono focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-mono text-base text-gray-500" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="border border-black/20 px-3 py-2 text-sm font-mono focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-mono text-base text-gray-500" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="border border-black/20 px-3 py-2 text-sm font-mono focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="font-mono text-xs text-red-500">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="font-mono text-base bg-black text-white py-2 hover:opacity-70 transition-opacity mt-2 disabled:opacity-40"
            >
              {isSubmitting ? "Sending…" : "Send"}
            </button>
          </fetcher.Form>
        )}
      </div>
    </div>
  );
}
