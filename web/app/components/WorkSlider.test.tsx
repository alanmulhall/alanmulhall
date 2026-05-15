import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WorkSlider from "./WorkSlider";

const images = ["/img/a.jpg", "/img/b.jpg", "/img/c.jpg"];

describe("WorkSlider", () => {
  it("renders an img element for each image", () => {
    const { container } = render(<WorkSlider images={images} />);
    expect(container.querySelectorAll("img")).toHaveLength(3);
  });

  it("renders one dot per image", () => {
    render(<WorkSlider images={images} />);
    expect(screen.getAllByLabelText(/Go to slide/)).toHaveLength(3);
  });

  it("first dot is active on initial render", () => {
    render(<WorkSlider images={images} />);
    expect(screen.getByLabelText("Go to slide 1")).toHaveAttribute("aria-current", "true");
    expect(screen.getByLabelText("Go to slide 2")).not.toHaveAttribute("aria-current");
  });

  it("next button advances to slide 2", () => {
    render(<WorkSlider images={images} />);
    fireEvent.click(screen.getByLabelText("Next"));
    expect(screen.getByLabelText("Go to slide 2")).toHaveAttribute("aria-current", "true");
    expect(screen.getByLabelText("Go to slide 1")).not.toHaveAttribute("aria-current");
  });

  it("prev button wraps from first slide to last", () => {
    render(<WorkSlider images={images} />);
    fireEvent.click(screen.getByLabelText("Previous"));
    expect(screen.getByLabelText("Go to slide 3")).toHaveAttribute("aria-current", "true");
  });

  it("next button wraps from last slide to first", () => {
    render(<WorkSlider images={images} />);
    fireEvent.click(screen.getByLabelText("Next")); // → 2
    fireEvent.click(screen.getByLabelText("Next")); // → 3
    fireEvent.click(screen.getByLabelText("Next")); // → 1 (wrap)
    expect(screen.getByLabelText("Go to slide 1")).toHaveAttribute("aria-current", "true");
  });

  it("clicking a dot navigates directly to that slide", () => {
    render(<WorkSlider images={images} />);
    fireEvent.click(screen.getByLabelText("Go to slide 3"));
    expect(screen.getByLabelText("Go to slide 3")).toHaveAttribute("aria-current", "true");
    expect(screen.getByLabelText("Go to slide 1")).not.toHaveAttribute("aria-current");
  });

  it("only one dot is active at a time", () => {
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

    fireEvent.touchStart(track, { targetTouches: [{ clientX: 300, clientY: 200 }] });
    fireEvent.touchMove(track, { targetTouches: [{ clientX: 50, clientY: 200 }] });
    fireEvent.touchEnd(track, { targetTouches: [] });

    expect(screen.getByLabelText("Go to slide 2")).toHaveAttribute("aria-current", "true");
  });

  it("swipe right goes to previous slide", () => {
    const { container } = render(<WorkSlider images={images} />);
    const track = container.querySelector(".touch-pan-y") as Element;

    // Go to slide 2 first
    fireEvent.click(screen.getByLabelText("Next"));

    fireEvent.touchStart(track, { targetTouches: [{ clientX: 50, clientY: 200 }] });
    fireEvent.touchMove(track, { targetTouches: [{ clientX: 300, clientY: 200 }] });
    fireEvent.touchEnd(track, { targetTouches: [] });

    expect(screen.getByLabelText("Go to slide 1")).toHaveAttribute("aria-current", "true");
  });
});
