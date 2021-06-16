import {
  Resolver,
  Query,
  ResolveField,
  Args,
  Int,
  Mutation,
} from '@nestjs/graphql';
import { DeleteResult } from 'src/types';
import { CreateSiteArgs, UpdateSiteArgs } from './dto/create-site.args';
import { Site } from './entities/site.entity';
import { SitesService } from './sites.service';

@Resolver((of) => Site)
export class SitesResolver {
  constructor(private sitesService: SitesService) {}

  @Query((returns) => [Site])
  async getAllSites(): Promise<Site[]> {
    return await this.sitesService.findAll();
  }

  @Query((returns) => Site)
  async getOneSite(@Args('id', { type: () => Int }) id: number) {
    return await this.sitesService.findOne(id);
  }

  @Mutation((returns) => Site)
  async createSite(@Args({ name: 'newSite' }) args: CreateSiteArgs) {
    return await this.sitesService.create(args);
  }

  @Mutation((returns) => Site)
  updateSite(
    @Args('options') options: UpdateSiteArgs,
    @Args('id', { type: () => Int }) id: number,
  ) {
    console.log(options);
    return this.sitesService.update(id, { ...options });
  }

  @Mutation((returns) => DeleteResult)
  async deleteSite(@Args('id') id: number) {
    try {
      const res = await this.sitesService.remove(id);
      return res.affected !== 0 ? { isOk: true } : { isOk: false };
    } catch (error) {
      return { error: error.message };
    }
  }
}
