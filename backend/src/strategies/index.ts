import * as github from './github.strategy';
import {QueryFunction} from '../setup/db.setup';

const init = (passport, query: QueryFunction) => {
  github.init(passport, query);

  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });
};

export default init;
