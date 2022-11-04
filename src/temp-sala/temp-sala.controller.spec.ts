import { Test, TestingModule } from '@nestjs/testing';
import { TempSalaController } from './temp-sala.controller';
import { TempSalaService } from './temp-sala.service';

describe('TempSalaController', () => {
  let controller: TempSalaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TempSalaController],
      providers: [TempSalaService],
    }).compile();

    controller = module.get<TempSalaController>(TempSalaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
