import { ValidationError } from "@errors";
import { z } from "zod";

export abstract class BaseModel<T> {
  readonly values: T
  readonly schema: z.ZodType<T>

  constructor(values: T, schema: z.ZodType<T>) {
    const safe_parsed_result = schema.safeParse(values)

    if (!safe_parsed_result.success) throw new ValidationError(
      z.prettifyError(safe_parsed_result.error),
      this.constructor.name,
      safe_parsed_result.error.stack,
      values
    )

    this.schema = schema
    this.values = values
  }
}