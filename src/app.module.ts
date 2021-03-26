import { Module } from '@nestjs/common';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './iam/auth/auth.module';
import { JwtAuthGuard } from './iam/auth/guard/jwt-auth.guard';
import { LookupModule } from './lookup/lookup.module';

@Module({
    imports: [AuthModule, LookupModule],
    controllers: [AppController],
    providers: [
        {
            provide: APP_GUARD,
            useFactory: ref => new JwtAuthGuard(ref),
            inject: [Reflector]
        },
        AppService,
    ],
    exports: [AppService],
})
export class AppModule {}
