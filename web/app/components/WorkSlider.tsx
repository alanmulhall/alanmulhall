import { useState, useRef } from "react";

interface Props {
  images: string[];
}

export default function WorkSlider({ images }: Props) {
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  const touchCurrentX = useRef(0);
  const isHorizontal = useRef<boolean | null>(null);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchStartTime.current = Date.now();
    isHorizontal.current = null;
    setIsDragging(true);
    setDragOffset(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const dx = e.targetTouches[0].clientX - touchStartX.current;
    const dy = e.targetTouches[0].clientY - touchStartY.current;

    // Lock drag axis on first movement past 4px
    if (isHorizontal.current === null && Math.hypot(dx, dy) > 4) {
      isHorizontal.current = Math.abs(dx) > Math.abs(dy);
    }

    if (!isHorizontal.current) {
      return;
    }

    touchCurrentX.current = e.targetTouches[0].clientX;

    // Rubber-band resistance at first and last slide
    const atEdge = (current === 0 && dx > 0) || (current === images.length - 1 && dx < 0);

    setDragOffset(atEdge ? dx * 0.2 : dx);
  };

  const onTouchEnd = () => {
    if (!isHorizontal.current) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    // Use refs so we read the latest values regardless of render cycle
    const dx = touchCurrentX.current - touchStartX.current;
    const containerWidth = containerRef.current?.offsetWidth ?? window.innerWidth;
    const elapsed = Math.max(Date.now() - touchStartTime.current, 1);
    const velocity = dx / elapsed; // px/ms

    if (dx < -(containerWidth * 0.3) || velocity < -0.4) {
      if (current < images.length - 1) {
        setCurrent((i) => i + 1);
      }
    } else if (dx > containerWidth * 0.3 || velocity > 0.4) {
      if (current > 0) {
        setCurrent((i) => i - 1);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-start min-h-0 select-none overflow-hidden">
      {/* Track */}
      <div ref={containerRef} className="relative w-full flex-1 min-h-0">
        <div
          className="w-full h-full overflow-hidden touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex h-full"
            style={{
              transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
              transition: isDragging ? "none" : "transform 350ms cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="w-full h-full flex-shrink-0 flex items-center justify-center px-6 md:px-0"
              >
                <img
                  src={src}
                  alt=""
                  className="max-h-full w-auto max-w-full object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop arrows */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center text-black hover:opacity-50 transition-opacity"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center text-black hover:opacity-50 transition-opacity"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-3 mt-5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-black" : "bg-black/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
