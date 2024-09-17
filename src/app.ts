import fastify from 'fastify';
import { userRoutes } from './infra/http/controllers/users/routes';

export const app = fastify();

app.register(userRoutes);
