import { Module } from '@nestjs/common';
import { CommandsService } from './commands.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [CommandsService],
})
export class CommandsModule {}
