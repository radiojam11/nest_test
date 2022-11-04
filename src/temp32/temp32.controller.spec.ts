import { Test, TestingModule } from '@nestjs/testing';
import { Temp32Controller } from './temp32.controller';

describe('Temp32Controller', () => {
    let controller: Temp32Controller;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [Temp32Controller],
        }).compile();

        controller = module.get<Temp32Controller>(Temp32Controller);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
