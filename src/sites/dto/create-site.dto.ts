import { ApiProperty } from '@nestjs/swagger';

export class CreateSiteDto {
  @ApiProperty()
  SiteName: string;
  @ApiProperty()
  AddressLine1: string;
  @ApiProperty()
  City: string;
  @ApiProperty()
  CustomerID: number;
  @ApiProperty()
  NoOfUnits: number;
  //   @ApiProperty()
  //   Date: Date;
}
