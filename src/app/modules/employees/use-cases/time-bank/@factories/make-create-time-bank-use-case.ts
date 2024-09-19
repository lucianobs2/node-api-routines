import { PrismaUsersRepository } from '@/infra/database/prisma/repositories/prisma-users-repository';
import { PrismaTimeBankRepository } from '@/infra/database/prisma/repositories/time-bank-repository';
import { CreateTimeBankUeCase } from '../create-time-bank';

export function makeCreateTimeBankUseCase() {
  const timeBankRepository = new PrismaTimeBankRepository();
  const usersRepository = new PrismaUsersRepository();
  const useCase = new CreateTimeBankUeCase(usersRepository, timeBankRepository);

  return useCase;
}
