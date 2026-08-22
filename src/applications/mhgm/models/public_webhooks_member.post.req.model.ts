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
            name: z.string(),
          }),
          join: z.array(
            z.strictObject({
              channel_id: z.string(),
              avatar: z.string(),
              name: z.string(),
              join_quests: z.int()
            })
          ),
          wait: z.array(
            z.strictObject({
              channel_id: z.string(),
              avatar: z.string(),
              name: z.string(),
              wait_quests: z.int()
            })
          ),
          next: z.array(
            z.strictObject({
              channel_id: z.string(),
              avatar: z.string(),
              name: z.string()
            })
          )
        })
      })
    )
  }
}
