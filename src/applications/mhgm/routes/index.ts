import type { Hono } from "hono";
import { socketIOLivechatRoutes } from "./socket.io_livechat.route";
import { socketIOMemberRoutes } from "./socket.io_member.route";
import { webhooksMemberRoutes } from "./webhooks_member.route";

export const defineRoutes = (mhgm: Hono) => {
  socketIOLivechatRoutes()
  socketIOMemberRoutes()
  webhooksMemberRoutes(mhgm)
}