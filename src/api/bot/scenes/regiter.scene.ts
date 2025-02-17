import { Injectable } from '@nestjs/common';
import { Ctx, Scene, SceneEnter, On, Action } from 'nestjs-telegraf';
import {
  emailMessage,
  passwordMessage,
  phoneNumberMessage,
  phoneNumberButtons,
  promocodeMessage,
  mainMessage,
  menuKeys,
  yesOrNo,
  askPromocodeMessage,
} from 'src/common/constants';
import { InjectRepository } from '@nestjs/typeorm';
import { Promocode, User } from 'src/core/entity';
import { UserRepository } from 'src/core/repository/user.repository';
import { Markup } from 'telegraf';
import { PromocodeRepository } from 'src/core/repository/promocode.repository';

@Scene('REGISTER_SCENE')
@Injectable()
export class RegisterScene {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
  ) {}
  @SceneEnter()
  async sendEmailMessage(ctx) {
    await ctx.editMessageText(emailMessage[ctx.session.lang][0]);
  }

  @On('text')
  async askEmail(@Ctx() ctx) {
    if (ctx.message && 'text' in ctx.message) {
      const email = ctx.message.text;

      const userExists = await this.userRepo.findOne({ where: { email } });

      if (userExists) {
        await ctx.reply(emailMessage[ctx.session.lang][2]);
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!emailRegex.test(email)) {
        await ctx.reply(emailMessage[ctx.session.lang][1]);
        return;
      }

      await this.userRepo.update({ telegram_id: `${ctx.from.id}` }, { email });
      ctx.scene.enter('password');
    } else {
      await ctx.reply('ERROR');
    }
  }
}

@Scene('password')
export class PasswordScene {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
  ) {}
  @SceneEnter()
  async sendPasswordMessage(@Ctx() ctx) {
    await ctx.reply(passwordMessage[ctx.session.lang][0]);
  }

  @On('text')
  async askPassword(@Ctx() ctx) {
    if (ctx.message && 'text' in ctx.message) {
      const password = ctx.message.text;

      if (password.length < 6) {
        await ctx.reply(passwordMessage[ctx.session.lang][1]);
        return;
      }

      await this.userRepo.update(
        { telegram_id: `${ctx.from.id}` },
        { password },
      );
      await ctx.scene.enter('phone_number');
    } else {
      console.log('error');
    }
  }
}

@Scene('phone_number')
export class PhoneNumberScene {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
  ) {}

  @SceneEnter()
  async sendPhonoNumberMessage(@Ctx() ctx) {
    await ctx.reply(phoneNumberMessage[ctx.session.lang][0], {
      parse_mode: 'HTML',
      ...Markup.keyboard([
        [Markup.button.contactRequest(phoneNumberButtons[ctx.session.lang])],
      ])
        .resize()
        .oneTime(),
    });
  }

  @On('contact')
  async askContact(@Ctx() ctx) {
    if (ctx.message && 'contact' in ctx.message) {
      const phone_number = ctx.message.contact.phone_number;
      await this.userRepo.update(
        { telegram_id: `${ctx.from.id}` },
        { phone_number },
      );
      await ctx.scene.enter('askPromocode');
    } else {
      await ctx.reply(phoneNumberMessage[ctx.session.lang][1]);
    }
  }
}

@Scene('askPromocode')
export class AskPromocodeScene {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
  ) {}

  @SceneEnter()
  async sendPromocodeMessage(@Ctx() ctx) {
    await ctx.reply(promocodeMessage[ctx.session.lang], {
      reply_markup: yesOrNo[ctx.session.lang],
    });
  }

  @Action('yes')
  async yes(@Ctx() ctx) {
    ctx.scene.enter('getPromocode');
  }

  @Action('no')
  async no(@Ctx() ctx) {
    await ctx.editMessageText(mainMessage[ctx.session.lang], {
      reply_markup: menuKeys[ctx.session.lang],
    });
    ctx.scene.leave();
  }
}

@Scene('getPromocode')
export class GetPromocode {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
    @InjectRepository(Promocode)
    private readonly promocodeRepo: PromocodeRepository,
  ) {}

  @SceneEnter()
  async askPromocode(@Ctx() ctx) {
    await ctx.editMessageText(askPromocodeMessage[ctx.session.lang]);
  }

  @On('text')
  async onText(@Ctx() ctx) {
    if (ctx.message && 'text' in ctx.message) {
      const content = ctx.message.text;
      const promocode = await this.promocodeRepo.findOne({
        where: { content },
      });
      if (promocode && promocode.allowed_uses > 0) {
        await this.userRepo.update(
          { telegram_id: `${ctx.from.id}` },
          { balance: promocode.amount },
        );
        await this.promocodeRepo.update(
          { content },
          { allowed_uses: promocode.allowed_uses - 1 },
        );
      }
      ctx.session.lastMessage = await ctx.reply(mainMessage[ctx.session.lang], {
        reply_markup: menuKeys[ctx.session.lang],
      });
      ctx.scene.leave();
    }
  }
}
