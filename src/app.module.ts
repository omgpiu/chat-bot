import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { ChatgptService } from './chatgpt/chatgpt.service';
import { ChatController } from './chatgpt/chat.controller';
import { TelegramBotService } from './telegram-bot/telegram-bot.service';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TelegramBotModule,
  ],
  controllers: [AppController, ChatController],
  providers: [AppService, ChatgptService, TelegramBotService],
})
export class AppModule {}
