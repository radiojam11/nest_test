import { Injectable } from '@nestjs/common';
import { CreateTempSalaDto } from './dto/create-temp-sala.dto';
import { UpdateTempSalaDto } from './dto/update-temp-sala.dto';

@Injectable()
export class TempSalaService {
  create(createTempSalaDto: CreateTempSalaDto) {
    return 'This action adds a new tempSala';
  }

  findAll() {
    return `This action returns all tempSala`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tempSala`;
  }

  update(id: number, updateTempSalaDto: UpdateTempSalaDto) {
    return `This action updates a #${id} tempSala`;
  }

  remove(id: number) {
    return `This action removes a #${id} tempSala`;
  }
}
