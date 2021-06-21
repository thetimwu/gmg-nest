import { CreateGmguserInput } from './create-gmguser.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGmguserInput extends PartialType(CreateGmguserInput) {
  @Field(() => Int)
  id: number;
}
