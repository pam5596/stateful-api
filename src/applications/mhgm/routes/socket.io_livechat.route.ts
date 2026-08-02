import { liveChatManagerClient, mhgmAPIClient, socketIOClient } from "@instances";
import { SocketIOLivechatService } from "../services";
import type { SocketIOLivechatAuth } from "../types/socket.io_livechat.auth";
import { SocketIOLiveChatAuthModel } from "../models";

export const socketIOLivechatRoutes = () => {
  socketIOClient.of("/live-chat").on("connection", async (socket) => {
    const socketIOLivechatService = new SocketIOLivechatService(
      socket,
      liveChatManagerClient,
      mhgmAPIClient
    )
    
    const { stream_id } = socket.handshake.auth as SocketIOLivechatAuth
    console.log('[Socket.io]Client connected:', socket.id)
    await socketIOLivechatService.execute(new SocketIOLiveChatAuthModel(
      socket.handshake.auth as SocketIOLivechatAuth
    ))
    
    socket.on("disconnect", () => {
      liveChatManagerClient.unsubscribe(stream_id)
      console.log('[Socket.io]Client disconnected:', socket.id)
    })
  })
}