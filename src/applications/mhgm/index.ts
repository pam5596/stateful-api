import { BaseError } from "@abstructs";
import { Hono } from "hono";

const mhgm = new Hono().basePath("/mhgm")

mhgm.get('/', (c) => {
  return c.text("MHGM")
})

export default mhgm