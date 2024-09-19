import { User } from '@/app/modules/employees/entities/user';
import { User as PrismaUser } from '@prisma/client';

export class PrismaUsersMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      avatarUrl: user.avatarUrl,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toDomain(prismaUser: PrismaUser) {
    return new User(
      {
        name: prismaUser.name,
        surname: prismaUser.surname,
        email: prismaUser.email,
        avatarUrl: prismaUser.avatarUrl,
        createdAt: prismaUser.createdAt,
        updatedAt: prismaUser.updatedAt,
      },
      prismaUser.id,
    );
  }
}
