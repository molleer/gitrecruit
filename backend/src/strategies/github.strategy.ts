import {Strategy} from 'passport-github';

export const init = (passport) => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: 'http://localhost:8080/api/callback/github',
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        cb(null, profile);
      }
    )
  );
};
