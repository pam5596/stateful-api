import { BaseModel } from "@abstructs";
import type { WebhooksMemberPOSTRequest } from "../types/public_webhooks_member.post.req";
import z from "zod";

export class WebhooksMemberPOSTRequestModel extends BaseModel<WebhooksMemberPOSTRequest> {
  constructor(values: WebhooksMemberPOSTRequest) {
    super(
      values,
      z.strictObject({
        body: z.strictObject({
          streamer: z.strictObject({
            channel_id: z.string(),
            avatar: z.string(),
            name: z.string()
          }),
          users: z.array(
            z.strictObject({
              channel_id: z.string(),
              avatar: z.string(),
              name: z.string(),
              status: z.string(),
              join_quests: z.int(),
              wait_quests: z.int()
            })
          )
        })
      })
    )
  }
}
