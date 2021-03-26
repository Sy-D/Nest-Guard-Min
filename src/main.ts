import chalk from "chalk";

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as fs from 'fs';
import path from 'path';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as compression from 'compression';
import { Reflector } from '@nestjs/core';
/*
console.log( chalk.red.bold( "Working Directory:" ), process.cwd() );
console.log( chalk.red.bold( "Resolved Directory:" ), path.resolve( "." ) );
const keyFile  = fs.readFileSync(path.resolve('./localhost.key'));
const certFile = fs.readFileSync(path.resolve('./localhost.crt'));*/
// install unhandled rejection handler
process.on("unhandledRejection", (err) => {
  Logger.log(chalk.red("unhandled rejection occured!"));
  Logger.error(err);
  console.trace();
  process.exit(1);
});

let app: INestApplication

async function bootstrap() {
  app = await NestFactory.create(AppModule, {
   /* httpsOptions: {
      key: keyFile,
      cert: certFile
    },*/
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
        // other transports...
      ],
    })
  });

  //app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.setGlobalPrefix('v1');
  app.use(helmet());
  //app.useGlobalGuards(new JwtAuthGuard(new Reflector));
  app.enableCors();
  //app.use(csurf());
  app.use(compression());

  const port = 3000;
  await app.listen(port).then(() => Logger.log("Api Gateway is is listening at port: " + port));
}

bootstrap()
    .catch((err) => {
        Logger.log("failed to launch ApiGateway\n", err);
    });

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
} 