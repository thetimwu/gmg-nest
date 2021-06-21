import { Test, TestingModule } from '@nestjs/testing';
import { GmguserResolver } from './gmguser.resolver';
import { GmguserService } from './gmguser.service';

describe('GmguserResolver', () => {
  let resolver: GmguserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GmguserResolver, GmguserService],
    }).compile();

    resolver = module.get<GmguserResolver>(GmguserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
