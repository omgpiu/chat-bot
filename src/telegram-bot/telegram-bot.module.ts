import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TelegramBotController } from './telegram-bot.controller';

@Module({
  imports: [HttpModule],
  controllers: [TelegramBotController],
})
export class TelegramBotModule {}
