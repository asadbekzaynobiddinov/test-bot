import { Repository } from 'typeorm';
import { Payment } from '../entity/payments.entity';

export type PaymentRepository = Repository<Payment>;
