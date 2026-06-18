import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';

@Injectable()
export class ChatService {
  constructor(private redisService: RedisService) {}

  async saveMessage(payload: { sender: string; content: string }) {
    await this.redisService.save('messages', payload);
  }
}