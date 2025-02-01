import { Module } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { ScenesModule } from '../scenes/scenes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order, Payment, User } from 'src/core/entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Order, Payment]), ScenesModule],
  providers: [ActionsService],
})
export class ActionsModule {}
