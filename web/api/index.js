import { createRequestHandler } from "@react-router/node";

const handler = createRequestHandler({
  build: () => import("../build/server/index.js"),
  mode: process.env.NODE_ENV || "production",
});

export default handler;
