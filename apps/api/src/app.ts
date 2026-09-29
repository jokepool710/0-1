import Fastify from 'fastify';

export const createApp = () => {
  const app = Fastify({ logger: true });
  app.get('/healthz', async () => ({ status: 'ok' }));
  return app;
};
