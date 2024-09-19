import { User } from '@/app/entities/user';
import { UsersRepository } from '../users-repository';

export class UsersRepositoryInMemory implements UsersRepository {
  users: User[] = [];

  async create(user: User) {
    this.users.push(user);
  }

  async findById(id: string) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  async findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async findMany() {
    return this.users;
  }
}
