import { useState, useRef, useEffect } from "react";

interface Slide {
  url: string;
  title: string;
  year: number | null;
}

interface Props {
  images: Slide[];
}

export default function WorkSlider({ images }: Props) {
  const total = images.length;
  // [clone of last, ...real slides, clone of first]
  const slides = [images[total - 1], ...images, images[0]];

  const [lightbox, setLightbox] = useState<string | null>(null);
  const [index, setIndex] = useState(1); // 1 = first real slide
  const indexRef = useRef(1); // always current — avoids stale closure in onTransitionEnd
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  const touchCurrentX = useRef(0);
  const isHorizontal = useRef<boolean | null>(null);

  const realIndex = (((index - 1) % total) + total) % total;

  useEffect(() => {
    gtag("event", "slide_viewed", {
      slide_position: realIndex + 1,
      slide_title: images[realIndex].title,
    });
  }, [realIndex]);

  const prev = () => {
    setTransitionEnabled(true);
    setIndex((i) => {
      const next = Math.max(i - 1, 0);
      indexRef.current = next;
      return next;
    });
    gtag("event", "slider_prev");
  };

  const next = () => {
    setTransitionEnabled(true);
    setIndex((i) => {
      const next = Math.min(i + 1, total + 1);
      indexRef.current = next;
      return next;
    });
    gtag("event", "slider_next");
  };

  const onTransitionEnd = () => {
    const i = indexRef.current;
    if (i === 0) {
      // Landed on clone of last — snap to real last without animation
      setTransitionEnabled(false);
      indexRef.current = total;
      setIndex(total);
    } else if (i === total + 1) {
      // Landed on clone of first — snap to real first without animation
      setTransitionEnabled(false);
      indexRef.current = 1;
      setIndex(1);
    }
  };

  useEffect(() => {
    if (!lightbox) {
      return;
    }
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightbox]);

  // Re-enable transition one frame after the silent snap renders
  useEffect(() => {
    if (!transitionEnabled) {
      const id = requestAnimationFrame(() => setTransitionEnabled(true));
      return () => cancelAnimationFrame(id);
    }
  }, [transitionEnabled]);

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

    if (isHorizontal.current === null && Math.hypot(dx, dy) > 4) {
      isHorizontal.current = Math.abs(dx) > Math.abs(dy);
    }

    if (!isHorizontal.current) {
      return;
    }

    touchCurrentX.current = e.targetTouches[0].clientX;
    setDragOffset(dx);
  };

  const onTouchEnd = () => {
    if (!isHorizontal.current) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const dx = touchCurrentX.current - touchStartX.current;
    const containerWidth = containerRef.current?.offsetWidth ?? window.innerWidth;
    const elapsed = Math.max(Date.now() - touchStartTime.current, 1);
    const velocity = dx / elapsed;

    if (dx < -(containerWidth * 0.3) || velocity < -0.4) {
      next();
    } else if (dx > containerWidth * 0.3 || velocity > 0.4) {
      prev();
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
              transform: `translateX(calc(-${index * 100}% + ${dragOffset}px))`,
              transition:
                isDragging || !transitionEnabled
                  ? "none"
                  : "transform 350ms cubic-bezier(0.25, 1, 0.5, 1)",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full h-full flex-shrink-0 flex items-center justify-center px-6 md:px-0"
              >
                <div
                  className="h-full flex flex-col justify-center"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={slide.url}
                    alt=""
                    className="object-contain cursor-zoom-in"
                    style={{
                      height: "auto",
                      maxHeight: slide.title ? "calc(100% - 2rem)" : "100%",
                      width: "auto",
                    }}
                    draggable={false}
                    onClick={() => {
                      if (Math.abs(dragOffset) < 5) {
                        setLightbox(slide.url);
                        gtag("event", "lightbox_opened", {
                          slide_position: realIndex + 1,
                          slide_title: slide.title,
                        });
                      }
                    }}
                  />
                  {slide.title && (
                    <span className="font-mono text-gray-400 mt-2" style={{ fontSize: "12px" }}>
                      {slide.title}
                      {slide.year ? `, ${slide.year}` : ""}
                    </span>
                  )}
                </div>
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

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
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
          <img
            src={lightbox}
            alt=""
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Dot indicators */}
      {/* <div className="flex justify-center gap-3 mt-5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setTransitionEnabled(true);
              indexRef.current = i + 1;
              setIndex(i + 1);
            }}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === realIndex ? "true" : undefined}
            className={`w-2 h-2 rounded-full transition-colors ${i === realIndex ? "bg-black" : "bg-black/30"}`}
          />
        ))}
      </div> */}
    </div>
  );
}
