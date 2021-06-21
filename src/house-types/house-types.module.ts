import { Module } from '@nestjs/common';
import { HouseTypesService } from './house-types.service';
import { HouseTypesController } from './house-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseType } from './entities/house-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HouseType], 'gmgLiveDb')],
  controllers: [HouseTypesController],
  providers: [HouseTypesService],
  exports: [HouseTypesService],
})
export class HouseTypesModule {}
