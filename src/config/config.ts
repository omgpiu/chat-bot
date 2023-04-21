import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
}));
