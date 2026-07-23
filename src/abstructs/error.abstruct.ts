import type { ContentfulStatusCode } from "hono/utils/http-status";

export abstract class BaseError extends Error {
  constructor(
    public code: ContentfulStatusCode,
    public message: string,
    public detail: string,
    public instance?: string,
    public stack?: string,
    public report?: unknown
  ) {
    super(message)
  }

  toJson() {
    return {
      code: this.code,
      message: this.message,
      detail: this.detail,
      instance: this.instance,
      stack: this.stack,
      report: this.report
    }
  }
}