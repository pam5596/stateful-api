import { BaseError } from "@abstructs";

export class UnknownError extends BaseError {
  constructor(catched: unknown) {
    super(
      500,
      "base.errors.unknown",
      String(catched),
    )
  }
}