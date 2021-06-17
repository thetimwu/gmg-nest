import { ApiProperty } from '@nestjs/swagger';
import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

export class CreateSiteDto {
  @ApiProperty()
  @Field()
  @IsString()
  SiteName: string;

  @ApiProperty()
  @Field()
  @IsString()
  AddressLine1: string;

  @ApiProperty()
  @Field()
  @IsString()
  City: string;

  @ApiProperty()
  @IsInt()
  @Field((type) => Int)
  CustomerID: number;

  @ApiProperty()
  @IsInt()
  @Field((type) => Int)
  NoOfUnits: number;
  //   @ApiProperty()
  //   Date: Date;
}
