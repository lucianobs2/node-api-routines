import { User, UserProps } from '@/app/entities/user';
import { UsersRepository } from '../users-repository';

export class UsersRepositoryInMemory implements UsersRepository {
  users: User[] = [];

  async create({ name, surname, email }: UserProps) {
    const user = new User({
      name,
      surname,
      email,
    });

    this.users.push(user);
  }

  async findById(id: string) {
    const user = this.users.find((user) => user.id === id);

    console.log(user);

    return user;
  }

  async findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email);

    return user;
  }
}
