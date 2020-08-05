import express, {Router} from 'express';
import pg from 'pg';
import {to} from './utils/utils';
import {initRoutes} from './routes/index';
import getQuery from './setup/db.setup';

const app = express();

initRoutes(app, getQuery(), () => express.Router());

app.listen(8080, () => {
  console.log('The server is listening to port 8080');
});
