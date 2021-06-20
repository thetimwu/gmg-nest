import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeeResolver } from './employee.resolver';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeesService, EmployeeResolver],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
