import type { BaseService } from "@abstructs";
import type { WebhooksMemberPOSTRequestModel } from "../models";
import type { SocketIOClient } from "@clients";

export class WebhooksMemberPOSTService implements BaseService<WebhooksMemberPOSTRequestModel, void> {
  constructor(
    public socketIOClient: SocketIOClient
  ) {}

  async execute(req: WebhooksMemberPOSTRequestModel) {
    const { channel_id } = req.values.body.streamer

    this.socketIOClient.of("/member").emit(`emit-${channel_id}`, req.values.body)
  }
}