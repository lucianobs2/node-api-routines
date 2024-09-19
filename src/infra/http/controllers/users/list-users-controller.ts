import { makeListUsersUseCase } from '@/app/use-cases/users/@factories/make-list-users-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { userHttpViewModel } from './view-model/user-view-model';

export async function listUsersController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const listUsersUseCase = makeListUsersUseCase();

  const users = await listUsersUseCase.execute();

  const usersViewModel = users.map((user) => userHttpViewModel(user));

  return reply.status(200).send(usersViewModel);
}
