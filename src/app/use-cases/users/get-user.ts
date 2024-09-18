import { UsersRepository } from '@/app/repositories/users-repository';

interface GetUserRequest {
  user_id: string;
}

export class GetUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ user_id }: GetUserRequest) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User does not existis');
    }

    return { user };
  }
}
