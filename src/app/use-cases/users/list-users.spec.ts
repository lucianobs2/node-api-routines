import { UsersRepositoryInMemory } from '@/app//repositories/in-memory/users-repository-in-memory';
import { User } from '@/app/entities/user';
import { beforeEach, describe, expect, it } from 'vitest';
import { ListUsersUseCase } from './list-users';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let sut: ListUsersUseCase;

describe('List users', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    sut = new ListUsersUseCase(usersRepositoryInMemory);
  });
  it('should be able list all users', async () => {
    const newUser1 = new User({
      name: 'John1',
      surname: 'Doe1',
      email: 'johndoe1@test.com',
    });

    const newUser2 = new User({
      name: 'John2',
      surname: 'Doe2',
      email: 'johndoe2@test.com',
    });

    usersRepositoryInMemory.create(newUser1);
    usersRepositoryInMemory.create(newUser2);

    const users = await sut.execute();

    expect(users).toHaveLength(2);
  });
});
