import { Injectable, Inject } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { ClientGrpc } from '@nestjs/microservices/interfaces/client-grpc.interface';


export interface IUserService {
    findOne(data: { id: number }): Observable<any>;
  }

@Injectable()
export class TestService {
  private userService: IUserService;

  constructor(
    @Inject("UserService") private readonly clientServiceA: ClientGrpc
  ) {}

  onModuleInit() {
    this.userService = this.clientServiceA.getService("UserService");
  }

  pingServiceA() {
    const startTs = Date.now();
    const pattern = { cmd: "ping" };
    const payload = {};
  /*  return this.clientServiceA.getService("UserService").
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs }))
      );*/

      const bla = this.userService.findOne({id: 1});
      console.log('result', bla);
     return bla;
  }
} 