import { Scene, SceneEnter, On, Ctx, Action } from 'nestjs-telegraf';
import { InjectRepository } from '@nestjs/typeorm';
import { Order, User } from 'src/core/entity';
import { OrderRepository, UserRepository } from 'src/core/repository/';
import {
  backToShop,
  buyOrCancel,
  canceledOrderMessages,
  confirmedOrderMessages,
  idMeessage,
  valuteMessage,
} from 'src/common/constants';
import { Markup } from 'telegraf';
import { config } from 'src/config';

@Scene('ORDER_SCENE')
export class OrderScene {
  constructor(
    @InjectRepository(User) private readonly userRepo: UserRepository,
    @InjectRepository(Order) private readonly orderRepo: OrderRepository,
  ) {}

  @SceneEnter()
  async sendIdMessage(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });

    const [, game_type, price, amount, other] =
      ctx.update.callback_query.data.split('=');

    const newOrder = this.orderRepo.create({
      game_type,
      price,
      amount,
      other: other ? other : null,
      order_date: new Date(Date.now()).toISOString().split('T')[0],
      user: {
        id: currentUser.id,
      },
    });
    await this.orderRepo.save(newOrder);
    ctx.session.orderId = newOrder.id;
    await ctx.editMessageText(idMeessage[currentUser.lang]);
  }

  @On('text')
  async askId(@Ctx() ctx) {
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });
    if (ctx.message && 'text' in ctx.message) {
      const game_id = ctx.message.text;
      const order = await this.orderRepo.findOne({
        where: { id: ctx.session.orderId },
      });
      order.game_id = game_id;
      await this.orderRepo.save(order);
      const message =
        `🎮 <b>${order.game_type.split('_')[0]}</b>\n` +
        `🆔 <code>${order.game_id}</code>\n` +
        `💸 ${order.amount}\n` +
        `💵 ${order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ${valuteMessage[currentUser.lang]}`;
      await ctx.reply(message, {
        parse_mode: 'HTML',
        ...Markup.inlineKeyboard([
          [
            Markup.button.callback(
              buyOrCancel[currentUser.lang][0],
              `buy=${order.id}`,
            ),
            Markup.button.callback(
              buyOrCancel[currentUser.lang][1],
              `cancel=${order.id}`,
            ),
          ],
        ]),
      });
    }
  }

  @Action(/buy/)
  async buy(@Ctx() ctx) {
    const [, id] = ctx.update.callback_query.data.split('=');
    const order = await this.orderRepo.findOne({ where: { id: +id } });
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });

    const newBalance = +currentUser.balance - +order.price;

    await this.userRepo.update(
      { telegram_id: `${ctx.from.id}` },
      { balance: newBalance },
    );

    const message =
      `🎮 <b>${order.game_type.split('_')[0]}</b>\n` +
      `🆔 <code>${order.game_id}</code>\n` +
      `💸 ${order.amount}\n` +
      `💵 ${order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ${valuteMessage[currentUser.lang]}\n` +
      `${confirmedOrderMessages[currentUser.lang]}`;
    await ctx.editMessageText(message, {
      parse_mode: 'HTML',
      reply_markup: backToShop[currentUser.lang],
    });

    const chanelMessage =
      `${currentUser.email}\n` +
      `🎮 <b>${order.game_type}</b>\n` +
      `🆔 <code>${order.game_id}</code>\n` +
      `💸 ${order.amount}\n` +
      `💵 ${order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ${valuteMessage[currentUser.lang]}\n` +
      `${order.other ? order.other : ''}`;

    await ctx.telegram.sendMessage(config.BUYURTMALAR_KANALI, chanelMessage, {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            { text: `To'lab berdim ✅`, callback_data: `paid=${order.id}` },
            { text: 'Bekor qildim ❌', callback_data: `dontPay=${order.id}` },
          ],
        ],
      },
    });
    ctx.scene.leave();
  }

  @Action(/cancel/)
  async cancel(@Ctx() ctx) {
    const [, id] = ctx.update.callback_query.data.split('=');
    const order = await this.orderRepo.findOne({ where: { id: +id } });
    const currentUser = await this.userRepo.findOne({
      where: { telegram_id: `${ctx.from.id}` },
    });

    const message =
      `🎮 <b>${order.game_type.split('_')[0]}</b>\n` +
      `🆔 <code>${order.game_id}</code>\n` +
      `💸 ${order.amount}\n` +
      `💵 ${order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ${valuteMessage[currentUser.lang]}\n` +
      `${canceledOrderMessages[currentUser.lang]}`;

    await this.orderRepo.delete({ id });

    await ctx.editMessageText(message, {
      parse_mode: 'HTML',
      reply_markup: backToShop[currentUser.lang],
    });
    ctx.scene.leave();
  }
}
