import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService, IMessage } from './chat.service';
import { Logger } from '@nestjs/common';

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
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }


  @SubscribeMessage('sendMessage')
  async handleMessage(@MessageBody() data: IMessage): Promise<void> {
    try{
      const message = await this.chatService.createMessage(data);
    this.server.emit('newMessage', message); 
    }catch(e:any){
    }
  }

  @SubscribeMessage('getAllMessages')
  async handleGetAllMessages(client: Socket): Promise<void> {
    try {
      const messages = await this.chatService.getAllMessages();
      console.log('44',messages)
    client.emit('allMessages', messages); 
    } catch (error) {
      
    }
  }
}

