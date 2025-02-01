import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { options } from 'src/config/telegram.config';
import { CommandsModule } from './commands/commands.module';
import { ActionsModule } from './actions/actions.module';
import { ScenesModule } from './scenes/scenes.module';
import { ChannelSubscriptionGuard } from 'src/common/guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/entity';

@Module({
  imports: [
    TelegrafModule.forRootAsync(options()),
    CommandsModule,
    ActionsModule,
    ScenesModule,
    TypeOrmModule.forFeature([User]),
  ],
  providers: [ChannelSubscriptionGuard],
})
export class BotModule {}
