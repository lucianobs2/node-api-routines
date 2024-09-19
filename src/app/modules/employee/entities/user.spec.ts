import { describe, expect, it } from 'vitest';
import { User } from './user';

describe('Entity User', () => {
  it('should be able create a user', () => {
    const user = new User({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@test.com',
    });

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('createdAt');
    expect(user).toEqual(
      expect.objectContaining({
        name: 'John',
        surname: 'Doe',
        email: 'johndoe@test.com',
      }),
    );
  });
});
