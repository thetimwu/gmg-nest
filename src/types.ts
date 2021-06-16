import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteResult {
  @Field({ nullable: true })
  isOk?: boolean;
  @Field({ nullable: true })
  error?: string;
}
