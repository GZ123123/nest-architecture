import { Controller, Get, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ role: 'user', cmd: 'get' })
  getUser(data: any): Promise<User> {
    return this.userService.findOne({ username: data.username });
  }

  @UseGuards(AuthGuard)
  @Get('greet')
  async greet(): Promise<string> {
    return 'Greetings authenticated user';
  }
}
