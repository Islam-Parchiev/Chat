import { Injectable } from '@nestjs/common';
import { Message } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
export interface IMessage {
  content:Message
}
Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async createMessage(content: IMessage) {
    return await this.prisma.message.create({
      data: {
       text:content.content.text,
       createdAt:new Date(),
       userId:341324
      },
    });
  }

  async getAllMessages() {
    // if(await this.prisma.message.findMany({
    //   orderBy: {
    //     createdAt: 'asc', 
    //   },
    // })) {
    //   const messages = await this.prisma.message.findMany({
    //     orderBy: {
    //       createdAt: 'asc', // Или 'desc' для сортировки по убыванию
    //     },
    //   });
    //   return messages
    // }else {
    //   return "hren333"
    // }
    return [
      {
        id: 1111,
        userId: 121321,
        createdAt: new Date(),
        updatedAt: new Date(),
        text: "Hello",
    },
    {
      id: 2222,
      userId: 123456,
      createdAt: new Date(),
      updatedAt: new Date(),
      text: "Hi",
  },
  {
    id: 3333,
    userId: 4321,
    createdAt: new Date(),
    updatedAt: new Date(),
    text: "Test",
}

    ]
  }
}
