import { BaseError } from "@abstructs";

export class InvalidAPIKeyError extends BaseError {
  constructor() {
    super(
      401,
      "base.errors.invalid_api_key",
      "invalid_api_key"
    )
  }
}