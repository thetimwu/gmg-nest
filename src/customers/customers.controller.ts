import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';

@Crud({
  model: {
    type: Customer,
  },
})
@ApiTags('Customer')
@Controller('customers')
export class CustomersController implements CrudController<Customer> {
  constructor(public service: CustomersService) {}
}
