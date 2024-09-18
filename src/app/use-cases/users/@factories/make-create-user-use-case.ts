import { CreateUserUseCase } from '@/app/use-cases/users/create-user';
import { PrismaUsersRepository } from '@/infra/database/prisma/repositories/prisma-users-repository';

export function makeCreateUserUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const useCase = new CreateUserUseCase(usersRepository);

  return useCase;
}
