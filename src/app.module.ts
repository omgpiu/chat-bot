import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ChatgptService } from './chatgpt/chatgpt.service';
import { ChatController } from './chatgpt/chat.controller';
import { TelegramBotService } from './telegram-bot/telegram-bot.service';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
  ],
  controllers: [ChatController],
  providers: [ChatgptService, TelegramBotService],
})
export class AppModule {}
