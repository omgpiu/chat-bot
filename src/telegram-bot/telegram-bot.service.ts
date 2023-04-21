import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as TelegramBot from 'node-telegram-bot-api';
import { ChatgptService } from '../chatgpt/chatgpt.service';
import { Update } from 'node-telegram-bot-api';
@Injectable()
export class TelegramBotService {
  private bot: TelegramBot;

  constructor(
    private configService: ConfigService,
    private chatGPTService: ChatgptService,
  ) {
    const token = this.configService.get<string>('TELEGRAM_BOT_TOKEN');

    this.bot = new TelegramBot(token, {
      webHook: {
        port: Number(process.env.PORT),
      },
    });
    this.setWebhook();

    this.bot.on('message', async (msg) => {
      try {
        await this.handleUpdate({ message: msg });
      } catch (e) {
        console.log(e);
      }
    });
  }
  async setWebhook() {
    const url = `${process.env.APP_URL}/telegram-webhook`;
    await this.bot.setWebHook(url);
  }
  async handleUpdate(update: Update) {
    if (update.message) {
      const chatId = update.message.chat.id;
      const response = await this.chatGPTService.generateResponse(
        update.message.text,
      );

      if (response.trim().length > 0) {
        this.bot.sendMessage(chatId, response);
      } else {
        this.bot.sendMessage(
          chatId,
          'Простите, я не знаю, что ответить на это.',
        );
      }
    }
  }
}
