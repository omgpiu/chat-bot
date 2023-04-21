import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TelegramBotController } from './telegram-bot.controller';
import { telegrafBot } from './bot';

@Module({
  imports: [HttpModule],
  controllers: [TelegramBotController],
  providers: [
    {
      provide: 'TELEGRAM_BOT',
      useValue: telegrafBot,
    },
  ],
  exports: ['TELEGRAM_BOT'],
})
export class TelegramBotModule {}
