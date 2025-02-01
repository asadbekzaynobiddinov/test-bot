import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './users.entity';
import { Status } from 'src/common/enum';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  image_url: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  amount: number;

  @Column()
  payment_date: string;

  @Column({ type: 'enum', enum: Status, default: Status.pending })
  status: Status;

  @ManyToOne(() => User, (user) => user.payments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
}
