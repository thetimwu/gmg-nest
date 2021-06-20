import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCatRateInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
