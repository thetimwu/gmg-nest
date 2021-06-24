import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('AppGatway');

  @WebSocketServer()
  server: Server;

  afterInit(server: any) {
    this.logger.log('Initialized Tim');
  }

  @SubscribeMessage('issues')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: any,
  ): string {
    // this.server.emit('message', message);
    this.logger.log('message received from: ', client.id);
    return message;
  }

  @SubscribeMessage('salutations')
  handleSalute(@MessageBody() body: string): void {
    this.logger.log(`Salute received ${body}`);
  }

  @SubscribeMessage('connect')
  handleConnection(@MessageBody() data: string): void {
    // console.log('socket io waiting for connecting...');
    this.server.emit(`connect`);
    this.logger.log(`client connected: ${data}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`client disconnected: ${client.id}`);
  }
}
