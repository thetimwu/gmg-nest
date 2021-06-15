import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';
import { CreateSiteDto } from './create-site.dto';
// import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateSiteDto extends PartialType(CreateSiteDto) {}
