import express from 'express';

const app = express;

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

export default routes;
