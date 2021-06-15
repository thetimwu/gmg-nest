import { ApiProperty } from '@nestjs/swagger';
import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';

export class CreateSiteDto {
  @ApiProperty()
  @Field()
  SiteName: string;
  @ApiProperty()
  @Field()
  AddressLine1: string;
  @ApiProperty()
  @Field()
  City: string;
  @ApiProperty()
  @Field((type) => Int)
  CustomerID: number;
  @ApiProperty()
  @Field((type) => Int)
  NoOfUnits: number;
  //   @ApiProperty()
  //   Date: Date;
}
