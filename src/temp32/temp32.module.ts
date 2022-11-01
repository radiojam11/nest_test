import { Module } from '@nestjs/common';
import { Temp32Service } from './temp32.service';
import { Temp32Controller } from './temp32.controller';

@Module({
  providers: [Temp32Service],
  controllers: [Temp32Controller],
})
export class Temp32Module {}
