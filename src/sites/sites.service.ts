import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { Site } from './entities/site.entity';

@Injectable()
export class SitesService {
  constructor(
    @InjectRepository(Site, 'gmgLiveDb')
    private sitesRepository: Repository<Site>,
  ) {}

  async create(createSiteDto: CreateSiteDto) {
    const newSite = await this.sitesRepository.create(createSiteDto);
    try {
      return await this.sitesRepository.save(newSite);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  findAll() {
    return this.sitesRepository.find({
      order: {
        SiteID: 'DESC',
      },
      skip: 0,
      take: 15,
    });
  }

  findOne(id: number) {
    try {
      return this.sitesRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async update(id: number, updateSiteDto: UpdateSiteDto) {
    const site = await this.sitesRepository.findOneOrFail(id);
    await this.sitesRepository.update(id, updateSiteDto);
    return { ...site, ...updateSiteDto };
  }

  remove(id: number) {
    try {
      return this.sitesRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
