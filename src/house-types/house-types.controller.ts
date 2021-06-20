import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseInterceptors,
} from '@nestjs/common';
import { HouseTypesService } from './house-types.service';
import { CreateHouseTypeDto } from './dto/create-house-type.dto';
import { UpdateHouseTypeDto } from './dto/update-house-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { HouseTypeByIdPipe } from '../pipes/HouseTypeByIdPipe';
import { HouseType } from './entities/house-type.entity';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';

@ApiTags('House-Type')
@Controller('house-types')
@UseInterceptors(new LoggingInterceptor())
export class HouseTypesController {
  constructor(private readonly houseTypesService: HouseTypesService) {}

  @Post()
  create(@Body() createHouseTypeDto: CreateHouseTypeDto) {
    return this.houseTypesService.create(createHouseTypeDto);
  }

  @Get()
  findAll() {
    return this.houseTypesService.findAll();
  }

  @Get(':id')
  @UsePipes(HouseTypeByIdPipe)
  findOne(@Param('id') id: string) {
    return id;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHouseTypeDto: UpdateHouseTypeDto,
  ) {
    return this.houseTypesService.update(+id, updateHouseTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.houseTypesService.remove(+id);
  }
}
