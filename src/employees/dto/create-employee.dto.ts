import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateEmployeeDto {
  @Field()
  @ApiProperty()
  FirstName: string;
  @Field()
  @ApiProperty()
  LastName: string;
  @Field()
  @ApiProperty()
  AddressLine1: string;
  @Field()
  @ApiProperty()
  City: string;
  @Field()
  @ApiProperty()
  JobID: number;
  @Field()
  @ApiProperty()
  NINumber: string;
}
