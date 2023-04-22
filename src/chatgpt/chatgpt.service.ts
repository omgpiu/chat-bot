import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { URL } from './chatgpt.constants';

@Injectable()
export class ChatgptService {
  constructor(private configService: ConfigService) {}

  async generateResponse(prompt: string): Promise<string> {
    const apiKey = this.configService.get('config.openai.apiKey');
    try {
      const response = await axios.post(
        URL,
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        },
      );

      return response.data.choices[0].message.content;
    } catch (e) {
      console.log(e);
    }
  }
}
