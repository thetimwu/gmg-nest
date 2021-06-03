import { Injectable } from '@nestjs/common';
import { Employee } from './employee.interface';

@Injectable()
export class EmployeeService {
  private readonly employees: Employee[] = [];

  create(employee: Employee) {
    this.employees.push(employee);
  }

  findAll(): Employee[] {
    return this.employees;
  }
}
