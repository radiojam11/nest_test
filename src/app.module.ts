import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Temp32Module } from './temp32/temp32.module';
import { TempSalaModule } from './temp-sala/temp-sala.module';

@Module({
    imports: [Temp32Module, TempSalaModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
