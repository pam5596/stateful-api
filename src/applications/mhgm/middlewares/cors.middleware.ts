import { cors } from "hono/cors";

export const corsMiddleware = cors({
  allowHeaders: ["X-Mhgm-Api-key"],
  origin: [
    process.env.MHGM_SERVER_URL!,
    process.env.MHGM_CLIENT_URL!
  ],
  credentials: true
})