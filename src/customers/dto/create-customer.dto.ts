import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  CustomerName: string;

  @ApiProperty()
  BillingAddressLine1: string;

  @ApiProperty()
  City: string;

  @ApiProperty()
  PostalCode: string;

  @ApiProperty()
  PhoneNumber: string;

  @ApiProperty()
  FaxNumber: string;

  @ApiProperty()
  NonPrivate: boolean;

  @ApiProperty()
  CustomerType: boolean;
}
