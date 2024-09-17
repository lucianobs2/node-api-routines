import { PrismaUsersRepository } from '@/infra/database/prisma/repositories/prisma-users-repository';
import { CreateUserUseCase } from '../create-user';

export function makeCreateUserUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const useCase = new CreateUserUseCase(usersRepository);

  return useCase;
}
