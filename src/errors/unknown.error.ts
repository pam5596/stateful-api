import { BaseError } from "@abstructs";

export class UnknownError extends BaseError {
  constructor(catched: unknown, instance?: string) {
    super(
      500,
      "base.errors.unknown",
      String(catched),
      instance
    )
  }
}