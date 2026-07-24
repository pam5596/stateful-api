import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import applications from './applications'
import { useMiddlewares } from "./middlewares"

const app = new Hono()

app.route("/", applications)
useMiddlewares(app)

serve({
  fetch: app.fetch,
  port: 5000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})