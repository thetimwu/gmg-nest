import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

const config: SqlServerConnectionOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'sa',
  database: 'GMG_LIVE',
  synchronize: false,
  extra: {
    trustServerCertificate: true,
  },
};

export default config;
