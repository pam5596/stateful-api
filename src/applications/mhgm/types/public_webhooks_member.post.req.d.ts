export interface PublicWebhooksMemberPOSTRequest {
  body: {
    streamer: {
      channel_id: string,
      avatar: string,
      name: string
    },
    users: {
      channel_id: string,
      avatar: string,
      name: string,
      status: string,
      join_quests: number,
      wait_quests: number
    }[]
  }
}