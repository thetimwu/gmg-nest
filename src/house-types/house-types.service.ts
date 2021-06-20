import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHouseTypeDto } from './dto/create-house-type.dto';
import { UpdateHouseTypeDto } from './dto/update-house-type.dto';
import { HouseType } from './entities/house-type.entity';

@Injectable()
export class HouseTypesService {
  constructor(
    @InjectRepository(HouseType)
    private houseTypeRepository: Repository<HouseType>,
  ) {}

  create(createHouseTypeDto: CreateHouseTypeDto) {
    return this.houseTypeRepository.find();
  }

  findAll() {
    return this.houseTypeRepository.find({
      order: { HouseTypeID: 'ASC' },
      skip: 0,
      take: 10,
    });
  }

  findOne(id: number) {
    return this.houseTypeRepository.findOneOrFail(id);
  }

  async update(id: number, updateHouseTypeDto: UpdateHouseTypeDto) {
    const houseType = this.houseTypeRepository.findOne(id);
    if (!houseType) {
      throw new NotFoundException('houseType not found');
    }

    const updatedhouseType = await this.houseTypeRepository.update(
      id,
      updateHouseTypeDto,
    );
    console.log(updatedhouseType);
    return this.houseTypeRepository.findOne(id);
  }

  async remove(id: number) {
    try {
      return await this.houseTypeRepository.delete(id);
    } catch (error) {
      throw new BadRequestException('Cannot delete employee');
    }
  }
}
