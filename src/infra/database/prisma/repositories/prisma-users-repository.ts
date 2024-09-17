import { User } from '@/app/entities/user';
import { UsersRepository } from '@/app/repositories/users-repository';
import { prisma } from '..';
import { PrismaUsersMapper } from '../mappers/prisma-users.mapper';

export class PrismaUsersRepository implements UsersRepository {
  async create(user: User) {
    const raw = PrismaUsersMapper.toPrisma(user);

    await prisma.user.create({
      data: raw,
    });
  }
  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUsersMapper.toDomain(user);
  }
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUsersMapper.toDomain(user);
  }
}
