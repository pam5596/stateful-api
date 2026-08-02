import type { Hono } from "hono"
import { healthCheckRoute } from "./health_check.route"

export const defineRoutes = (app: Hono) => {
  healthCheckRoute(app)
}