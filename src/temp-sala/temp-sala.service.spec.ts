import { Test, TestingModule } from '@nestjs/testing';
import { TempSalaService } from './temp-sala.service';

describe('TempSalaService', () => {
  let service: TempSalaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TempSalaService],
    }).compile();

    service = module.get<TempSalaService>(TempSalaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
