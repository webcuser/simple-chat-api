import { WebSocketGateway, WebSocketServer, SubscribeMessage, WebSocket } from '@nestjs/websockets';
import { ChatService } from './chat.service';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server;

  constructor(private chatService: ChatService) {}

  @SubscribeMessage('message')
  async handleMessage(client: WebSocket, payload: { sender: string; content: string }) {
    await this.chatService.saveMessage(payload);
    this.server.emit('message', payload);
  }
}