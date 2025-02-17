import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { config } from 'src/config';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/entity';
import { UserRepository } from 'src/core/repository';
import { UserRoles } from '../enum';

@Injectable()
export class AdminGuard implements CanActivate {
  private readonly bot: Telegraf;

  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
  ) {
    this.bot = new Telegraf(config.TOKEN);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const [ctx] = context.getArgs();
    try {
      const user = await this.userRepo.findOne({
        where: { telegram_id: `${ctx.from.id}` },
      });

      if (user.role != UserRoles.admin) {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }
}
