import { FastifyInstance } from 'fastify';
import { createUserController } from './create-user-controller';
import { getUserController } from './get-user-controller';

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', createUserController);
  app.get('/users/:id', getUserController);
}
