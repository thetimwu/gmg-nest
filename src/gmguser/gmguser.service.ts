import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGmguserInput } from './dto/create-gmguser.input';
import { UpdateGmguserInput } from './dto/update-gmguser.input';
import { Gmguser } from './entities/gmguser.entity';

@Injectable()
export class GmguserService {
  constructor(
    @InjectRepository(Gmguser, 'gmgAppDb')
    private gmguserRepository: Repository<Gmguser>,
  ) {}

  create(createGmguserInput: CreateGmguserInput) {
    return 'This action adds a new gmguser';
  }

  findAll() {
    return this.gmguserRepository.find({
      order: { id: 'ASC' },
      skip: 0,
      take: 10,
    });
  }

  findOne(id: number) {
    return this.gmguserRepository.findOne(id);
  }

  update(id: number, updateGmguserInput: UpdateGmguserInput) {
    return `This action updates a #${id} gmguser`;
  }

  remove(id: number) {
    return `This action removes a #${id} gmguser`;
  }
}
