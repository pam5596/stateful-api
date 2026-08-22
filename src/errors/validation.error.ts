import { BaseError } from "@abstructs";
import { de } from "zod/locales";

export class ValidationError extends BaseError {
  constructor(
    detail: string,
    instance: string,
    stack?: string,
    report?: unknown
  ) {
    super(
      422,
      "base.errors.validation",
      detail,
      instance,
      stack,
      report
    )
  }
}