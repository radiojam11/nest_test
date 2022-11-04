import { Controller, Get } from '@nestjs/common';
import { Temp32Service } from './temp32.service';

@Controller('/temp')
export class Temp32Controller {
    constructor(private readonly temp32Service: Temp32Service) {}
    @Get()
    getTemp(): string {
        return this.temp32Service.getTemp();
    }
}
