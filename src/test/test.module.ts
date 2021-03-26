import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { ClientsModule } from '@nestjs/microservices/module/clients.module';
import { Transport } from '@nestjs/microservices/enums/transport.enum';
import { join } from 'path';

const protoPath = join(process.cwd(), 'node_modules/common-syber-space/src/Proto/crm/v1/user.proto');
const protosPath = join(process.cwd(), 'node_modules/common-syber-space/src/Proto/');


@Module({
  imports: [],
  controllers: [TestController],
  providers: [TestService],
  exports: [TestService]
})
export class TestModule {}
