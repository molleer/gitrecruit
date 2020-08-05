import passport from 'passport';

export const handleGithubLogin = (pass: passport.Authenticator) =>
  pass.authenticate('github');

export const handleGithubCallback = () => (req, res) => {
  // Successful authentication, redirect home.

  console.log('Successful login');
  res.json(req.user);
};
