import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("displays the site name", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Alan Mulhall").first()).toBeVisible();
  });

  test("shows images in the slider", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("img").first()).toBeVisible();
  });

  test("next arrow advances to the second slide", async ({ page }) => {
    const vp = page.viewportSize();
    test.skip(!!vp && vp.width < 768, "Arrows are desktop-only");
    await page.goto("/");
    await page.getByLabel("Next").click();
    await expect(page.getByLabel("Go to slide 2")).toHaveAttribute("aria-current", "true");
  });

  test("prev arrow wraps from first to last slide", async ({ page }) => {
    const vp = page.viewportSize();
    test.skip(!!vp && vp.width < 768, "Arrows are desktop-only");
    await page.goto("/");
    const count = await page.getByLabel(/Go to slide/).count();
    await page.getByLabel("Previous").click();
    await expect(page.getByLabel(`Go to slide ${count}`)).toHaveAttribute("aria-current", "true");
  });

  test("clicking a dot navigates directly to that slide", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Go to slide 3").click();
    await expect(page.getByLabel("Go to slide 3")).toHaveAttribute("aria-current", "true");
    await expect(page.getByLabel("Go to slide 1")).not.toHaveAttribute("aria-current");
  });

  test("instagram link points to the correct profile", async ({ page }) => {
    await page.goto("/");
    const link = page.getByLabel("Instagram");
    await expect(link).toHaveAttribute("href", "https://www.instagram.com/alanvmulhall/");
    await expect(link).toHaveAttribute("target", "_blank");
  });

  test("footer shows copyright with current year", async ({ page }) => {
    await page.goto("/");
    const year = new Date().getFullYear().toString();
    await expect(page.getByText(new RegExp(`Alan Mulhall.*©.*${year}`))).toBeVisible();
  });
});

test.describe("Contact modal", () => {
  test("contact button opens the modal", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "contact" }).click();
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
  });

  test("modal contains name, email and message fields", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "contact" }).click();
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Message")).toBeVisible();
  });

  test("close button dismisses the modal", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "contact" }).click();
    await page.getByLabel("Close").click();
    await expect(page.getByRole("heading", { name: "Contact" })).not.toBeVisible();
  });

  test("Escape key dismisses the modal", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "contact" }).click();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("heading", { name: "Contact" })).not.toBeVisible();
  });
});

test.describe("Homepage - swipe navigation", () => {
  test("swipe left advances the slide", async ({ page }) => {
    await page.goto("/");

    const slider = page.locator(".overflow-hidden").first();
    const box = await slider.boundingBox();
    if (!box) throw new Error("Slider not found");

    const startX = Math.round(box.x + box.width * 0.75);
    const endX = Math.round(box.x + box.width * 0.1);
    const y = Math.round(box.y + box.height / 2);

    const cdp = await page.context().newCDPSession(page);
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [{ x: startX, y, id: 1, radiusX: 1, radiusY: 1, force: 1 }],
      modifiers: 0,
    });
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x: endX, y, id: 1, radiusX: 1, radiusY: 1, force: 1 }],
      modifiers: 0,
    });
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [],
      modifiers: 0,
    });

    await page.waitForTimeout(400);
    await expect(page.getByLabel("Go to slide 2")).toHaveAttribute("aria-current", "true");
  });
});
