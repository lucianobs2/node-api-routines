import { UsersRepository } from '../repositories/users-repository';

interface ICreateUserRequest {
  name: string;
  surname: string;
  email: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, surname, email }: ICreateUserRequest) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    await this.usersRepository.create({
      name,
      surname,
      email,
    });
  }
}
