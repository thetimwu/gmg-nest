import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Customer } from './entities/customer.entity';
import { CustomersResolver } from './customers.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Customer], 'gmgLiveDb')],
  controllers: [CustomersController],
  providers: [CustomersService, CustomersResolver],
  exports: [CustomersService],
})
export class CustomersModule {}
