import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import { SitesModule } from './sites/sites.module';
import { CustomersModule } from './customers/customers.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HouseTypesModule } from './house-types/house-types.module';
import { CatRateModule } from './cat-rate/cat-rate.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({ ...config, autoLoadEntities: true }),
    EmployeesModule,
    SitesModule,
    CustomersModule,
    HouseTypesModule,
    CatRateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
