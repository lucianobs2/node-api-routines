import { User } from '@/app/entities/user';
import { UsersRepository } from '@/app/repositories/users-repository';

interface GetUserRequest {
  user_id: string;
}

interface GetUserResponse {
  user: User;
}

export class GetUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ user_id }: GetUserRequest): Promise<GetUserResponse> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User does not existis');
    }

    return { user };
  }
}
