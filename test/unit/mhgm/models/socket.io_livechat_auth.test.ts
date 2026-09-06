import { expect, test } from 'vitest'
import { SocketIOLiveChatAuthModel } from '../../../../src/applications/mhgm/models/socket.io_livechat_auth.model'

test('SocketIOLiveChatAuthModelモデルの単体テスト', () => {
  expect(() => new SocketIOLiveChatAuthModel({
    user_id: 1,
    channel_id: 'channel-1',
    stream_id: 'stream-1',
  })).not.toThrow()
})
