import { Module } from '@nestjs/common';
import { CommandsService } from './commands/commands.service';
import { CommandsModule } from './commands/commands.module';
import { ActionsModule } from './actions/actions.module';
import { ScenesModule } from './scenes/scenes.module';

@Module({
  providers: [CommandsService],
  imports: [CommandsModule, ActionsModule, ScenesModule],
})
export class AdminModule {}
