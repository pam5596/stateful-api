import { Hono } from "hono";
import { useMiddlewares } from "./middlewares";
import { defineRoutes } from "./routes";

const mhgm = new Hono().basePath("/mhgm")
useMiddlewares(mhgm)
defineRoutes(mhgm)

export default mhgm