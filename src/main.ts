import { NestFactory } from '@nestjs/core';
import MainModule from './modules/app.module';
//import { Transport } from '@nestjs/microservices';
import { AppConfigService } from 'src/config/app/app.service';
import { runSwagger } from 'src/config/api/api.service';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  const appConfig: AppConfigService = await app.get(AppConfigService);

  await runSwagger(app);

  await app.listen(appConfig.port);
}
bootstrap();
