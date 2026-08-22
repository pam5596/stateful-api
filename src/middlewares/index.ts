import { Hono } from "hono"
import { logger } from "hono/logger"

import { apiKeyAuthMiddleware } from "./apiKeyAuth.middleware"
import { i18nMiddleware } from "./i18n.middleware"
import { errorHandleMiddleware } from "./errorHandle.middleware"
import { corsMiddleware } from "./cors.middleware"

export const useMiddlewares = (app: Hono) => {
  app.use(i18nMiddleware)
  app.onError(errorHandleMiddleware)

  app.use(logger())
  app.use(corsMiddleware)
  app.use(apiKeyAuthMiddleware)
}