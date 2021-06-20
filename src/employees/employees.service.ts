import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}

  findAll(firstname?: string, lastname?: string): Promise<Employee[]> {
    if (firstname && lastname) {
      return this.employeesRepository.find({
        where: { FirstName: firstname, LastName: lastname },
      });
    }

    if (firstname) {
      return this.employeesRepository.find({ where: { FirstName: firstname } });
    }

    if (lastname) {
      return this.employeesRepository.find({ where: { LastName: lastname } });
    }

    return this.employeesRepository.find({
      order: { EmployeeID: 'ASC' },
      skip: 0,
      take: 10,
    });
  }

  findById(id: number): Promise<Employee> {
    return this.employeesRepository.findOneOrFail(id);
  }

  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = createEmployeeDto;
    try {
      await this.employeesRepository.save(newEmployee);
    } catch (error) {
      throw new BadRequestException('Cannot create employee');
    }

    return newEmployee;
  }

  async deleteEmployee(id: number) {
    try {
      return await this.employeesRepository.delete(id);
    } catch (error) {
      throw new BadRequestException('Cannot delete employee');
    }
  }

  async updateEmployee(id: number, body: UpdateEmployeeDto) {
    const employee = this.employeesRepository.findOne(id);
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    const updatedEmployee = await this.employeesRepository.update(id, body);

    return this.employeesRepository.findOne(id);
  }
}
