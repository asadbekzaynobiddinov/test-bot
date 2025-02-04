import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config';
import { User, Payment, Order, Promocode } from '../core/entity';
import { BotModule } from './bot/bot.module';
import { APP_GUARD } from '@nestjs/core';
import { LangGuard } from 'src/common/guard/lang.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.DB_HOST,
      port: +config.DB_PORT,
      username: config.DB_USER,
      password: config.DB_PASS,
      database: config.DB_NAME,
      entities: [User, Payment, Order, Promocode],
      synchronize: true,
    }),
    BotModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: LangGuard,
    },
  ],
})
export class AppModule {}
