import { Module } from '@nestjs/common';
import { LookupController } from './lookup.controller';
import { LanguageModule } from './language/language.module';

@Module({
  imports: [LanguageModule],
  controllers: [LookupController]
})
export class LookupModule {}
