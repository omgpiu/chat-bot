import { Body, Controller, Post } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';

@Controller('ChatgptController')
export class ChatController {
  constructor(private chatgptService: ChatgptService) {}

  @Post()
  async chat(@Body('message') message: string): Promise<string> {
    console.log(message, 'message');
    return await this.chatgptService.generateResponse(message);
  }
}
