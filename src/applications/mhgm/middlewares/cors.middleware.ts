import { cors } from "hono/cors";

export const corsMiddleware = cors({
  allowHeaders: ["x-mhgm-api-key"],
  origin: [
    process.env.MHGM_BASE_URL!,
  ],
  credentials: true
})