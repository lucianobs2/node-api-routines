import { UsersRepository } from '../repositories/users-repository';

interface ICreateUserRequest {
  name: string;
  surname: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, surname }: ICreateUserRequest) {
    await this.usersRepository.create({
      name,
      surname,
    });
  }
}
