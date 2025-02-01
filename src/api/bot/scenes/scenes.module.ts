import { Module } from '@nestjs/common';
import {
  PasswordScene,
  RegisterScene,
  PhoneNumberScene,
  PromocodeScene,
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
    PromocodeScene,
    OrderScene,
    PaymentScene,
    PaymentImage,
  ],
})
export class ScenesModule {}
