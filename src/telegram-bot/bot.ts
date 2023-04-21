import { Telegraf } from 'telegraf';

export const telegrafBot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
