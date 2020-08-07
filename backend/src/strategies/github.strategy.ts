import {Strategy} from 'passport-github';
import {QueryFunction} from '../setup/db.setup';
import {findOrCreateUser} from '../services/User.services';

export const init = (passport, query: QueryFunction) => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URI,
        scope: ['user:email'],
      },
      function (accessToken, refreshToken, profile, cb) {
        findOrCreateUser(
          query,
          {
            username: profile._json['login'],
            email: profile.emails.find((e) => e['primary']).value,
          },
          (err, user) => {
            cb(err, user);
          }
        );
      }
    )
  );
};
