import { InjectRepository } from '@nestjs/typeorm';
import { Update, Ctx, Command } from 'nestjs-telegraf';
import { User } from 'src/core/entity/users.entity';
import { UserRepository } from 'src/core/repository/user.repository';
import { Context } from 'telegraf';
import {
  startMessage,
  langKeys,
  mainMessage,
  menuKeys,
} from 'src/common/constants';
import { CustomContext } from 'src/common/types';

@Update()
export class CommandsService {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
  ) {}
  @Command('start')
  async start(@Ctx() ctx: CustomContext): Promise<void> {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });

    if (!currentUser || !currentUser.lang) {
      await ctx.reply(startMessage, {
        reply_markup: langKeys,
      });
      return;
    }
    await ctx.reply(mainMessage[currentUser.lang], {
      reply_markup: menuKeys[currentUser.lang],
    });
  }

  @Command('help')
  async help(@Ctx() ctx: Context) {
    await ctx.reply('Qanday yordam kerak');
  }
}
