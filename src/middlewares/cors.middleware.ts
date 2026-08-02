import { cors } from "hono/cors";

export const corsMiddleware = cors({
  allowHeaders: ["x-api-key"],
  credentials: true
})