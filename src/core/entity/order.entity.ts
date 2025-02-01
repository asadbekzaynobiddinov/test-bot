import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './users.entity';
import { Status } from 'src/common/enum';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  game_type: string;

  @Column({ nullable: true })
  game_id: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ nullable: true })
  amount: string;

  @Column({ nullable: true })
  other: string;

  @Column()
  order_date: string;

  @Column({ type: 'enum', enum: Status, default: Status.pending })
  status: Status;

  @ManyToOne(() => User, (user) => user.orders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
}
