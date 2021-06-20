import { Module } from '@nestjs/common';
import { CatRateService } from './cat-rate.service';
import { CatRateResolver } from './cat-rate.resolver';

@Module({
  providers: [CatRateResolver, CatRateService]
})
export class CatRateModule {}
