import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SWAGGER, redocOptions } from './api.configuration';
import { RedocModule } from 'nestjs-redoc';

export const getConfig = () => {
  const config = new DocumentBuilder();

  return config;
};

export const runSwagger = async (app: INestApplication) => {
  console.log('archorn');

  const config = new DocumentBuilder()
    .setTitle(SWAGGER.title)
    .setDescription(SWAGGER.description)
    .setVersion(SWAGGER.version)
    .addTag('auth')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  await RedocModule.setup('/docs', app, document, redocOptions);
  //SwaggerModule.setup('swagger', app, document);
};
