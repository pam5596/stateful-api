import type { BaseService } from "@abstructs";
import type { LiveChatManagerClient, MHGMAPIClient } from "@clients";
import { SocketIOLiveChatAuthModel } from "../models";
import type { Socket } from "socket.io";

export class SocketIOLivechatService implements BaseService<SocketIOLiveChatAuthModel, void> {
  constructor(
    public socket: Socket,
    public liveChatManagerClient: LiveChatManagerClient,
    public mhgmAPIClient: MHGMAPIClient
  ) {}

  async execute(req: SocketIOLiveChatAuthModel) {
    const { user_id, stream_id, channel_id, broadcast_id } = req.values

    const keywords = (await this.mhgmAPIClient.get_user_keywords({ user_id })).data

    this.liveChatManagerClient.subscribe(stream_id, async (chat) => {
      const first_message = chat.message[0]
      const message = "text" in first_message ? first_message.text : undefined
      const keyword = message ? keywords.keywords.find(k => k.keyword === message) : undefined

      if (message && keyword) {
        const user_id = (await this.mhgmAPIClient.put_user({
          channel_id: chat.author.channelId,
          name: chat.author.name,
          // [!] デフォルトアイコンを用意しても良さそう
          avatar: chat.author.thumbnail!.url,
        })).data.id

        await this.mhgmAPIClient.post_action_log({
          message,
          user_id,
          broadcast_id,
          keyword_id: keyword.id
        })

        this.socket.emit(`emit-${channel_id}`, {
          user: {
            channel_id: chat.author.channelId,
            name: chat.author.name,
            avatar: chat.author.thumbnail?.url,
          },
          chat: {
            message,
            action: keyword.action,
            keyword: keyword.keyword
          }
        })
      }
    })
  }
}