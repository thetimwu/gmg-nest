import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateEmployeeDto {
  @Field({ nullable: true })
  @ApiProperty()
  FirstName?: string;
  @Field({ nullable: true })
  @ApiProperty()
  LastName?: string;
  @Field({ nullable: true })
  @ApiProperty()
  AddressLine1?: string;
  @Field({ nullable: true })
  @ApiProperty()
  City?: string;
  @Field({ nullable: true })
  @ApiProperty()
  JobID?: number;
  @Field({ nullable: true })
  @ApiProperty()
  NINumber?: string;
}
