import { User } from '../../entities/user';
import { UsersRepository } from '../../repositories/users-repository';

interface ICreateUserRequest {
  name: string;
  surname: string;
  email: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, surname, email }: ICreateUserRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User({
      name,
      surname,
      email,
    });

    await this.usersRepository.create(user);
  }
}
