import { Module } from '@nestjs/common';
import { TempSalaService } from './temp-sala.service';
import { TempSalaController } from './temp-sala.controller';

@Module({
  controllers: [TempSalaController],
  providers: [TempSalaService]
})
export class TempSalaModule {}
