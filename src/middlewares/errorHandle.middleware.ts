import { BaseError } from "@abstructs"
import type { ErrorHandler } from "hono"
import { UnknownError } from "../errors/unknown.error"
import { t } from "@utils"

export const errorHandleMiddleware: ErrorHandler = async (error, context) => {
  if (error instanceof BaseError) {
    const message = await t(context, error.message)
    return context.json({ ...error.toJson(), message }, error.code)
  } else {
    const unknown_error = new UnknownError(error)
    const message = await t(context, unknown_error.message)
    return context.json({ ...unknown_error.toJson(), message }, unknown_error.code)
  }
}