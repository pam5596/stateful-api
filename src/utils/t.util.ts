import { useTranslation } from "@intlify/hono";
import type { Context } from "hono";

export const t = async (c: Context, key: string) => {
  return (await useTranslation(c))(key)
}