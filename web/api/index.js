import { createRequestHandler } from "@react-router/node";

export default async function (req, res) {
  try {
    const build = await import("../build/server/index.js");
    const handler = createRequestHandler({ build, mode: "production" });
    return handler(req, res);
  } catch (error) {
    console.error("Function crashed:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Error: ${error.message}\n\n${error.stack}`);
  }
}
