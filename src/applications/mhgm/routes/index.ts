import type { Hono } from "hono";
import { socketIOLivechatService } from "./socket.io_livechat.route";

export const defineRoutes = (mhgm: Hono) => {
  socketIOLivechatService.execute()
}