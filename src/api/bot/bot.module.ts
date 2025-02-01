import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { options } from 'src/config/telegram.config';
import { CommandsModule } from './commands/commands.module';
import { ActionsModule } from './actions/actions.module';
import { ScenesModule } from './scenes/scenes.module';

@Module({
  imports: [
    TelegrafModule.forRootAsync(options()),
    CommandsModule,
    ActionsModule,
    ScenesModule,
  ],
})
export class BotModule {}
