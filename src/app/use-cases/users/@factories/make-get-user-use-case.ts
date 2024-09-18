import { PrismaUsersRepository } from '@/infra/database/prisma/repositories/prisma-users-repository';
import { GetUserUseCase } from '../get-user';

export function makeGetUserUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const useCase = new GetUserUseCase(usersRepository);

  return useCase;
}
