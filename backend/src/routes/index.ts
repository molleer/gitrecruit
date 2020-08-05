import express from 'express';
import {handleGet} from '../controllers/cat.controllers';

export const initRoutes = (
  app: express.Application,
  query: Function,
  createRouter: () => express.Router
) => {
  const router = createRouter();
  router.get('/', handleGet(query));
  app.use('/', router);
};
