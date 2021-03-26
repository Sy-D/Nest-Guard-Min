import { Injectable, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

export interface IAuthService {
    login(credentials: {username: string, password: string}): Promise<any>;
    validate(credentials: any): Promise<{access_token: string}>
}

@Injectable()
export class AuthService {
    private _authService: IAuthService;

  /*  constructor(
    @Inject("GrpcIAMService") private readonly clientServiceA: ClientGrpc
  ) {}
*/
  onModuleInit() {
   // this._authService = this.clientServiceA.getService("AuthService");
  }

    async login(credentials: any) {
         const res = await this._authService.validate(credentials);
        
         console.log('login res', res);
         return res;
    }

     async validateUser(login: any) {
      const user = await this._authService.validate(login);
      console.log(user);
    /*  if(user) {
        const {password, ...result} = user;
        return result;
      }*/

      return null;
    }
  }