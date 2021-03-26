import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
//import { BaseInterface } from 'common-syber-space/lib/proto/core/entity/v1/base-service.interface';
import { LanguageDto } from './dto/create-language.dto';

@Injectable()
export class LanguageService {
 //methods: BaseInterface<LanguageDto>;

// constructor(@Inject("GrpcLanguageService") private readonly bLanguageService: ClientGrpc) {}
/*
 onModuleInit() {
   this.methods = this.bLanguageService.getService("LanguageService");
 }*/
}
