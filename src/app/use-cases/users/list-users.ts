import { User } from '@/app/entities/user';
import { UsersRepository } from '@/app/repositories/users-repository';

type ListUserResponse = User[];

// interface ListUserResponse {
//   users: User[];
// }

export class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<ListUserResponse> {
    const users = await this.usersRepository.findMany();

    return users;
  }
}
