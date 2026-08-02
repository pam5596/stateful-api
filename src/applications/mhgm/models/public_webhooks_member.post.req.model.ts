import { BaseModel } from "@abstructs";
import type { PublicWebhooksMemberPOSTRequest } from "../types/public_webhooks_member.post.req";
import z from "zod";

export class PublicWebhooksMemberPOSTRequestModel extends BaseModel<PublicWebhooksMemberPOSTRequest> {
  constructor(values: PublicWebhooksMemberPOSTRequest) {
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
