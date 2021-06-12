import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty()
  FirstName: string;
  @ApiProperty()
  LastName: string;
  @ApiProperty()
  AddressLine1: string;
  @ApiProperty()
  City: string;
  @ApiProperty()
  JobID: number;
  @ApiProperty()
  NINumber: string;
}