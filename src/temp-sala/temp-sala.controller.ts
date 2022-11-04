import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TempSalaService } from './temp-sala.service';
import { CreateTempSalaDto } from './dto/create-temp-sala.dto';
import { UpdateTempSalaDto } from './dto/update-temp-sala.dto';

@Controller('temp-sala')
export class TempSalaController {
  constructor(private readonly tempSalaService: TempSalaService) {}

  @Post()
  create(@Body() createTempSalaDto: CreateTempSalaDto) {
    return this.tempSalaService.create(createTempSalaDto);
  }

  @Get()
  findAll() {
    return this.tempSalaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tempSalaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTempSalaDto: UpdateTempSalaDto) {
    return this.tempSalaService.update(+id, updateTempSalaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tempSalaService.remove(+id);
  }
}
