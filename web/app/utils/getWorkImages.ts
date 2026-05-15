import { readdir } from "node:fs/promises";

export async function getWorkImages(dir: string): Promise<string[]> {
  const files = await readdir(dir);
  return files
    .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .sort()
    .map((f) => `/images/work/${f}`);
}
