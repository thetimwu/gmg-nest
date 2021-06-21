import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GmguserService } from './gmguser.service';
import { Gmguser } from './entities/gmguser.entity';
import { CreateGmguserInput } from './dto/create-gmguser.input';
import { UpdateGmguserInput } from './dto/update-gmguser.input';
import { NotFoundException } from '@nestjs/common/exceptions';

@Resolver((of) => Gmguser)
export class GmguserResolver {
  constructor(private readonly gmguserService: GmguserService) {}

  @Mutation(() => Gmguser)
  createGmguser(
    @Args('createGmguserInput') createGmguserInput: CreateGmguserInput,
  ) {
    return this.gmguserService.create(createGmguserInput);
  }

  @Query(() => [Gmguser], { name: 'getAllGMGUser' })
  findAllGMGUser() {
    return this.gmguserService.findAll();
  }

  @Query(() => Gmguser, { name: 'getOneGMGUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    const gmguser = this.gmguserService.findOne(id);

    if (!gmguser) {
      throw new NotFoundException('GMG User not found');
    }

    return gmguser;
  }

  @Mutation(() => Gmguser)
  updateGmguser(
    @Args('updateGmguserInput') updateGmguserInput: UpdateGmguserInput,
  ) {
    return this.gmguserService.update(
      updateGmguserInput.id,
      updateGmguserInput,
    );
  }

  @Mutation(() => Gmguser)
  removeGmguser(@Args('id', { type: () => Int }) id: number) {
    return this.gmguserService.remove(id);
  }
}
