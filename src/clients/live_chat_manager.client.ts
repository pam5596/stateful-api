import { LiveChat } from "youtube-chat";
import type { ChatItem } from "youtube-chat/dist/types/data";
import { UnknownError } from "../errors/unknown.error";

export class LiveChatManagerClient {
  private pool = new Map<string, LiveChat>();

	async subscribe(
    stream_id: string, 
    onChatCallback: (chat: ChatItem) => void,
    onErrorCallback: (error: unknown) => void
  ) {
		if (!this.pool.has(stream_id)) {
      const client = new LiveChat({ liveId: stream_id });
      client.on("chat", onChatCallback);
      client.on("error", onErrorCallback);
  
      const is_started = await client.start();
      if (is_started) this.pool.set(stream_id, client);
    }
	}

	async unsubscribe(stream_id: string) {
		const client = this.pool.get(stream_id);
		if (client) {
      client.stop();
      this.pool.delete(stream_id);
    }
	}
}