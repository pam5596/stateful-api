import { expect, test } from 'vitest'
import { SocketIOLiveChatAuthModel } from '../../../../src/applications/mhgm/models/socket.io_livechat_auth.model'
import type { SocketIOLivechatAuth } from '../../../../src/applications/mhgm/types/socket.io_livechat.auth'

test('creates a model instance with valid values', () => {
  const values: SocketIOLivechatAuth = {
    user_id: 1,
    channel_id: 'channel-1',
    stream_id: 'stream-1',
    broadcast_id: 2,
  }

  const model = new SocketIOLiveChatAuthModel(values)

  expect(model).toBeInstanceOf(SocketIOLiveChatAuthModel)
  expect(model.values).toEqual(values)
})
