
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
//import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "jdoiqkjop4892hc38hfk3"//jwtConstants.secret,
    });
  }

  async validate(payload: any) {
      console.log('payload', payload);
    return { userId: payload.sub, username: payload.username };
  }
}