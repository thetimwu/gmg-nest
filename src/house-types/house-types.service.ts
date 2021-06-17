import { Injectable } from '@nestjs/common';
import { CreateHouseTypeDto } from './dto/create-house-type.dto';
import { UpdateHouseTypeDto } from './dto/update-house-type.dto';

@Injectable()
export class HouseTypesService {
  create(createHouseTypeDto: CreateHouseTypeDto) {
    return 'This action adds a new houseType';
  }

  findAll() {
    return `This action returns all houseTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} houseType`;
  }

  update(id: number, updateHouseTypeDto: UpdateHouseTypeDto) {
    return `This action updates a #${id} houseType`;
  }

  remove(id: number) {
    return `This action removes a #${id} houseType`;
  }
}
