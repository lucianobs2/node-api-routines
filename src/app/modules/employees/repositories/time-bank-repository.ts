import { TimeBank } from '../entities/time-bank';

export interface TimeBankRepository {
  create(timeBank: TimeBank): Promise<void>;
  save(timeBank: TimeBank): Promise<void>;
}
