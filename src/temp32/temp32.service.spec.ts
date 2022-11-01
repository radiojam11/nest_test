import { Test, TestingModule } from '@nestjs/testing';
import { Temp32Service } from './temp32.service';

describe('Temp32Service', () => {
  let service: Temp32Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Temp32Service],
    }).compile();

    service = module.get<Temp32Service>(Temp32Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
