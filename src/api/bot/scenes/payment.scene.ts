import { Scene, SceneEnter, On, Ctx } from 'nestjs-telegraf';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment, User } from 'src/core/entity';
import { PaymentRepository, UserRepository } from 'src/core/repository';
import {
  paymentMessage1,
  paymentMessage2,
  paymentMessage3,
  mainMessage,
  menuKeys,
} from 'src/common/constants';
import { config } from 'src/config';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

@Scene('PAYMENT_SCENE')
export class PaymentScene {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
    @InjectRepository(Payment) private readonly paymentRepo: PaymentRepository,
  ) {}

  @SceneEnter()
  async sendPaymentMessage(@Ctx() ctx) {
    await ctx.reply(paymentMessage1[ctx.session.lang][0]);
  }

  @On('text')
  async askPaymentAmount(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    if (ctx.message && 'text' in ctx.message) {
      const amount = ctx.message.text;
      if (
        !amount ||
        isNaN(amount) ||
        amount <= 0 ||
        amount.includes('.') ||
        amount.includes(',')
      ) {
        await ctx.reply(paymentMessage1[ctx.session.lang][1]);
        return;
      }

      if (+amount < 10000) {
        await ctx.reply(paymentMessage1[ctx.session.lang][2]);
        return;
      }

      const newPayment = this.paymentRepo.create({
        amount,
        payment_date: new Date(Date.now()).toISOString().split('T')[0],
        user: {
          id: currentUser.id,
        },
      });

      await this.paymentRepo.save(newPayment);
      ctx.session.paymentId = newPayment.id;
      await ctx.scene.enter('paymentImage');
    }
  }
}

@Scene('paymentImage')
export class PaymentImage {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
    @InjectRepository(Payment) private readonly paymentRepo: PaymentRepository,
  ) {}

  @SceneEnter()
  async sendImageMessage(@Ctx() ctx) {
    await ctx.reply(paymentMessage2[ctx.session.lang][0]);
  }

  @On('photo')
  async askPhoto(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });

    if (ctx.message && 'photo' in ctx.message) {
      const file = ctx.message.photo;
      const fileId = file[file.length - 1].file_id;
      const fileUrl = await ctx.telegram.getFileLink(fileId);
      const payment = await this.paymentRepo.findOne({
        where: { id: +ctx.session.paymentId },
      });

      const response = await axios({
        url: fileUrl.href,
        responseType: 'arraybuffer',
      });

      const url = path.join(
        __dirname,
        '..',
        '..',
        '..',
        'uploads',
        `${currentUser.telegram_id}${payment.id}${fileUrl.href.split('photos/')[1]}`,
      );

      fs.writeFileSync(url, response.data);

      payment.image_url = url;

      await this.paymentRepo.save(payment);

      await ctx.reply(paymentMessage3[ctx.session.lang]);

      ctx.session.lastMessage = await ctx.reply(mainMessage[ctx.session.lang], {
        reply_markup: menuKeys[ctx.session.lang],
      });

      const chanelMessage =
        `Email: ${currentUser.email}\n` +
        `Telefon: ${currentUser.phone_number}\n` +
        `Miqdor: ${payment.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} so'm`;

      await ctx.telegram.sendPhoto(config.ARIZALAR_KANALI, fileId, {
        caption: chanelMessage,
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Tasdiqlash ✅', callback_data: `accept=${payment.id}` },
              {
                text: 'Bekor qilish ❌',
                callback_data: `reject=${payment.id}`,
              },
            ],
          ],
        },
      });
      await ctx.scene.leave();
    }
  }
}
