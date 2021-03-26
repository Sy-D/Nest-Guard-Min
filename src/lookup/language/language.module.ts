import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import {join} from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';

const protoPath = join(process.cwd(), 'node_modules/common-syber-space/src/proto/lookups/v1/language.proto');
const protosPath = join(process.cwd(), 'node_modules/common-syber-space/src/proto');


@Module({
  imports: [ 
  /*  ClientsModule.register([
      {
        name: "GrpcLanguageService",
        transport: Transport.GRPC,
        options: {
          url: "localhost:5050",
          package: "grpc.lookups.v1",
          protoPath: protoPath,
          loader: {
            includeDirs: [protosPath]
        }
      }
    }
    ])*/
  ],
  controllers: [LanguageController],
  providers: [LanguageService]
})
export class LanguageModule {}
