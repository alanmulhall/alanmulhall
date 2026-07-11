import { useEffect, useRef } from "react";
import type { WorkImage } from "../types";

interface Props {
  image: WorkImage;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Native <dialog> gives the lightbox focus trapping and Escape handling;
  // focus returns to where it was once the lightbox unmounts.
  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    dialog?.showModal();
    return () => {
      dialog?.close();
      if (opener instanceof HTMLElement) {
        opener.focus();
      }
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label={image.title || "Artwork"}
      onCancel={onClose}
      className="m-0 p-0 w-full h-full max-w-none max-h-none bg-black/90"
    >
      <div
        className="w-full h-full p-6 flex items-center justify-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-white hover:opacity-50 transition-opacity"
        >
          <svg
            width="24"
            height="24"
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
        <img src={image.url} alt={image.title} className="max-h-full max-w-full object-contain" />
      </div>
    </dialog>
  );
}
