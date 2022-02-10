import { Module } from '@nestjs/common';

import ExampleModule from './example/example.module';

@Module({
  imports: [ExampleModule],
})
export default class MainModule {}