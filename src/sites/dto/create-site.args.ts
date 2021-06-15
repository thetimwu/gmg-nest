import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateSiteArgs {
  @Field()
  SiteName: string;
  @Field()
  AddressLine1: string;
  @Field()
  City: string;
  @Field((type) => Int)
  CustomerID: number;
  @Field((type) => Int)
  NoOfUnits: number;
}

@InputType()
export class UpdateSiteArgs {
  @Field({ nullable: true })
  SiteName?: string;
  @Field({ nullable: true })
  AddressLine1?: string;
  @Field({ nullable: true })
  City?: string;
  @Field((type) => Int, { nullable: true })
  CustomerID?: number;
  @Field((type) => Int, { nullable: true })
  NoOfUnits?: number;
}

@ObjectType()
export class DeleteResult {
  @Field({ nullable: true })
  isOk?: boolean;
  @Field({ nullable: true })
  error?: string;
}
