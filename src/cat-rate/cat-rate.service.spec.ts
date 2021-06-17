import { Test, TestingModule } from '@nestjs/testing';
import { CatRateService } from './cat-rate.service';

describe('CatRateService', () => {
  let service: CatRateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatRateService],
    }).compile();

    service = module.get<CatRateService>(CatRateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
