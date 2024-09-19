import { User } from '@/app/modules/employees/entities/user';

export function userHttpViewModel(user: User) {
  return {
    id: user.id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    avatarURL: user.avatarUrl,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}
