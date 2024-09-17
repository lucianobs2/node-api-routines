import { CreateUserDTO } from '../dtos/create-user';
import { User } from '../entities/user';

export interface UsersRepository {
  create(data: CreateUserDTO): Promise<void>;
  findById(id: string): Promise<User | undefined>;
}
