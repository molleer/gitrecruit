import {Strategy} from 'passport-github';

export const init = (passport) => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URI,
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        cb(null, profile);
      }
    )
  );
};
