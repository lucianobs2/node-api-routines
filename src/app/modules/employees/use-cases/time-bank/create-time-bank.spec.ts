import { beforeEach, describe, it } from 'vitest';
import { TimeBank } from '../../entities/time-bank';
import { User } from '../../entities/user';
import { TimeBankRepositoryInMemory } from '../../repositories/in-memory/time-bank-repository-in-memory';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/users-repository-in-memory';
import { CreateTimeBankUseCase } from './create-time-bank';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let timeBankRepositoryInMemory: TimeBankRepositoryInMemory;
let crateTimeBankUseCase: CreateTimeBankUseCase;

describe('Create Time Bank', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    timeBankRepositoryInMemory = new TimeBankRepositoryInMemory();
    crateTimeBankUseCase = new CreateTimeBankUseCase(
      usersRepositoryInMemory,
      timeBankRepositoryInMemory,
    );
  });
  it('should be able create a time bank', async () => {
    const newUser = new User({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@test.com',
    });

    await usersRepositoryInMemory.create(newUser);

    const user = await usersRepositoryInMemory.findById(newUser.id);

    const newTimeBank = new TimeBank({
      employeeId: user!.id,
      timeBankCategory: 'EMERGENCY_2X',
    });

    expect(newTimeBank).toHaveProperty('id');
  });
});
