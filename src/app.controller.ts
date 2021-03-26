import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {

  @Get("/ping-a")
  pingServiceA() {
   // return this.userService.pingServiceA();
  }

  @Get("/ping-b")
  pingServiceB() {
   // return this.appService.pingServiceB();
  }

  @Get("/ping-all")
  pingAll() {
    /*onst mapped = zip(
      this.userService.pingServiceA(),
      this.userService.pingServiceA()
    ).pipe(
      map(([pongServiceA, pongServiceB]) => ({
        pongServiceA,
        pongServiceB
      }))
    ).subscribe(res => {
      console.log('res');
      return res;
    });
  }*/
}
}