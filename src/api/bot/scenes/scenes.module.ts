import { Module } from '@nestjs/common';
import {
  PasswordScene,
  RegisterScene,
  PhoneNumberScene,
  AskPromocodeScene,
  GetPromocode,
} from './regiter.scene';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order, Payment, Promocode, User } from 'src/core/entity';
import { OrderScene } from './order.scene';
import { PaymentImage, PaymentScene } from './payment.scene';

@Module({
  imports: [TypeOrmModule.forFeature([User, Promocode, Order, Payment])],
  providers: [
    RegisterScene,
    PasswordScene,
    PhoneNumberScene,
    AskPromocodeScene,
    OrderScene,
    PaymentScene,
    PaymentImage,
    GetPromocode,
  ],
})
export class ScenesModule {}
