import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Transport } from '@nestjs/microservices/enums/transport.enum';
import {join} from 'path';
import { LocalStrategy } from './strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [ 
    JwtModule.register({
      secret: "dwqdqdwqdwqdwq",
      signOptions: { expiresIn: '60s' },
    }),
    PassportModule.register({session: true})],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
