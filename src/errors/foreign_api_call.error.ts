import { BaseError } from "@abstructs";
import type { ContentfulStatusCode } from "hono/utils/http-status";

export class ForeignAPICallError extends BaseError {
  constructor(
    code: ContentfulStatusCode,
    detail: string,
    instance?: string,
    stack?: string,
    report?: unknown
  ) {
    super(
      code,
      "base.errors.foreign_api_call",
      detail,
      instance,
      stack,
      report
    )
  }
}