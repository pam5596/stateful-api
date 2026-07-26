import { liveChatManagerClient, mhgmAPIClient, socketIOClient } from "@instances";
import { SocketIOLivechatService } from "../services";

export const socketIOLivechatService = new SocketIOLivechatService(
  socketIOClient,
  liveChatManagerClient,
  mhgmAPIClient
)