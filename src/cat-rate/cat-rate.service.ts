import { Injectable } from '@nestjs/common';
import { CreateCatRateInput } from './dto/create-cat-rate.input';
import { UpdateCatRateInput } from './dto/update-cat-rate.input';

@Injectable()
export class CatRateService {
  create(createCatRateInput: CreateCatRateInput) {
    return 'This action adds a new catRate';
  }

  findAll() {
    return `This action returns all catRate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catRate`;
  }

  update(id: number, updateCatRateInput: UpdateCatRateInput) {
    return `This action updates a #${id} catRate`;
  }

  remove(id: number) {
    return `This action removes a #${id} catRate`;
  }
}
