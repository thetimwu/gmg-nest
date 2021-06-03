import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { GMG_LIVE_CONNECTION, GMG_APP_CONNECTION } from './constants';
import { Employee } from './gmgLive/employee/employee.entity';

//entities: [__dirname + '/**/*.entity{.ts,.js}'],
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: GMG_LIVE_CONNECTION,
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'sa',
      database: 'GMG_LIVE',
      synchronize: false,
      logging: true,
      entities: [Employee],
    }),
    // TypeOrmModule.forRoot({
    //   name: GMG_APP_CONNECTION,
    //   database: 'gmgAppDb',
    //   type: 'mssql',
    //   host: 'localhost',
    //   port: 1433,
    //   username: 'sa',
    //   password: 'sa',
    //   synchronize: false,
    //   logging: true,
    //   entities: [],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
