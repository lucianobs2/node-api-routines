import { PrismaUsersRepository } from '@/infra/database/prisma/repositories/prisma-users-repository';
import { ListUsersUseCase } from '../list-users';

export function makeListUsersUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const useCase = new ListUsersUseCase(usersRepository);

  return useCase;
}
