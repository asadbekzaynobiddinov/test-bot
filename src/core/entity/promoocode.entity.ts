import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('promocodes')
export class Promocode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  content: string;

  @Column('float', { nullable: true, unique: true })
  amount: number;

  @Column({ nullable: true })
  allowed_uses: number;
}
