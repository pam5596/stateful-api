import { expect, test } from 'vitest'
import { PublicWebhooksMemberPOSTRequestModel } from '../../../../src/applications/mhgm/models/public_webhooks_member.post.req.model'

test('PublicWebhooksMemberPOSTRequestModelモデルの単体テスト', () => {
  expect(() => new PublicWebhooksMemberPOSTRequestModel({
    body: {
      streamer: {
        channel_id: "string",
        avatar: 'https://example.com/streamer.png',
        name: 'streamer-1',
      },
      users: [
        {
          channel_id: "string",
          avatar: 'https://example.com/user.png',
          name: 'user-1',
          status: 'join',
          join_quests: 3,
          wait_quests: 4,
        },
      ],
    }
  })).not.toThrow()
})
