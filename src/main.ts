import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //respecting inpu format
    transform: true, //auto-transform payload to corresponding DTO
    forbidNonWhitelisted: true //return message after whilelist exception thrown
  }));
  await app.listen(3000);
}
bootstrap();
