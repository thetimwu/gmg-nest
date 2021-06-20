import {
  Resolver,
  Query,
  Args,
  InputType,
  Field,
  Mutation,
  ObjectType,
} from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';
import { DeleteResult } from 'src/types';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employee.entity';
import { EmployeesService } from './employees.service';

@InputType()
class GetEmployeeInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}

@Resolver((of) => Employee)
export class EmployeeResolver {
  constructor(private employeesService: EmployeesService) {}

  @Query((returns) => [Employee])
  async getAllEmployee(@Args('options') options: GetEmployeeInput) {
    return await this.employeesService.findAll(
      options?.firstName,
      options?.lastName,
    );
  }

  @Query((returns) => Employee)
  async getOneEmployee(@Args('id') id: number) {
    return await this.employeesService.findById(id);
  }

  @Mutation((returns) => Employee)
  async createEmployee(@Args('inputs') input: CreateEmployeeDto) {
    return await this.employeesService.createEmployee(input);
  }

  @Mutation((returns) => Employee)
  async updateEmployee(
    @Args('id') id: number,
    @Args('inputs') input: UpdateEmployeeDto,
  ) {
    return await this.employeesService.updateEmployee(id, { ...input });
  }

  @Mutation((returns) => DeleteResult)
  async deleteEmployee(@Args('id') id: number) {
    try {
      const res = await this.employeesService.deleteEmployee(id);
      return res.affected !== 0 ? { isOk: true } : { isOk: false };
    } catch (error) {
      return { error: error.message };
    }
  }
}
