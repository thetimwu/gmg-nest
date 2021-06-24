import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { TimeoutInterceptor } from './interceptor/Timeout.interceptor';
import { NotFoundInterceptor } from './interceptor/NotFound.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useGlobalInterceptors(new NotFoundInterceptor());

  const config = new DocumentBuilder()
    .setTitle('gmg-nest')
    .setDescription('GMG Backend API')
    .setVersion('1.0')
    .addTag('gmg api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
  console.log(`Server is running on: ${await app.getUrl()}`);
}
bootstrap();
