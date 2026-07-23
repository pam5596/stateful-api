import { useTranslation } from "@intlify/hono";
import type { Context } from "hono";

export const t = (c: Context) => {
  return useTranslation(c)
}