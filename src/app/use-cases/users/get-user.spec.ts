import { UsersRepositoryInMemory } from '@/app//repositories/in-memory/users-repository-in-memory';
import { User } from '@/app/entities/user';
import { beforeEach, describe, expect, it } from 'vitest';
import { GetUserUseCase } from './get-user';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let getUserUseCase: GetUserUseCase;

describe('Get User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    getUserUseCase = new GetUserUseCase(usersRepositoryInMemory);
  });
  it('should be able find a user', async () => {
    const newUser = new User({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@test.com',
    });

    await usersRepositoryInMemory.create(newUser);

    const { user } = await getUserUseCase.execute({ user_id: newUser.id });

    expect(user).toEqual(newUser);
    expect(user).toEqual(
      expect.objectContaining({
        name: 'John',
        surname: 'Doe',
        email: 'johndoe@test.com',
      }),
    );
  });
});
