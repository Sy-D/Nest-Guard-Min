import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { HealthCheckService } from '@nestjs/terminus';

@Module({
  imports: [HealthCheckService],
  controllers: [HealthCheckController]
})
export class HealthCheckModule {}
