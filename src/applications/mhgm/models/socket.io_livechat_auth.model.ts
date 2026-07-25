import { BaseModel } from "@abstructs";
import type { SocketIOLivechatAuth } from "../types/socket.io_livechat.auth";
import z from "zod";

export class SocketIOLiveChatAuthModel extends BaseModel<SocketIOLivechatAuth> {
  constructor(values: SocketIOLivechatAuth) {
    super(
      values, 
      z.strictObject({
        user_id: z.int(),
        channel_id: z.string(),
        stream_id: z.string(),
        broadcast_id: z.int()
      })
    )
  }
}