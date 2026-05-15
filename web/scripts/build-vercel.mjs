import { execSync } from "node:child_process";
import { cpSync, mkdirSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// 1. Run react-router build
console.log("[build] Running react-router build...");
execSync("npx react-router build", { cwd: root, stdio: "inherit" });

// 2. Set up .vercel/output (Build Output API v3)
const output = join(root, ".vercel/output");
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

// 3. Copy static assets
console.log("[build] Copying static assets...");
const staticDir = join(output, "static");
mkdirSync(staticDir, { recursive: true });
cpSync(join(root, "build/client"), staticDir, { recursive: true });

// 4. Create the SSR function directory
const funcDir = join(output, "functions/index.func");
mkdirSync(funcDir, { recursive: true });

// 5. Bundle handler + all dependencies to a single CJS file via esbuild
console.log("[build] Bundling SSR function with esbuild...");
execSync(
  [
    "node_modules/.bin/esbuild",
    "scripts/vercel-handler.js",
    "--bundle",
    "--platform=node",
    "--target=node20",
    "--format=cjs",
    `--outfile=${join(funcDir, "index.js")}`,
    "--log-level=info",
  ].join(" "),
  { cwd: root, stdio: "inherit" }
);

// 6. Copy public/images into the function so getWorkImages can read the filesystem
const imagesSource = join(root, "public/images");
if (existsSync(imagesSource)) {
  console.log("[build] Copying public/images into function bundle...");
  cpSync(imagesSource, join(funcDir, "public/images"), { recursive: true });
}

// 7. Function config
writeFileSync(
  join(funcDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.js",
      launcherType: "Nodejs",
      shouldAddHelpers: true,
    },
    null,
    2
  )
);

// 8. Output routing config — serve static assets first, then SSR for everything else
writeFileSync(
  join(output, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/index" },
      ],
    },
    null,
    2
  )
);

console.log("[build] Vercel build complete.");
