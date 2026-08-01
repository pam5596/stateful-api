import type { Hono } from "hono";
import { socket_io_live_chat_route } from "./socket.io_livechat.route";
import { socket_io_member_route } from "./socket.io_member.route";

export const defineRoutes = (mhgm: Hono) => {
  socket_io_live_chat_route()
  socket_io_member_route()
}