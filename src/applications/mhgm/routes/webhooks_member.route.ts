import type { Hono } from "hono";
import { WebhooksMemberPOSTService } from "../services/public_webhooks_member.post.service";
import { socketIOClient } from "@instances";
import { WebhooksMemberPOSTRequestModel } from "../models";

export const webhooksMemberRoutes = async (mhgm: Hono) => {
  mhgm.post('/webhooks/member', async (c) => {
    const body = await c.req.json()

    await new WebhooksMemberPOSTService(socketIOClient).execute(
      new WebhooksMemberPOSTRequestModel({ body })
    )

    return c.body(null, 204)
  })
}