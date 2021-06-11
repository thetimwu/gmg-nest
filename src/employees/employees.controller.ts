import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employee.entity';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  @ApiQuery({
    name: 'firstname',
    description: 'Find all employees with the FirstName',
    required: false,
  })
  @ApiQuery({
    name: 'lastname',
    description: 'Find all employees with the LastName',
    required: false,
  })
  @ApiNotFoundResponse({ description: 'Employee not found' })
  @ApiOkResponse({ type: Employee, description: 'Employees found' })
  async findAll(
    @Query('firstname') firstname?: string,
    @Query('lastname') lastname?: string,
  ) {
    const employees = await this.employeesService.findAll(firstname, lastname);
    if (employees.length > 0) {
      return employees;
    } else {
      throw new NotFoundException('No Employee Found');
    }
  }

  @Get(':id')
  @ApiNotFoundResponse()
  async getEmployeeById(@Param('id', ParseIntPipe) id: number) {
    try {
      const employee = await this.employeesService.findById(id);
      if (!employee) {
        throw new NotFoundException('No Employee found.');
      }
      return employee;
    } catch (error) {
      throw new BadRequestException('Bad Request Exception');
    }
  }

  @ApiCreatedResponse({
    type: CreateEmployeeDto,
    description: 'Create employee successfully',
  })
  @ApiBadRequestResponse({ description: 'Employee not created' })
  @Post()
  addEmployee(@Body() body: CreateEmployeeDto) {
    return this.employeesService.createEmployee(body);
  }

  @ApiOkResponse({ description: 'Employee deleted successfully' })
  @ApiBadRequestResponse({ description: 'Fail to delete employee' })
  @Delete(':id')
  removeEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.deleteEmployee(id);
  }

  @ApiOkResponse({
    type: Employee,
    description: 'Employee updated successfully',
  })
  @ApiBadRequestResponse({ description: 'Fail to update employee' })
  @Patch(':id')
  updateEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateEmployeeDto,
  ) {
    return this.employeesService.updateEmployee(id, body);
  }
}
