import { BaseError } from "@abstructs"
import type { MiddlewareHandler } from "hono"
import { UnknownError } from "../errors/unknown.error"

export const errorHandleMiddleware: MiddlewareHandler = async (c, next) => {
  try {
    await next()
  } catch (e) {
    if (e instanceof BaseError) {
      return c.json(e.toJson(), e.code)
    } else {
      const error = new UnknownError(e)
      return c.json(
        error.toJson(),
        error.code
      )
    }
  }
}