import { beforeEach, describe, it } from 'vitest';
import { User } from '../entities/user';
import { UsersRepositoryInMemory } from '../repositories/in-memory/users-repository-in-memory';
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
    });

    await createUserUseCase.execute(newUser);

    // const user = inMemoryUsersRepository.findById(newUser.id);

    // console.log(user);

    // expect(user).toHaveProperty('id');
  });
});
