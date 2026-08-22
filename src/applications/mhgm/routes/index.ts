import type { Hono } from "hono";
import { socketIOLivechatRoutes } from "./socket.io_livechat.route";
import { socketIOMemberRoutes } from "./socket.io_member.route";
import { publicWebhooksMemberRoutes } from "./public_webhooks_member.route";

export const defineRoutes = (mhgm: Hono) => {
  socketIOLivechatRoutes()
  socketIOMemberRoutes()
  publicWebhooksMemberRoutes(mhgm)
}