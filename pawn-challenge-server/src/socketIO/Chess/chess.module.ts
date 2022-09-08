import { Module } from '@nestjs/common';
import { ChessGateway } from './chess.gateway';
@Module({
  providers: [ChessGateway],
})
export class ChatModule {}