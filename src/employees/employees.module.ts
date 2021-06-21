import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config2 } from 'ormconfig';
import { Connection } from 'typeorm';
import { Employee } from './employee.entity';
import { EmployeeResolver } from './employee.resolver';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee], 'gmgLiveDb')],
  providers: [EmployeesService, EmployeeResolver],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
