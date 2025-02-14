import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { Logger, UseGuards } from '@nestjs/common';
import { Message } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@WebSocketGateway({
  cors:{
    origin:'*'
  }
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('ChatGateway');

  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket, ...args: any[]) {
    console.log("chat.gateway:21")
    this.logger.log(`Client connected: ${client.id}`);
    console.log("chat.gateway:23")
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
  @UseGuards(JwtAuthGuard)
  @SubscribeMessage('sendMessage')
  async handleMessage(@MessageBody() data: { content: Message }): Promise<void> {
    console.log("chat.gateway:30")
    const message = await this.chatService.createMessage(data.content);
    console.log("chat.gateway:32")
    this.server.emit('newMessage', message); // Отправляем сообщение всем подключенным клиентам
    console.log("chat.gateway:34")
  }

  @UseGuards(JwtAuthGuard)
  @SubscribeMessage('getAllMessages')
  async handleGetAllMessages(client: Socket): Promise<void> {
    const messages = await this.chatService.getAllMessages();
    client.emit('allMessages', messages); // Отправляем историю сообщений только запросившему клиенту
  }

  // @SubscribeMessage('createChat')
  // create(@MessageBody() createChatDto: CreateChatDto) {
  //   return this.chatService.create(createChatDto);
  // }

  // @SubscribeMessage('findAllChat')
  // findAll() {
  //   return this.chatService.findAll();
  // }

  // @SubscribeMessage('findOneChat')
  // findOne(@MessageBody() id: number) {
  //   return this.chatService.findOne(id);
  // }

  // @SubscribeMessage('updateChat')
  // update(@MessageBody() updateChatDto: UpdateChatDto) {
  //   return this.chatService.update(updateChatDto.id, updateChatDto);
  // }

  // @SubscribeMessage('removeChat')
  // remove(@MessageBody() id: number) {
  //   return this.chatService.remove(id);
  // }
}

