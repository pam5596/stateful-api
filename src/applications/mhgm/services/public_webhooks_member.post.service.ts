import type { BaseService } from "@abstructs";
import type { PublicWebhooksMemberPOSTRequestModel } from "../models";
import type { SocketIOClient } from "@clients";

export class PublicWebhooksMemberPOSTService implements BaseService<PublicWebhooksMemberPOSTRequestModel, void> {
  constructor(
    public socketIOClient: SocketIOClient
  ) {}

  async execute(req: PublicWebhooksMemberPOSTRequestModel) {
    const { channel_id } = req.values.body.streamer

    this.socketIOClient.of("/member").emit(`emit-${channel_id}`, req.values.body)
  }
}