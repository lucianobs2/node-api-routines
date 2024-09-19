import { TimeBank } from '@/app/modules/employees/entities/time-bank';
import { TimeBank as PrismaTimeBank } from '@prisma/client';

export class PrismaTimeBankMapper {
  static toPrisma(timeBank: TimeBank) {
    return {
      id: timeBank.id,
      userId: timeBank.employeeId,
      timeBankCategory: timeBank.category,
      createdAt: timeBank.createdAt,
      updatedAt: timeBank.updatedAt,
    };
  }

  static toDomain(prismaTimeBank: PrismaTimeBank) {
    return new TimeBank(
      {
        employeeId: prismaTimeBank.userId,
        timeBankCategory: prismaTimeBank.timeBankCategory,
        createdAt: prismaTimeBank.createdAt,
        updatedAt: prismaTimeBank.updatedAt,
      },
      prismaTimeBank.id,
    );
  }
}
