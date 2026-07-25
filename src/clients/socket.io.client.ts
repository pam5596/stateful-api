import { Server as SocketIOServer } from "socket.io";
import type { ServerType } from "@hono/node-server";

export class SocketIOClient extends SocketIOServer {
  constructor(server: ServerType) {
    super(
      server, {
        cors: {
          origin: '*'
        }
      })
  }
}