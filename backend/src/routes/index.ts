import express from 'express';
import {handleGet} from '../controllers/cat.controllers';
import {getAuthRoutes} from './auth.routes';

export const initRoutes = (
  app: express.Application,
  query: Function,
  passport,
  createRouter: () => express.Router
) => {
  const router = createRouter();
  router.get('/', handleGet(query));
  router.use('/api', getAuthRoutes(passport, createRouter()));
  app.use('/', router);
};
