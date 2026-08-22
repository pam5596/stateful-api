import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import 'dotenv/config'

import applications from './applications'
import { useMiddlewares } from "./middlewares"
import { socketIOClient } from "@instances"
import { defineRoutes } from './routes'

const app = new Hono()

useMiddlewares(app)
defineRoutes(app)

app.route("/", applications)

const server = serve({
  fetch: app.fetch,
  port: 8000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

socketIOClient.attachTo(server)