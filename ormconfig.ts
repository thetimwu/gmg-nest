import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import { Gmguser } from 'src/gmguser/entities/gmguser.entity';
import { Employee } from 'src/employees/employee.entity';
import { CatRate } from 'src/cat-rate/entities/cat-rate.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { HouseType } from 'src/house-types/entities/house-type.entity';
import { Site } from 'src/sites/entities/site.entity';

// entities: ['dist/**/*.entity{.ts,.js}'],
const config: SqlServerConnectionOptions = {
  name: 'gmgLiveDb',
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'sa',
  database: 'GMG_LIVE',
  synchronize: false,
  entities: [Employee, CatRate, Customer, HouseType, Site],
  extra: {
    trustServerCertificate: true,
  },
};

export const config2: SqlServerConnectionOptions = {
  name: 'gmgAppDb',
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'sa',
  database: 'gmgAppDb',
  synchronize: false,
  entities: [Gmguser],
  extra: {
    trustServerCertificate: true,
  },
};

export default config;
