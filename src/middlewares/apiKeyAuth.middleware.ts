import { InvalidAPIKeyError } from "@errors"
import type { MiddlewareHandler } from "hono"

export const apiKeyAuthMiddleware: MiddlewareHandler = async (c, next) => {
  const api_key = c.req.header("x-api-key")
  if (
    api_key !== process.env.API_KEY &&
    c.req.path !== '/health-check'
  ) throw new InvalidAPIKeyError()
  await next()
}