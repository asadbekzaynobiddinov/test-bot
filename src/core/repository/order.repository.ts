import { Repository } from 'typeorm';
import { Order } from '../entity/order.entity';

export type OrderRepository = Repository<Order>;
