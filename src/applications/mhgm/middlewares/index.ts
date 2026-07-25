import { Hono } from "hono"

import { apiKeyAuthMiddleware } from "./apiKeyAuth.middleware"

export const useMiddlewares = (app: Hono) => {
  app.use(
    apiKeyAuthMiddleware,
  )
}