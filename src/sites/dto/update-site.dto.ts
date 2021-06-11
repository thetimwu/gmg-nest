import { PartialType } from '@nestjs/swagger';
import { CreateSiteDto } from './create-site.dto';
// import { ApiProperty } from '@nestjs/swagger';

export class UpdateSiteDto extends PartialType(CreateSiteDto) {}
