import { TimeBank } from '../../entities/time-bank';
import { TimeBankRepository } from '../../repositories/time-bank-repository';
import { UsersRepository } from '../../repositories/users-repository';

interface CreateTimeBankParams {
  userId: string;
  timeBankCategory: 'EMERGENCY_2X' | 'EMERGENCY_1X' | 'NORMAL';
}

export class CreateTimeBankUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private timeBankRepository: TimeBankRepository,
  ) {}
  async execute({
    userId,
    timeBankCategory,
  }: CreateTimeBankParams): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new Error('User does not exists');
    }

    const timeBank = new TimeBank({
      employeeId: user.id,
      timeBankCategory,
    });

    await this.timeBankRepository.create(timeBank);
  }
}
