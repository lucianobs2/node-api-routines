import { makeCreateUserUseCase } from '@/app/modules/employee/use-cases/users/@factories/make-create-user-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function createUserController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createUserSchema = z.object({
    name: z.string().min(3),
    surname: z.string().min(3),
    email: z.string().email('Invalid email format'),
  });

  const { name, surname, email } = createUserSchema.parse(request.body);

  const createUserUseCase = makeCreateUserUseCase();

  await createUserUseCase.execute({
    name,
    surname,
    email,
  });

  return reply.status(201).send();
}
