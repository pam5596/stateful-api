import { Hono } from "hono";

import mhgm from "./mhgm";

const applications = new Hono()

applications.route('/', mhgm)

export default applications