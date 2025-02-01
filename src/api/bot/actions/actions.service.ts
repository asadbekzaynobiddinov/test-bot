import { InjectRepository } from '@nestjs/typeorm';
import { Update, Action, Ctx } from 'nestjs-telegraf';
import { Order, Payment, User } from 'src/core/entity';
import { UserRepository } from 'src/core/repository/user.repository';
import { Status, UserLangs } from 'src/common/enum';
import {
  mainMessage,
  menuKeys,
  profileKeys,
  profileMessage,
  langMessages,
  setLangKeys,
  shopKeys,
  manualCommandMessage,
  backToMenuKeys,
  helpCommandMessages,
  pubgKeys,
  freeFireKeys,
  mobileLegendsSng,
  mobileLegendsTurk,
  balanceMessage,
  paymentButtons,
  paymentMethods,
  isNotAdminMessages,
  noOrderMessage,
  orderHistoryMessage,
  backToProfileText,
  purchasedListMessage,
  valuteMessage,
  paidOrderMessages,
  startOfListMessages,
  endOfListMessages,
  noPaymentMessage,
  paymentHistoryMessage,
} from 'src/common/constants';
import { OrderRepository, PaymentRepository } from 'src/core/repository';
import { Markup } from 'telegraf';

@Update()
export class ActionsService {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
    @InjectRepository(Order) private readonly orderRepo: OrderRepository,
    @InjectRepository(Payment) private readonly paymentRepo: PaymentRepository,
  ) {}
  @Action('uz')
  async setUzbLang(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });

    if (!currentUser || !currentUser.email) {
      const newUser = this.userRepo.create({
        telegram_id: `${ctx.from.id}`,
        first_name: ctx.from.first_name,
        last_name: ctx.from.last_name,
        username: ctx.from.username,
        lang: UserLangs.uz,
      });
      await this.userRepo.save(newUser);
      await ctx.scene.enter('REGISTER_SCENE');
    }
    await this.userRepo.update(
      { telegram_id: `${ctx.from.id}` },
      { lang: UserLangs.uz },
    );
  }

  @Action('en')
  async setEnLang(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });

    if (!currentUser || !currentUser.email) {
      const newUser = this.userRepo.create({
        telegram_id: `${ctx.from.id}`,
        first_name: ctx.from.first_name,
        last_name: ctx.from.last_name,
        username: ctx.from.username,
        lang: UserLangs.en,
      });
      await this.userRepo.save(newUser);
      await ctx.scene.enter('REGISTER_SCENE');
    }
    await this.userRepo.update(
      { telegram_id: `${ctx.from.id}` },
      { lang: UserLangs.en },
    );
  }

  @Action('ru')
  async setRuLang(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });

    if (!currentUser || !currentUser.email) {
      const newUser = this.userRepo.create({
        telegram_id: `${ctx.from.id}`,
        first_name: ctx.from.first_name,
        last_name: ctx.from.last_name,
        username: ctx.from.username,
        lang: UserLangs.ru,
      });
      await this.userRepo.save(newUser);
      await ctx.scene.enter('REGISTER_SCENE');
    }
    await this.userRepo.update(
      { telegram_id: `${ctx.from.id}` },
      { lang: UserLangs.ru },
    );
  }

  @Action('profile')
  async profile(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    const message =
      `${profileMessage[currentUser.lang][0]}\n` +
      `${profileMessage[currentUser.lang][1]}${currentUser.email}\n` +
      `${profileMessage[currentUser.lang][2]}${currentUser.balance
        .toString()
        .replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ',',
        )} ${profileMessage[currentUser.lang][3]}`;
    await ctx.editMessageText(message, {
      reply_markup: profileKeys[currentUser.lang],
    });
  }

  @Action('backToMenu')
  async backToMenu(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.editMessageText(mainMessage[currentUser.lang], {
      reply_markup: menuKeys[currentUser.lang],
    });
  }

  @Action('backToProfile')
  async backToProfile(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    const message =
      `${profileMessage[currentUser.lang][0]}\n` +
      `${profileMessage[currentUser.lang][1]}${currentUser.email}\n` +
      `${profileMessage[currentUser.lang][2]}${currentUser.balance
        .toString()
        .replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ',',
        )} ${profileMessage[currentUser.lang][3]}`;
    await ctx.editMessageText(message, {
      reply_markup: profileKeys[currentUser.lang],
    });
  }

  @Action('changeLang')
  async changeLang(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.editMessageText(langMessages[currentUser.lang], {
      reply_markup: setLangKeys[currentUser.lang],
    });
  }

  @Action('setUz')
  async setUz(@Ctx() ctx) {
    await this.userRepo.update(
      { telegram_id: `${ctx.from.id}` },
      { lang: UserLangs.uz },
    );
    await ctx.editMessageText(langMessages.uz, {
      reply_markup: setLangKeys.uz,
    });
  }

  @Action('setEn')
  async setEn(@Ctx() ctx) {
    await this.userRepo.update(
      { telegram_id: `${ctx.from.id}` },
      { lang: UserLangs.en },
    );
    await ctx.editMessageText(langMessages.en, {
      reply_markup: setLangKeys.en,
    });
  }

  @Action('setRu')
  async setRu(@Ctx() ctx) {
    await this.userRepo.update(
      { telegram_id: `${ctx.from.id}` },
      { lang: UserLangs.ru },
    );
    await ctx.editMessageText(langMessages.ru, {
      reply_markup: setLangKeys.ru,
    });
  }

  @Action('shop')
  async shop(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.editMessageText(mainMessage[currentUser.lang], {
      reply_markup: shopKeys[currentUser.lang],
    });
  }

  @Action('startPayment')
  async startPayment(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.editMessageText(mainMessage[currentUser.lang], {
      reply_markup: paymentMethods[currentUser.lang],
    });
  }

  @Action('pay')
  async pay(@Ctx() ctx) {
    await ctx.editMessageText(
      `<code>9860190112424188</code>\n` +
        `Alimov Hoshim\n` +
        `Aloqa bank\n` +
        `<code>+998907015500</code>`,
      {
        parse_mode: 'HTML',
      },
    );
    await ctx.scene.enter('PAYMENT_SCENE');
  }

  @Action('manual')
  async manual(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.editMessageText(manualCommandMessage[currentUser.lang], {
      reply_markup: backToMenuKeys[currentUser.lang],
    });
  }

  @Action('forHelp')
  async forHelp(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.editMessageText(helpCommandMessages[currentUser.lang], {
      reply_markup: backToMenuKeys[currentUser.lang],
      parse_mode: 'HTML',
    });
  }

  @Action('backToShop')
  async backToShop(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.editMessageText(mainMessage[currentUser.lang], {
      reply_markup: shopKeys[currentUser.lang],
    });
  }

  @Action('pubg')
  async pubg(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.editMessageText(mainMessage[currentUser.lang], {
      reply_markup: pubgKeys[currentUser.lang],
    });
  }

  @Action('ff')
  async freeFire(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.editMessageText(mainMessage[currentUser.lang], {
      reply_markup: freeFireKeys[currentUser.lang],
    });
  }

  @Action('mlbb_sng')
  async mlbb_sng(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.editMessageText(mainMessage[currentUser.lang], {
      reply_markup: mobileLegendsSng[currentUser.lang],
    });
  }

  @Action('mlbb_turk')
  async mlbb_turk(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    await ctx.editMessageText(mainMessage[currentUser.lang], {
      reply_markup: mobileLegendsTurk[currentUser.lang],
    });
  }

  @Action(/shop_key/)
  async pubgShop(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    const price = ctx.update.callback_query.data.split('=')[2];
    if (+currentUser.balance < +price) {
      await ctx.editMessageText(balanceMessage[currentUser.lang], {
        reply_markup: paymentButtons[currentUser.lang],
      });
      return;
    }
    await ctx.scene.enter('ORDER_SCENE');
  }

  @Action(/accept/)
  async accept(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    if (currentUser.role != 'admin') {
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        isNotAdminMessages[currentUser.lang],
        {
          show_alert: true,
        },
      );
      return;
    }
    const [, id] = ctx.update.callback_query.data.split('=');
    const payment = await this.paymentRepo.findOne({
      where: { id },
      relations: ['user'],
    });
    await this.userRepo.update(
      { id: payment.user.id },
      { balance: +payment.user.balance + +payment.amount },
    );
    payment.status = Status.done;
    await this.paymentRepo.save(payment);
    await ctx.editMessageCaption(
      `Email: ${payment.user.email}\n` +
        `Telefon: ${payment.user.phone_number}\n` +
        `Miqdor: ${payment.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} so'm\n` +
        `✅: Tasdiqlangan`,
    );
  }

  @Action(/reject/)
  async reject(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    if (currentUser.role != 'admin') {
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        isNotAdminMessages[currentUser.lang],
        {
          show_alert: true,
        },
      );
      return;
    }
    const [, id] = ctx.update.callback_query.data.split('=');
    const payment = await this.paymentRepo.findOne({
      where: { id },
      relations: ['user'],
    });
    payment.status = Status.rejected;
    await this.paymentRepo.save(payment);
    await ctx.editMessageCaption(
      `Email: ${payment.user.email}\n` +
        `Telefon: ${payment.user.phone_number}\n` +
        `Miqdor: ${payment.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} so'm\n` +
        `❌: Bekor qilingan`,
    );
  }

  @Action(/paid/)
  async paid(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    if (currentUser.role != 'admin') {
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        isNotAdminMessages[currentUser.lang],
        {
          show_alert: true,
        },
      );
      return;
    }
    const [, id] = ctx.update.callback_query.data.split('=');
    const order = await this.orderRepo.findOne({
      where: { id },
    });
    order.status = Status.done;
    await this.orderRepo.save(order);
    await ctx.editMessageText(
      `🎮 <b>${order.game_type.split('_')[0]}</b>\n` +
        `🆔 <code>${order.game_id}</code>\n` +
        `💸 ${order.amount}\n` +
        `💵 ${order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} so'm\n` +
        `✅: To'lab berildi.`,
      {
        parse_mode: 'HTML',
      },
    );
  }

  @Action(/dontPay/)
  async dontPay(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });

    if (currentUser.role !== 'admin') {
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        isNotAdminMessages[currentUser.lang],
        { show_alert: true },
      );
      return;
    }

    const [, id] = ctx.update.callback_query.data.split('=');
    const order = await this.orderRepo.findOne({
      where: { id },
      relations: ['user'],
    });

    await this.userRepo.update(
      { id: order.user.id },
      { balance: +order.user.balance + +order.price },
    );

    order.status = Status.rejected;
    await this.orderRepo.save(order);

    await ctx.editMessageText(
      `🎮 <b>${order.game_type.split('_')[0]}</b>\n` +
        `🆔 <code>${order.game_id}</code>\n` +
        `💸 ${order.amount}\n` +
        `💵 ${order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} so'm\n` +
        `❌ Bekor qilindi.`,
      { parse_mode: 'HTML' },
    );
  }

  @Action('orderHistory')
  async orderHistory(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    ctx.session.page = 1;
    const orders = await this.orderRepo
      .createQueryBuilder('orders')
      .select('orders.order_date', 'order_date')
      .addSelect('COUNT(orders.id)', 'total_orders')
      .where('orders.user.id = :id', { id: currentUser.id })
      .andWhere('orders.status = :status', { status: Status.done })
      .groupBy('orders.order_date')
      .orderBy('orders.order_date', 'DESC')
      .skip((ctx.session.page - 1) * 10)
      .take(10)
      .getRawMany();

    if (orders.length == 0) {
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        noOrderMessage[currentUser.lang],
        {
          show_alert: true,
        },
      );
      return;
    }

    const rows = [];

    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];

      const button = Markup.button.callback(
        order.order_date.split('-').reverse().join('.'),
        `order_date=${order.order_date}`,
      );

      if (i % 2 === 0) {
        rows.push([button]);
      } else {
        rows[rows.length - 1].push(button);
      }
    }

    rows.push([
      Markup.button.callback('➡️', 'next_order'),
      Markup.button.callback('⬅️', 'prev_order'),
    ]);

    rows.push([
      Markup.button.callback(
        backToProfileText[currentUser.lang],
        'backToProfile',
      ),
    ]);

    await ctx.editMessageText(
      orderHistoryMessage[currentUser.lang],
      Markup.inlineKeyboard(rows),
    );
  }

  @Action('prev_order')
  async prevOrder(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    if (ctx.session.page && ctx.session.page == 1) {
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        startOfListMessages[currentUser.lang],
        {
          show_alert: true,
        },
      );
      return;
    }
    ctx.session.page--;
    const orders = await this.orderRepo
      .createQueryBuilder('orders')
      .select('orders.order_date', 'order_date')
      .addSelect('COUNT(orders.id)', 'total_orders')
      .where('orders.user.id = :id', { id: currentUser.id })
      .andWhere('orders.status = :status', { status: Status.done })
      .groupBy('orders.order_date')
      .orderBy('orders.order_date', 'DESC')
      .skip((ctx.session.page - 1) * 10)
      .take(10)
      .getRawMany();

    if (orders.length == 0) {
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        noOrderMessage[currentUser.lang],
        {
          show_alert: true,
        },
      );
      return;
    }

    const rows = [];

    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];

      const button = Markup.button.callback(
        order.order_date.split('-').reverse().join('.'),
        `order_date=${order.order_date}`,
      );

      if (i % 2 === 0) {
        rows.push([button]);
      } else {
        rows[rows.length - 1].push(button);
      }
    }

    rows.push([
      Markup.button.callback('⬅️', 'prev'),
      Markup.button.callback('➡️', 'next'),
    ]);

    rows.push([
      Markup.button.callback(
        backToProfileText[currentUser.lang],
        'backToProfile',
      ),
    ]);

    await ctx.editMessageText(
      orderHistoryMessage[currentUser.lang],
      Markup.inlineKeyboard(rows),
    );
  }

  @Action('next_order')
  async nextOrder(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    ctx.session.page++;
    const orders = await this.orderRepo
      .createQueryBuilder('orders')
      .select('orders.order_date', 'order_date')
      .addSelect('COUNT(orders.id)', 'total_orders')
      .where('orders.user.id = :id', { id: currentUser.id })
      .andWhere('orders.status = :status', { status: Status.done })
      .groupBy('orders.order_date')
      .orderBy('orders.order_date', 'DESC')
      .skip((ctx.session.page - 1) * 10)
      .take(10)
      .getRawMany();

    if (orders.length == 0) {
      ctx.session.page--;
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        endOfListMessages[currentUser.lang],
        {
          show_alert: true,
        },
      );
      return;
    }

    const rows = [];

    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];

      const button = Markup.button.callback(
        order.order_date.split('-').reverse().join('.'),
        `order_date=${order.order_date}`,
      );

      if (i % 2 === 0) {
        rows.push([button]);
      } else {
        rows[rows.length - 1].push(button);
      }
    }

    rows.push([
      Markup.button.callback('⬅️', 'prev'),
      Markup.button.callback('➡️', 'next'),
    ]);

    rows.push([
      Markup.button.callback(
        backToProfileText[currentUser.lang],
        'backToProfile',
      ),
    ]);

    await ctx.editMessageText(
      orderHistoryMessage[currentUser.lang],
      Markup.inlineKeyboard(rows),
    );
  }

  @Action(/order_date/)
  async orderDate(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    const [, date] = ctx.update.callback_query.data.split('=');
    const orders = await this.orderRepo.find({
      where: {
        user: { id: currentUser.id },
        order_date: date,
        status: Status.done,
      },
    });
    await ctx.editMessageText(purchasedListMessage[currentUser.lang]);
    for (const order of orders) {
      await ctx.reply(
        `🎮 <b>${order.game_type.split('_')[0]}</b>\n` +
          `🆔 <code>${order.game_id}</code>\n` +
          `💸 ${order.amount}\n` +
          `💵 ${order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ${valuteMessage[currentUser.lang]}\n` +
          `${paidOrderMessages[currentUser.lang]}`,
        {
          parse_mode: 'HTML',
        },
      );
    }
    ctx.session.lastMessage = await ctx.reply(mainMessage[currentUser.lang], {
      reply_markup: profileKeys[currentUser.lang],
    });
    return;
  }

  @Action('paymentHistory')
  async paymentHistory(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    ctx.session.page = 1;
    const payments = await this.paymentRepo
      .createQueryBuilder('payments')
      .select('payments.payment_date', 'payment_date')
      .addSelect('COUNT(payments.id)', 'total_payments')
      .where('payments.user.id = :id', { id: currentUser.id })
      .andWhere('payments.status = :status', { status: Status.done })
      .groupBy('payments.payment_date')
      .orderBy('payments.payment_date', 'DESC')
      .skip((ctx.session.page - 1) * 10)
      .take(10)
      .getRawMany();

    if (payments.length == 0) {
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        noPaymentMessage[currentUser.lang],
        {
          show_alert: true,
        },
      );
      return;
    }

    const rows = [];

    for (let i = 0; i < payments.length; i++) {
      const payment = payments[i];

      const button = Markup.button.callback(
        payment.payment_date.split('-').reverse().join('.'),
        `payment_date=${payment.payment_date}`,
      );

      if (i % 2 === 0) {
        rows.push([button]);
      } else {
        rows[rows.length - 1].push(button);
      }
    }

    rows.push([
      Markup.button.callback('⬅️', 'prev_payment'),
      Markup.button.callback('➡️', 'next_payment'),
    ]);

    rows.push([
      Markup.button.callback(
        backToProfileText[currentUser.lang],
        'backToProfile',
      ),
    ]);

    await ctx.editMessageText(
      paymentHistoryMessage[currentUser.lang],
      Markup.inlineKeyboard(rows),
    );
  }

  @Action('prev_payment')
  async prevPayment(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    if (ctx.session.page && ctx.session.page == 1) {
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        startOfListMessages[currentUser.lang],
        {
          show_alert: true,
        },
      );
      return;
    }
    ctx.session.page--;
    const payments = await this.paymentRepo
      .createQueryBuilder('payments')
      .select('payments.payment_date', 'payment_date')
      .addSelect('COUNT(payments.id)', 'total_payments')
      .where('payments.user.id = :id', { id: currentUser.id })
      .andWhere('payments.status = :status', { status: Status.done })
      .groupBy('payments.payment_date')
      .orderBy('payments.payment_date', 'DESC')
      .skip((ctx.session.page - 1) * 10)
      .take(10)
      .getRawMany();

    if (payments.length == 0) {
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        noPaymentMessage[currentUser.lang],
        {
          show_alert: true,
        },
      );
      return;
    }

    const rows = [];

    for (let i = 0; i < payments.length; i++) {
      const payment = payments[i];

      const button = Markup.button.callback(
        payment.payment_date.split('-').reverse().join('.'),
        `payment_date=${payment.payment_date}`,
      );

      if (i % 2 === 0) {
        rows.push([button]);
      } else {
        rows[rows.length - 1].push(button);
      }
    }

    rows.push([
      Markup.button.callback('⬅️', 'prev_payment'),
      Markup.button.callback('➡️', 'next_payment'),
    ]);

    rows.push([
      Markup.button.callback(
        backToProfileText[currentUser.lang],
        'backToProfile',
      ),
    ]);

    await ctx.editMessageText(
      orderHistoryMessage[currentUser.lang],
      Markup.inlineKeyboard(rows),
    );
  }

  @Action('next_payment')
  async next(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    ctx.session.page++;
    const payments = await this.paymentRepo
      .createQueryBuilder('payments')
      .select('payments.payment_date', 'payment_date')
      .addSelect('COUNT(payments.id)', 'total_payments')
      .where('payments.user.id = :id', { id: currentUser.id })
      .andWhere('payments.status = :status', { status: Status.done })
      .groupBy('payments.payment_date')
      .orderBy('payments.payment_date', 'DESC')
      .skip((ctx.session.page - 1) * 10)
      .take(10)
      .getRawMany();

    if (payments.length == 0) {
      ctx.session.page--;
      await ctx.telegram.answerCbQuery(
        ctx.callbackQuery.id,
        endOfListMessages[currentUser.lang],
        {
          show_alert: true,
        },
      );
      return;
    }

    const rows = [];

    for (let i = 0; i < payments.length; i++) {
      const order = payments[i];

      const button = Markup.button.callback(
        order.payment_date.split('-').reverse().join('.'),
        `payment_date=${order.payment_date}`,
      );

      if (i % 2 === 0) {
        rows.push([button]);
      } else {
        rows[rows.length - 1].push(button);
      }
    }

    rows.push([
      Markup.button.callback('⬅️', 'prev_payment'),
      Markup.button.callback('➡️', 'next_payment'),
    ]);

    rows.push([
      Markup.button.callback(
        backToProfileText[currentUser.lang],
        'backToProfile',
      ),
    ]);

    await ctx.editMessageText(
      orderHistoryMessage[currentUser.lang],
      Markup.inlineKeyboard(rows),
    );
  }

  @Action(/payment_date/)
  async paymentDate(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    const [, date] = ctx.update.callback_query.data.split('=');
    const payments = await this.paymentRepo.find({
      where: {
        user: { id: currentUser.id },
        payment_date: date,
        status: Status.done,
      },
    });
    console.log(payments);
    await ctx.telegram.sendPhoto(
      currentUser.telegram_id,
      payments[0].image_url,
    );
  }
}
