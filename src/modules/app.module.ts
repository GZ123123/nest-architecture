import { Module } from '@nestjs/common';
import { ConfigRootModule } from 'src/config/index.module';
import ExampleModule from './example';
import AuthModule from './auth';
@Module({
  imports: [ConfigRootModule, ExampleModule, AuthModule],
})
export default class MainModule { }
