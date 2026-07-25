import { Hono } from "hono";
import { useMiddlewares } from "./middlewares";

const mhgm = new Hono().basePath("/mhgm")
useMiddlewares(mhgm)

mhgm.get('/', (c) => {
  return c.text("MHGM")
})

export default mhgm