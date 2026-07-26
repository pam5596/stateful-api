import type { Hono } from "hono";
import { socket_io_live_chat_route } from "./socket.io_livechat.route";

export const defineRoutes = (mhgm: Hono) => {
  socket_io_live_chat_route()
}