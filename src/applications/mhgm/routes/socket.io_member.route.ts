import { socketIOClient } from "@instances";

export const socketIOMemberRoutes = async () => {
  socketIOClient.of("/member").on("connection", async (socket) => {
    console.log('[Socket.io]Client connected:', socket.id)

    socket.on("disconnect", () => {
      console.log('[Socket.io]Client disconnected:', socket.id)
    })
  })
}