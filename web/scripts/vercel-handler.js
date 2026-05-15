import { createRequestHandler } from "@react-router/node";
import * as build from "../build/server/index.js";

export default createRequestHandler({ build, mode: "production" });
