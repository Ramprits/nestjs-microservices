import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestjsConfigModule,
} from '@nestjs/config';

@Module({
  imports: [
    NestjsConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
