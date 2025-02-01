import { Repository } from 'typeorm';
import { Promocode } from '../entity/promoocode.entity';

export type PromocodeRepository = Repository<Promocode>;
