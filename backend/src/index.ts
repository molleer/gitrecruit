import * as dotenv from 'dotenv';
import express from 'express';
import {initRoutes} from './routes/index';
import getQuery from './setup/db.setup';
import session from 'express-session';
import passport from 'passport';
import init from './strategies';

//Sets process.env to the variables in .env
if (process.env.NODE_ENV != 'production') {
  dotenv.config();
}

const app = express();
const query = getQuery();

init(passport, query);

app.use(express.urlencoded({extended: false}));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

initRoutes(app, query, passport, () => express.Router());

app.listen(8080, () => {
  console.log('The server is listening to port 8080');
});
