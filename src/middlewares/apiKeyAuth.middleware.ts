import { InvalidAPIKeyError } from "@errors"
import type { MiddlewareHandler } from "hono"

export const apiKeyAuthMiddleware: MiddlewareHandler = async (c, next) => {
  const api_key = c.req.header("X-Api-key")
  if (api_key !== process.env.API_KEY) throw new InvalidAPIKeyError()
  await next()
}