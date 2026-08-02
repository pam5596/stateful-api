import { cors } from "hono/cors";

export const corsMiddleware = cors({
  allowHeaders: ["X-Mhgm-Api-key"],
  origin: [
    process.env.MHGM_BASE_URL!,
  ],
  credentials: true
})