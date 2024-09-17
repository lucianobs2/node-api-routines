import { User } from '@/app/entities/user';

export interface UsersRepository {
  create(user: User): Promise<void>;
  findById(id: string): Promise<User | undefined | null>;
  findByEmail(email: string): Promise<User | undefined | null>;
}
