import { Repository } from 'typeorm';
import { User } from '../entity/users.entity';

export type UserRepository = Repository<User>;
