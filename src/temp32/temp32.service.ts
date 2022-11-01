import { Injectable } from '@nestjs/common';

@Injectable()
export class Temp32Service {
  getTemp(): any {
    return { 'temp= ': 32, 'Humidity= ': 76 };
  }
}
