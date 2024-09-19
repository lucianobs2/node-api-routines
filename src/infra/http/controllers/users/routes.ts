import { FastifyInstance } from 'fastify';
import { createUserController } from './create-user-controller';
import { getUserController } from './get-user-controller';
import { listUsersController } from './list-users-controller';

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', createUserController);
  app.get('/users', listUsersController);
  app.get('/users/:id', getUserController);
}
