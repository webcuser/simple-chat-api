import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';

@Injectable()
export class RedisService {
  private client;

  constructor() {
    this.client = createClient();
    this.client.connect();
  }

  async save(key: string, value: any) {
    await this.client.rPush(key, JSON.stringify(value));
  }
}