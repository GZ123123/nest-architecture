import { PassportStrategy } from '@nestjs/passport';
//import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'yoursecret',
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, user: payload.user };
  }
}
