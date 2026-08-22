import { Hono } from "hono"

import { apiKeyAuthMiddleware } from "./apiKeyAuth.middleware"
import { corsMiddleware } from "./cors.middleware"

export const useMiddlewares = (app: Hono) => {
  app.use(
    "/mhgm/*",
    corsMiddleware,
    apiKeyAuthMiddleware,
  )
}