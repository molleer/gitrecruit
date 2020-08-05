import * as github from './github.strategy';

const init = (passport) => {
  github.init(passport);

  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });
};

export default init;
