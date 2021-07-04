import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.entity';
import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  let service: EmployeesService;
  let repository: Repository<Employee>;

  const mockEmployeesRepository = {
    save: jest.fn().mockImplementation((dto: CreateEmployeeDto) => {
      return Promise.resolve({
        EmployeeID: Math.ceil(Math.random() * 10),
        ...dto,
      });
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeesService,
        {
          provide: getRepositoryToken(Employee, 'gmgLiveDb'),
          useValue: mockEmployeesRepository,
        },
      ],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
    repository = getRepository(Employee);
  });

  it('should be defined', () => {
    console.log('service: ', service);
    expect(service).toBeDefined();
  });

  // it('should save an employee', async () => {
  //   console.log('service: ', service);
  //   expect(
  //     await service.createEmployee({
  //       FirstName: 'tim',
  //       LastName: 'wu',
  //       AddressLine1: 'g',
  //       City: 'G',
  //       JobID: 10,
  //       NINumber: 'test',
  //     }),
  //   ).toEqual(expect.objectContaining({ EmployeeID: expect.any(Number) }));
  // });
});
