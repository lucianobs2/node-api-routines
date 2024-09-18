import { makeGetUserUseCase } from '@/app/use-cases/users/@factories/make-get-user-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { userHttpViewModel } from './view-model/user-view-model';

export async function getUserController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getUserParams = z.object({
    id: z.string().uuid(),
  });

  const { id } = getUserParams.parse(request.params);

  const getUserUseCase = makeGetUserUseCase();

  const { user } = await getUserUseCase.execute({
    user_id: id,
  });

  const userViewModel = userHttpViewModel(user);

  return reply.status(200).send(userViewModel);
}
