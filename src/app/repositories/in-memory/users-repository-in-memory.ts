import { User } from '@/app/entities/user';
import { CreateUserDTO } from '../../dtos/create-user';
import { UsersRepository } from '../users-repository';

export class UsersRepositoryInMemory implements UsersRepository {
  users: User[] = [];

  async create({ name, surname }: CreateUserDTO) {
    const user = new User({
      name,
      surname,
    });

    this.users.push(user);
  }

  async findById(id: string) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }
}
