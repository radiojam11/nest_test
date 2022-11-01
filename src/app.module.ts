import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Temp32Module } from './temp32/temp32.module';

@Module({
  imports: [Temp32Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
