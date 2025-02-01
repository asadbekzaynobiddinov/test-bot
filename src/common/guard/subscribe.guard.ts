import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Telegraf, Markup } from 'telegraf';
import { config } from 'src/config';
import {
  joinMessage,
  requireChanels,
  requireMessage,
  subscribeMessage,
} from '../constants';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/entity';
import { UserRepository } from 'src/core/repository';

@Injectable()
export class ChannelSubscriptionGuard implements CanActivate {
  private readonly bot: Telegraf;

  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
  ) {
    this.bot = new Telegraf(config.TOKEN);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const [ctx] = context.getArgs();
    const userId = ctx.from.id;

    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: userId.toString() },
    });

    try {
      const inactiveChannels = [];

      for (const channel of requireChanels) {
        const chatId = channel[0];
        try {
          const member = await this.bot.telegram.getChatMember(chatId, userId);
          if (member.status === 'left') {
            inactiveChannels.push(channel);
          }
        } catch (error) {
          console.log(
            `Error checking membership for channel ${channel[0]}: ${error}`,
          );
        }
      }

      if (inactiveChannels.length > 0) {
        const keys = [];

        const buttons = inactiveChannels.map((channel) => {
          return Markup.button.url(
            `${joinMessage[currentUser.lang]}`,
            `${channel[1]}`,
          );
        });

        keys.push(buttons);
        keys.push([
          Markup.button.callback(
            subscribeMessage[currentUser.lang],
            'subscribed',
          ),
        ]);
        await ctx.editMessageText(
          requireMessage[currentUser.lang],
          Markup.inlineKeyboard(keys),
        );

        return false;
      }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
