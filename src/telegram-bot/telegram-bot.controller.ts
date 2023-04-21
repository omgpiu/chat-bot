import { Body, Controller, Post } from '@nestjs/common';
import { Update } from 'node-telegram-bot-api';
import { TelegramBotService } from './telegram-bot.service';
@Controller('telegram-webhook')
export class TelegramBotController {
  constructor(private readonly telegramBotService: TelegramBotService) {}

  @Post()
  async handleUpdate(@Body() update: Update) {
    await this.telegramBotService.handleUpdate(update);
  }
}
