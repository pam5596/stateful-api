import type { Hono } from "hono";

export const healthCheckRoute = (app: Hono) => {
  app.get('/health-check', async (c) => {
    return c.json({
      env: process.env.NODE_ENV,
      memory: process.memoryUsage(),
      header: c.req.header(),
      timestamp: new Date().toISOString()
    } ,200)
  })
}