import express from 'express';
import {handleGet} from '../controllers/cat.controllers';
import {getAuthRoutes} from './auth.routes';
import {QueryFunction} from '../setup/db.setup';

export const initRoutes = (
  app: express.Application,
  query: QueryFunction,
  passport,
  createRouter: () => express.Router
) => {
  const router = createRouter();
  router.get('/', handleGet(query));
  router.use('/api', getAuthRoutes(passport, createRouter()));
  app.use('/', router);
};
