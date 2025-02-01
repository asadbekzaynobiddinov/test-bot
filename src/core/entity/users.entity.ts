import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Payment } from './payments.entity';
import { UserRoles, UserLangs } from 'src/common/enum';
import { Order } from './order.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  telegram_id: string;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  balance: number;

  @Column({
    type: 'enum',
    enum: UserRoles,
    nullable: true,
    default: UserRoles.user,
  })
  role: UserRoles;

  @Column({ type: 'enum', enum: UserLangs, nullable: true })
  lang: UserLangs;

  @Column({ type: 'boolean', default: false })
  payment_status: boolean;

  @OneToMany(() => Payment, (payment) => payment.user)
  payments: Payment[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
