import { Injectable } from '@nestjs/common';
import { Ctx, Scene, SceneEnter, On } from 'nestjs-telegraf';
import { SceneContext } from 'telegraf/typings/scenes';
import {
  emailMessage,
  passwordMessage,
  phoneNumberMessage,
  phoneNumberButtons,
  promocodeMessage,
  mainMessage,
  menuKeys,
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
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: ctx.from.id.toString() },
    });
    await ctx.editMessageText(emailMessage[currentUser.lang][0]);
  }

  @On('text')
  async askEmail(@Ctx() ctx: SceneContext) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    if (ctx.message && 'text' in ctx.message) {
      const email = ctx.message.text;

      const userExists = await this.userRepo.findOne({ where: { email } });

      if (userExists) {
        await ctx.reply(emailMessage[currentUser.lang][2]);
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!emailRegex.test(email)) {
        await ctx.reply(emailMessage[currentUser.lang][1]);
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
  async sendPasswordMessage(@Ctx() ctx: SceneContext) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.reply(passwordMessage[currentUser.lang][0]);
  }

  @On('text')
  async askPassword(@Ctx() ctx: SceneContext) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });

    if (ctx.message && 'text' in ctx.message) {
      const password = ctx.message.text;

      if (password.length < 6) {
        await ctx.reply(passwordMessage[currentUser.lang][1]);
        return;
      }

      await this.userRepo.update(
        { telegram_id: `${ctx.from.id}` },
        { password },
      );
      await ctx.scene.enter('phone_number');
    } else {
      await ctx.reply('ERROR');
    }
  }
}

@Scene('phone_number')
export class PhoneNumberScene {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
  ) {}

  @SceneEnter()
  async sendPhonoNumberMessage(@Ctx() ctx: SceneContext) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.reply(phoneNumberMessage[currentUser.lang][0], {
      parse_mode: 'HTML',
      ...Markup.keyboard([
        [Markup.button.contactRequest(phoneNumberButtons[currentUser.lang])],
      ])
        .resize()
        .oneTime(),
    });
  }

  @On('contact')
  async askContact(@Ctx() ctx: SceneContext) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    if (ctx.message && 'contact' in ctx.message) {
      const phone_number = ctx.message.contact.phone_number;
      await this.userRepo.update(
        { telegram_id: `${ctx.from.id}` },
        { phone_number },
      );
      await ctx.scene.enter('promocode');
    } else {
      await ctx.reply(phoneNumberMessage[currentUser.lang][1]);
    }
  }
}

@Scene('promocode')
export class PromocodeScene {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
    @InjectRepository(Promocode)
    private readonly promocodeRepo: PromocodeRepository,
  ) {}

  @SceneEnter()
  async sendPromocodeMessage(@Ctx() ctx: SceneContext) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.reply(promocodeMessage[currentUser.lang]);
  }

  @On('text')
  async askPromocode(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
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
      await ctx.reply(mainMessage[currentUser.lang], {
        reply_markup: menuKeys[currentUser.lang],
      });
      ctx.scene.leave();
    }
  }
}
