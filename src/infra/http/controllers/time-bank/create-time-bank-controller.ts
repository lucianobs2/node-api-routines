import { makeCreateTimeBankUseCase } from '@/app/modules/employees/use-cases/time-bank/@factories/make-create-time-bank-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import z from 'zod';

export async function createTimeBankController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createTimeBankParams = z.object({
    id: z.string().uuid(),
  });

  const createTimeBankSchema = z.object({
    timeBankCategory: z.enum(['EMERGENCY_2X', 'EMERGENCY_1X', 'NORMAL']),
  });

  const { id } = createTimeBankParams.parse(request.params);

  const { timeBankCategory } = createTimeBankSchema.parse(request.body);

  const createTimeBank = makeCreateTimeBankUseCase();

  await createTimeBank.execute({
    userId: id,
    timeBankCategory,
  });

  return reply.status(201).send();
}
