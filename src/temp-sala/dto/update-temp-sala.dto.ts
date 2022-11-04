import { PartialType } from '@nestjs/mapped-types';
import { CreateTempSalaDto } from './create-temp-sala.dto';

export class UpdateTempSalaDto extends PartialType(CreateTempSalaDto) {}
