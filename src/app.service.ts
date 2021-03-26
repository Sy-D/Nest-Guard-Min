import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy, ClientGrpc } from "@nestjs/microservices";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
} 