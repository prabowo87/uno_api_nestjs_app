import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const dns = require('dns');
  dns.setDefaultResultOrder('ipv4first');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
