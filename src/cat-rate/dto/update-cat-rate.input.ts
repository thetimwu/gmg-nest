import { CreateCatRateInput } from './create-cat-rate.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCatRateInput extends PartialType(CreateCatRateInput) {
  @Field(() => Int)
  id: number;
}
