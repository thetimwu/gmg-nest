import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config, { config2 } from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import { SitesModule } from './sites/sites.module';
import { CustomersModule } from './customers/customers.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HouseTypesModule } from './house-types/house-types.module';
import { CatRateModule } from './cat-rate/cat-rate.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { GmguserModule } from './gmguser/gmguser.module';
import { EventsGateway } from './events/events.gateway';
import { ServeStaticModule } from '@nestjs/serve-static';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({ ...config, autoLoadEntities: true }),
    TypeOrmModule.forRoot({ ...config2, autoLoadEntities: true }),
    EmployeesModule,
    SitesModule,
    CustomersModule,
    HouseTypesModule,
    CatRateModule,
    GmguserModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cat-rate', method: RequestMethod.GET });
  }
}
