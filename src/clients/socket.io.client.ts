import { Server as SocketIOServer, type ServerOptions } from "socket.io";
import type { ServerType } from "@hono/node-server";
import type { Server as HTTPServer } from "node:http";

export class SocketIOClient extends SocketIOServer {
  constructor(opts?: Partial<ServerOptions>) {
    super(opts)
  }

  public attachTo(server: ServerType) {
    this.attach(server as HTTPServer)
  }
}