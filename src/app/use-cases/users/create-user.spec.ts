import { UsersRepositoryInMemory } from '@/app//repositories/in-memory/users-repository-in-memory';
import { User } from '@/app/entities/user';
import { beforeEach, describe, it } from 'vitest';
import { CreateUserUseCase } from './create-user';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });
  it('should be able create a user', async () => {
    const newUser = new User({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@test.com',
    });

    await createUserUseCase.execute(newUser);

    expect(newUser).toHaveProperty('id');
  });

  it('should not be able create a user with same email', async () => {
    const newUser = new User({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@test.com',
    });

    await createUserUseCase.execute(newUser);

    await expect(
      createUserUseCase.execute({
        name: 'John',
        surname: 'Doe',
        email: 'johndoe@test.com',
      }),
    ).rejects.toThrow('User already exists');
  });
});
