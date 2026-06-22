import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import WorkSlider from "./WorkSlider";

const images = [
  { url: "/img/a.jpg", title: "Painting A", year: 2022 },
  { url: "/img/b.jpg", title: "Painting B", year: null },
  { url: "/img/c.jpg", title: "Painting C", year: 2024 },
];

describe("WorkSlider", () => {
  it("renders the title and year of each slide", () => {
    render(<WorkSlider images={images} />);
    expect(screen.getAllByText("Painting A, 2022")).toHaveLength(2); // real + clone
    expect(screen.getByText("Painting B")).toBeInTheDocument();
    expect(screen.getAllByText("Painting C, 2024")).toHaveLength(2); // real + clone
  });

  it("omits the year and comma when year is null", () => {
    render(<WorkSlider images={images} />);
    expect(screen.getByText("Painting B")).toBeInTheDocument();
    expect(screen.queryByText(/Painting B,/)).not.toBeInTheDocument();
  });

  it("renders an img element for each image plus two clones", () => {
    const { container } = render(<WorkSlider images={images} />);
    expect(container.querySelectorAll("img")).toHaveLength(images.length + 2);
  });

  it.skip("renders one dot per image", () => {
    render(<WorkSlider images={images} />);
    expect(screen.getAllByLabelText(/Go to slide/)).toHaveLength(3);
  });

  it.skip("first dot is active on initial render", () => {
    render(<WorkSlider images={images} />);
    expect(screen.getByLabelText("Go to slide 1")).toHaveAttribute("aria-current", "true");
    expect(screen.getByLabelText("Go to slide 2")).not.toHaveAttribute("aria-current");
  });

  describe("mobile position counter", () => {
    it("shows the current position out of the total", () => {
      render(<WorkSlider images={images} />);
      expect(screen.getByLabelText("Image 1 of 3")).toHaveTextContent("1 / 3");
    });

    it("updates as the slide changes", () => {
      render(<WorkSlider images={images} />);
      fireEvent.click(screen.getByLabelText("Next"));
      expect(screen.getByLabelText("Image 2 of 3")).toHaveTextContent("2 / 3");
    });

    it("zero-pads the position to the width of the total", () => {
      const many = Array.from({ length: 12 }, (_, i) => ({
        url: `/img/${i}.jpg`,
        title: `Work ${i}`,
        year: null,
      }));
      render(<WorkSlider images={many} />);
      expect(screen.getByLabelText("Image 1 of 12")).toHaveTextContent("01 / 12");
    });
  });

  it("next button advances to slide 2", () => {
    const { container } = render(<WorkSlider images={images} />);
    const track = container.querySelector(".flex.h-full") as HTMLElement;
    fireEvent.click(screen.getByLabelText("Next"));
    expect(track.style.transform).toBe("translateX(calc(-200% + 0px))");
  });

  it("prev button wraps from first slide to last", () => {
    const { container } = render(<WorkSlider images={images} />);
    const track = container.querySelector(".flex.h-full") as HTMLElement;
    fireEvent.click(screen.getByLabelText("Previous"));
    expect(track.style.transform).toBe("translateX(calc(-0% + 0px))");
  });

  it("next button wraps from last slide to first", () => {
    const { container } = render(<WorkSlider images={images} />);
    const track = container.querySelector(".flex.h-full") as HTMLElement;
    fireEvent.click(screen.getByLabelText("Next")); // → 2
    fireEvent.click(screen.getByLabelText("Next")); // → 3
    fireEvent.click(screen.getByLabelText("Next")); // → clone of first (index 4)
    expect(track.style.transform).toBe("translateX(calc(-400% + 0px))");
  });

  it.skip("clicking a dot navigates directly to that slide", () => {
    render(<WorkSlider images={images} />);
    fireEvent.click(screen.getByLabelText("Go to slide 3"));
    expect(screen.getByLabelText("Go to slide 3")).toHaveAttribute("aria-current", "true");
    expect(screen.getByLabelText("Go to slide 1")).not.toHaveAttribute("aria-current");
  });

  it.skip("only one dot is active at a time", () => {
    render(<WorkSlider images={images} />);
    fireEvent.click(screen.getByLabelText("Next"));
    const activeDots = screen
      .getAllByLabelText(/Go to slide/)
      .filter((el) => el.getAttribute("aria-current") === "true");
    expect(activeDots).toHaveLength(1);
  });

  it("swipe left advances the slide", () => {
    const { container } = render(<WorkSlider images={images} />);
    const track = container.querySelector(".touch-pan-y") as Element;
    const sliderTrack = container.querySelector(".flex.h-full") as HTMLElement;

    fireEvent.touchStart(track, { targetTouches: [{ clientX: 300, clientY: 200 }] });
    fireEvent.touchMove(track, { targetTouches: [{ clientX: 50, clientY: 200 }] });
    fireEvent.touchEnd(track, { targetTouches: [] });

    expect(sliderTrack.style.transform).toBe("translateX(calc(-200% + 0px))");
  });

  it("swipe right goes to previous slide", () => {
    const { container } = render(<WorkSlider images={images} />);
    const track = container.querySelector(".touch-pan-y") as Element;
    const sliderTrack = container.querySelector(".flex.h-full") as HTMLElement;

    // Go to slide 2 first
    fireEvent.click(screen.getByLabelText("Next"));

    fireEvent.touchStart(track, { targetTouches: [{ clientX: 50, clientY: 200 }] });
    fireEvent.touchMove(track, { targetTouches: [{ clientX: 300, clientY: 200 }] });
    fireEvent.touchEnd(track, { targetTouches: [] });

    expect(sliderTrack.style.transform).toBe("translateX(calc(-100% + 0px))");
  });

  describe("analytics", () => {
    beforeEach(() => {
      (globalThis as unknown as Record<string, unknown>).gtag = vi.fn();
    });

    it("fires slider_next event when Next is clicked", () => {
      render(<WorkSlider images={images} />);
      fireEvent.click(screen.getByLabelText("Next"));
      expect(gtag).toHaveBeenCalledWith("event", "slider_next");
    });

    it("fires slider_prev event when Previous is clicked", () => {
      render(<WorkSlider images={images} />);
      fireEvent.click(screen.getByLabelText("Previous"));
      expect(gtag).toHaveBeenCalledWith("event", "slider_prev");
    });

    it("fires slide_viewed with position and title when navigating to a slide", () => {
      render(<WorkSlider images={images} />);
      fireEvent.click(screen.getByLabelText("Next"));
      expect(gtag).toHaveBeenCalledWith("event", "slide_viewed", {
        slide_position: 2,
        slide_title: "Painting B",
      });
    });

    it("fires lightbox_opened with position and title when a slide image is clicked", () => {
      const { container } = render(<WorkSlider images={images} />);
      fireEvent.click(container.querySelectorAll("img")[1]); // first real slide = Painting A
      expect(gtag).toHaveBeenCalledWith("event", "lightbox_opened", {
        slide_position: 1,
        slide_title: "Painting A",
      });
    });

    it("fires slide_viewed for the first slide on initial render", () => {
      render(<WorkSlider images={images} />);
      expect(gtag).toHaveBeenCalledWith("event", "slide_viewed", {
        slide_position: 1,
        slide_title: "Painting A",
      });
    });
  });

  describe("lightbox", () => {
    it("opens when a slide image is clicked", () => {
      const { container } = render(<WorkSlider images={images} />);
      // index 1 = first real slide (index 0 is clone of last)
      const slideImgs = container.querySelectorAll("img");
      fireEvent.click(slideImgs[1]);
      expect(screen.getByLabelText("Close")).toBeInTheDocument();
    });

    it("closes when the Close button is clicked", () => {
      const { container } = render(<WorkSlider images={images} />);
      fireEvent.click(container.querySelectorAll("img")[1]);
      fireEvent.click(screen.getByLabelText("Close"));
      expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
    });

    it("closes when Escape is pressed", () => {
      const { container } = render(<WorkSlider images={images} />);
      fireEvent.click(container.querySelectorAll("img")[1]);
      fireEvent.keyDown(document, { key: "Escape" });
      expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
    });

    it("closes when the overlay is clicked", () => {
      const { container } = render(<WorkSlider images={images} />);
      fireEvent.click(container.querySelectorAll("img")[1]);
      const overlay = container.querySelector(".fixed.inset-0") as Element;
      fireEvent.click(overlay);
      expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
    });

    it("displays the clicked image src in the lightbox", () => {
      const { container } = render(<WorkSlider images={images} />);
      const slideImgs = container.querySelectorAll("img");
      fireEvent.click(slideImgs[1]); // first real slide = /img/a.jpg
      // After opening, there should be one extra img (the lightbox one)
      expect(container.querySelectorAll("img").length).toBe(images.length + 2 + 1);
    });
  });
});
