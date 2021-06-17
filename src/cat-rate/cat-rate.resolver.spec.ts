import { Test, TestingModule } from '@nestjs/testing';
import { CatRateResolver } from './cat-rate.resolver';
import { CatRateService } from './cat-rate.service';

describe('CatRateResolver', () => {
  let resolver: CatRateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatRateResolver, CatRateService],
    }).compile();

    resolver = module.get<CatRateResolver>(CatRateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
