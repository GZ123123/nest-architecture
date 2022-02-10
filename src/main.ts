import { NestFactory } from '@nestjs/core';
import MainModule from './modules/app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4000,
    },
  });

  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
