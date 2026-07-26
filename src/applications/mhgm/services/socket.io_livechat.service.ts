import type { BaseService } from "@abstructs";
import type { SocketIOClient, LiveChatManagerClient, MHGMAPIClient } from "@clients";
import type { SocketIOLivechatAuth } from "../types/socket.io_livechat.auth";

export class SocketIOLivechatService implements BaseService<undefined, void> {
  constructor(
    public socketIOClient: SocketIOClient,
    public liveChatManagerClient: LiveChatManagerClient,
    public mhgmAPIClient: MHGMAPIClient
  ) {}

  execute() {
    this.socketIOClient.of("/live-chat").on("connection", async (socket) => {
      console.log('[Socket.io]Client connected:', socket.id)
      const { user_id, stream_id, channel_id, broadcast_id } = socket.handshake.auth as SocketIOLivechatAuth

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

          socket.emit(`emit-${channel_id}`, {
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

      socket.on("disconnect", () => {
        this.liveChatManagerClient.unsubscribe(stream_id)
        console.log('[Socket.io]Client disconnected:', socket.id)
      })
    })
  }
}