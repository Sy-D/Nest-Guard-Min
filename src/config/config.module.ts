import { Global, Module } from '@nestjs/common';

import { ProtoConfigService } from './proto-config.service';

@Global()
@Module({
    providers: [
        {
            provide: ProtoConfigService,
            useValue: new ProtoConfigService(),
        },
    ],
    exports: [ProtoConfigService],
})
export class ConfigModule { }