import type { Hono } from "hono";
import { PublicWebhooksMemberPOSTService } from "../services/public_webhooks_member.post.service";
import { socketIOClient } from "@instances";
import { PublicWebhooksMemberPOSTRequestModel } from "../models";

export const publicWebhooksMemberRoutes = (mhgm: Hono) => {
  mhgm.post('/public/webhooks/member', async (c) => {
    const body = await c.req.json()

    await new PublicWebhooksMemberPOSTService(socketIOClient).execute(
      new PublicWebhooksMemberPOSTRequestModel({ body })
    )

    return c.body(null, 204)
  })
}