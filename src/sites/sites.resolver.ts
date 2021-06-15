import { Resolver, Query, ResolveField, Args } from '@nestjs/graphql';
import { Site } from './entities/site.entity';
import { SitesService } from './sites.service';

@Resolver((of) => Site)
export class SitesResolver {
  constructor(private sitesService: SitesService) {}

  @Query((returns) => [Site])
  async getAllSites(): Promise<Site[]> {
    return await this.sitesService.findAll();
  }
}
