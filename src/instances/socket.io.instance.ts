import { SocketIOClient } from "@clients";
import { server } from "../server";

export const socketIOClient = new SocketIOClient(server)