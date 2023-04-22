import { registerAs } from '@nestjs/config';
import * as process from 'process';

export default registerAs('config', () => ({
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    botToken: process.env.TELEGRAM_BOT_TOKEN,
  },
}));
