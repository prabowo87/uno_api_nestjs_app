import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';


async function bootstrap() {
  const dns = require('dns');
  dns.setDefaultResultOrder('ipv4first');
  const app = await NestFactory.create(AppModule);
 /*  const appGraphql = await NestFactory.create(AppModule);
  appGraphql.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 })); */
  
  await app.listen(3000);
  // await appGraphql.listen(4000);
}
bootstrap();
 