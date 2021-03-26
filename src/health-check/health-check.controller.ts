import { Controller, OnModuleInit, Get } from '@nestjs/common';
import { Client, ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs/internal/Observable';
import {grpc} from 'grpc-health/src/health/interfaces/compiled';
import {
    DiskHealthIndicator,
    DNSHealthIndicator,
    GRPCHealthIndicator,
    HealthCheck,
    HealthCheckService,
    MemoryHealthIndicator,
    TypeOrmHealthIndicator,
  } from '@nestjs/terminus';
  import { HealthIndicatorResult } from '@nestjs/terminus';
import { from } from 'rxjs/internal/observable/from';


@Controller('HealthCheck')
export class HealthCheckController {
    constructor(
        private readonly health: HealthCheckService,
        private readonly grpc: GRPCHealthIndicator
    ) {}

    @Get('/version')
    version(): Observable<any> {
        return require('../../package.json').version;
    }

    @Get()
    @HealthCheck()
    execute(): Observable<HealthIndicatorResult> {
       return from(this.grpc.checkService('UserService', 'hero.health.v1'));
    }

   /* @GrpcMethod('Health')
    @HealthCheck()
    Check(data: HealthCheckRequest.AsObject): HealthCheckResponse.AsObject {
        return {
            status: ServingStatus.SERVING,
        };
    }*/

}