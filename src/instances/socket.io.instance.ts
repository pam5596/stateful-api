import { SocketIOClient } from "@clients";

export const socketIOClient = new SocketIOClient({
  path: "/socket.io",
  cors: {
    origin: '*'
  }
})
