import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as TelegramBot from 'node-telegram-bot-api';
import { ChatgptService } from '../chatgpt/chatgpt.service';

@Injectable()
export class TelegramBotService {
  private bot: TelegramBot;

  constructor(
    private configService: ConfigService,
    private chatGPTService: ChatgptService,
  ) {
    const token = this.configService.get<string>('TELEGRAM_BOT_TOKEN');
    this.bot = new TelegramBot(token, { polling: true });

    this.bot.on('message', async (msg) => {
      try {
        const chatId = msg.chat.id;
        const response = await this.chatGPTService.generateResponse(msg.text);
        this.bot.sendMessage(chatId, response ?? 'hello');
      } catch (e) {
        console.log(e);
      }
    });
  }
}
