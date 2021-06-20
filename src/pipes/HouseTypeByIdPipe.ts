import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { HouseTypesService } from 'src/house-types/house-types.service';
import { HouseType } from '../house-types/entities/house-type.entity';

@Injectable()
export class HouseTypeByIdPipe
  implements PipeTransform<string, Promise<HouseType>>
{
  constructor(private houseTypesService: HouseTypesService) {}
  async transform(
    value: string,
    metadata: ArgumentMetadata,
  ): Promise<HouseType> {
    if (metadata.type === 'param') {
      return await this.houseTypesService.findOne(+value);
    }

    throw new BadRequestException('HouseType transformation failed');
  }
}
