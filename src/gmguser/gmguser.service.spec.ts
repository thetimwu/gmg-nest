import { Test, TestingModule } from '@nestjs/testing';
import { GmguserService } from './gmguser.service';

describe('GmguserService', () => {
  let service: GmguserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GmguserService],
    }).compile();

    service = module.get<GmguserService>(GmguserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
