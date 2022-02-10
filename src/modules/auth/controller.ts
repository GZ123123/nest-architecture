import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './service';
import { LocalAuthGuard } from 'src/common/guards/local_auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
