import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CatRateService } from './cat-rate.service';
import { CatRate } from './entities/cat-rate.entity';
import { CreateCatRateInput } from './dto/create-cat-rate.input';
import { UpdateCatRateInput } from './dto/update-cat-rate.input';

@Resolver(() => CatRate)
export class CatRateResolver {
  constructor(private readonly catRateService: CatRateService) {}

  @Mutation(() => CatRate)
  createCatRate(@Args('createCatRateInput') createCatRateInput: CreateCatRateInput) {
    return this.catRateService.create(createCatRateInput);
  }

  @Query(() => [CatRate], { name: 'catRate' })
  findAll() {
    return this.catRateService.findAll();
  }

  @Query(() => CatRate, { name: 'catRate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.catRateService.findOne(id);
  }

  @Mutation(() => CatRate)
  updateCatRate(@Args('updateCatRateInput') updateCatRateInput: UpdateCatRateInput) {
    return this.catRateService.update(updateCatRateInput.id, updateCatRateInput);
  }

  @Mutation(() => CatRate)
  removeCatRate(@Args('id', { type: () => Int }) id: number) {
    return this.catRateService.remove(id);
  }
}
