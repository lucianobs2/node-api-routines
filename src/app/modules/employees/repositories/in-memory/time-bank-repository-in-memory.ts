import { TimeBank } from '../../entities/time-bank';
import { TimeBankRepository } from '../time-bank-repository';

export class TimeBankRepositoryInMemory implements TimeBankRepository {
  timeBank: TimeBank[] = [];

  async create(timeBank: TimeBank) {
    this.timeBank.push(timeBank);
  }

  async save(timeBank: TimeBank): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
