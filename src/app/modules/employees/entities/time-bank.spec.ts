import { describe, expect, it } from 'vitest';
import { TimeBank } from './time-bank';
import { User } from './user';

describe('Time bank', () => {
  it('should be able create a time bank', () => {
    const user = new User({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@test.com',
    });

    const timeBank = new TimeBank({
      employeeId: user.id,
    });

    expect(timeBank).toHaveProperty('employeeId');
  });
});
