import { NestFactory } from '@nestjs/core';
import MainModule from './modules/app.module';
import { Transport } from '@nestjs/microservices';
import { AppConfigService } from 'src/config/app/app.service';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  const appConfig: AppConfigService = app.get(AppConfigService);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4000,
    },
  });

  await app.startAllMicroservices();

  await app.listen(appConfig.port);
}
bootstrap();
