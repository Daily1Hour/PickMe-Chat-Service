import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
    @SubscribeMessage('newMessage')
    handleNewMessage(client: Socket, message: any) {
        console.log(message);

        client.emit('reply', 'This is a reply');
    }
}