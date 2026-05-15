import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { getWorkImages } from "./getWorkImages";

let dir: string;

beforeAll(async () => {
  dir = await mkdtemp(join(tmpdir(), "work-images-"));
  await Promise.all([
    writeFile(join(dir, "zebra.jpg"), ""),
    writeFile(join(dir, "apple.png"), ""),
    writeFile(join(dir, "monet.jpeg"), ""),
    writeFile(join(dir, "animation.gif"), ""),
    writeFile(join(dir, "preview.webp"), ""),
    writeFile(join(dir, "readme.txt"), ""),
    writeFile(join(dir, "script.js"), ""),
  ]);
});

afterAll(() => rm(dir, { recursive: true }));

describe("getWorkImages", () => {
  it("returns only image files", async () => {
    const result = await getWorkImages(dir);
    expect(result).not.toContain("/images/work/readme.txt");
    expect(result).not.toContain("/images/work/script.js");
  });

  it("accepts jpg, jpeg, png, gif and webp extensions", async () => {
    const result = await getWorkImages(dir);
    expect(result).toContain("/images/work/zebra.jpg");
    expect(result).toContain("/images/work/monet.jpeg");
    expect(result).toContain("/images/work/apple.png");
    expect(result).toContain("/images/work/animation.gif");
    expect(result).toContain("/images/work/preview.webp");
  });

  it("returns paths sorted alphabetically", async () => {
    const result = await getWorkImages(dir);
    const imageFiles = result.map((p) => p.replace("/images/work/", ""));
    expect(imageFiles).toEqual([...imageFiles].sort());
  });

  it("returns empty array for an empty directory", async () => {
    const emptyDir = await mkdtemp(join(tmpdir(), "empty-"));
    try {
      expect(await getWorkImages(emptyDir)).toEqual([]);
    } finally {
      await rm(emptyDir, { recursive: true });
    }
  });
});
