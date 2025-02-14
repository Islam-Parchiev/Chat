import { Injectable } from '@nestjs/common';
import { Message } from '@prisma/client';
// import { CreateChatDto } from './dto/create-chat.dto';
// import { UpdateChatDto } from './dto/update-chat.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async createMessage(content:Message) {
    console.log("chat.service:12",content)
    return await this.prisma.message.create({
      data: {
        updatedAt:new Date(),
        userId:Math.random()*1000,
        text:content.text
      },
    });
    return true
    console.log("chat.service:20")
  }

  async getAllMessages() {
    return await this.prisma.message.findMany({
      orderBy: {
        createdAt: 'asc', // Или 'desc' для сортировки по убыванию
      },
    });
  }
}
