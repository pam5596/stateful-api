import { cors } from "hono/cors";

export const corsMiddleware = cors({
  allowHeaders: ["X-Api-key"],
  credentials: true
})