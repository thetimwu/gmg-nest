import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { FindManyOptions } from 'typeorm';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';
import { DeleteResult } from 'src/types';

@Resolver((of) => Customer)
export class CustomersResolver {
  constructor(private customersService: CustomersService) {}

  //   @Query((returns) => [Customer])
  //   async getAllCustomers(
  //     @Args('options') options?: FindManyOptions<Customer>,
  //   ): Promise<Customer[]> {
  //     return await this.customersService.find();
  //   }
}
