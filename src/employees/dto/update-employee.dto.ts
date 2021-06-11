import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  FirstName?: string;
  @ApiProperty()
  LastName?: string;
  @ApiProperty()
  AddressLine1?: string;
  @ApiProperty()
  City?: string;
  @ApiProperty()
  JobID?: number;
  @ApiProperty()
  NINumber?: string;
}
