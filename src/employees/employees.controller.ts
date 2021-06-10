import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }
}
