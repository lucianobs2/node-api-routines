import { User } from '../../entities/user';
import { UsersRepository } from '../../repositories/users-repository';

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
