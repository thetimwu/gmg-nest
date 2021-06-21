import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { Site } from './entities/site.entity';
import { SitesResolver } from './sites.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Site], 'gmgLiveDb')],
  controllers: [SitesController],
  providers: [SitesService, SitesResolver],
})
export class SitesModule {}
