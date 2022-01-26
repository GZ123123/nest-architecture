import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import Controller from './controller';
import Service from './service';

import { LoggerMiddleware } from 'src/infrastructure/middlewares/logger.middleware';

@Module({
  controllers: [Controller],
  providers: [Service],
  exports: [Service],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
