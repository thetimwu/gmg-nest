import { Test, TestingModule } from '@nestjs/testing';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

describe('EmployeesController', () => {
  let controller: EmployeesController;

  const mockEmployees = [
    {
      EmployeeID: 1,
      FirstName: 'tim',
      LastName: 'wu',
      AddressLine1: 'add1',
      City: 'Glasgow',
      JobID: 1,
      NINumber: 'NI123',
    },
    {
      EmployeeID: 2,
      FirstName: 'john',
      LastName: 'Dole',
      AddressLine1: 'add1',
      City: 'Glasgow',
      JobID: 1,
      NINumber: 'NI123',
    },
  ];
  const mockEmployeesService = {
    createEmployee: jest.fn((dto) => {
      return {
        EmployeeID: Date.now(),
        ...dto,
      };
    }),
    findAll: jest.fn((firstname?: string, lastname?: string) => {
      if (firstname && lastname) {
        return mockEmployees.filter(
          (e) => e.FirstName === firstname && e.LastName === lastname,
        );
      }
      if (firstname) {
        return mockEmployees.filter((e) => e.FirstName === firstname);
      }
      if (lastname) {
        return mockEmployees.filter((e) => e.LastName === lastname);
      }
      return mockEmployees;
    }),
    findById: jest.fn((id) => {
      return mockEmployees.filter((e) => e.EmployeeID === id)[0];
    }),
    updateEmployee: jest.fn((id, body: UpdateEmployeeDto) => {
      const employee = mockEmployees.filter((e) => e.EmployeeID === id)[0];
      return { ...employee, ...body };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesController],
      providers: [EmployeesService],
    })
      .overrideProvider(EmployeesService)
      .useValue(mockEmployeesService)
      .compile();

    controller = module.get<EmployeesController>(EmployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a employee', () => {
    expect(
      controller.addEmployee({
        FirstName: 'tim',
        LastName: 'wu',
        AddressLine1: 'add1',
        City: 'Glasgow',
        JobID: 1,
        NINumber: 'NI123',
      }),
    ).toEqual({
      EmployeeID: expect.any(Number),
      FirstName: 'tim',
      LastName: 'wu',
      AddressLine1: 'add1',
      City: 'Glasgow',
      JobID: 1,
      NINumber: 'NI123',
    });
  });

  // async testing
  it('should get all employees', () => {
    return controller.findAll().then((data) => {
      // expect(data).toEqual(mockEmployees);
      expect(data.length).toBe(2);
    });
  });

  it('should get an employee', () => {
    return controller.findAll('tim').then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          {
            EmployeeID: 1,
            FirstName: 'tim',
            LastName: 'wu',
            AddressLine1: 'add1',
            City: 'Glasgow',
            JobID: 1,
            NINumber: 'NI123',
          },
        ]),
      );
    });
  });

  it('should return an employee by passing first and last names', () => {
    return controller.findAll('tim', 'wu').then((data) => {
      expect(data).toEqual(
        expect.not.arrayContaining([
          {
            EmployeeID: 2,
            FirstName: 'john',
            LastName: 'Dole',
            AddressLine1: 'add1',
            City: 'Glasgow',
            JobID: 1,
            NINumber: 'NI123',
          },
        ]),
      );
    });
  });

  it('should find one employee', () => {
    return controller.getEmployeeById(1).then((data) => {
      expect(data).toEqual(
        expect.objectContaining({
          FirstName: 'tim',
        }),
      );
    });
  });

  it('should update an employee', () => {
    return expect(controller.updateEmployee(1, { LastName: 'Woo' })).toEqual(
      expect.objectContaining({
        LastName: 'Woo',
      }),
    );
  });
});
