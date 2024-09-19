import { TimeBank } from '@/app/modules/employees/entities/time-bank';
import { TimeBankRepository } from '@/app/modules/employees/repositories/time-bank-repository';
import { prisma } from '..';
import { PrismaTimeBankMapper } from '../mappers/prisma-time-bank.mapper';

export class PrismaTimeBankRepository implements TimeBankRepository {
  async create(timeBank: TimeBank) {
    const raw = PrismaTimeBankMapper.toPrisma(timeBank);

    await prisma.timeBank.create({
      data: raw,
    });
  }

  async save(timeBank: TimeBank): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
