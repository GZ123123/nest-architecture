import { Module } from '@nestjs/common';
import { ConfigRootModule } from 'src/config/index.module';
import ExampleModule from './example/example.module';
import AuthModule from './auth/auth.module';
@Module({
  imports: [ConfigRootModule, ExampleModule, AuthModule],
})
export default class MainModule {}
