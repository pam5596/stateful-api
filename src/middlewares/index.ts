import { Hono } from "hono"
import { logger } from "hono/logger"

import { apiKeyAuthMiddleware } from "./apiKeyAuth.middleware"
import { i18nMiddleware } from "./i18n.middleware"
import { errorHandleMiddleware } from "./errorHandle.middleware"

export const useMiddlewares = (app: Hono) => {
  app.use(
    logger(),
    errorHandleMiddleware,
    apiKeyAuthMiddleware,
    i18nMiddleware
  )
}