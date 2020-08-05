import express from 'express';
import passport from 'passport';

export const getAuthRoutes = (
  pass: passport.Authenticator,
  router: express.Router
) => {
  router.get('/login/github', pass.authenticate('github'));

  router.get(
    '/callback/github',
    pass.authenticate('github', {failureRedirect: 'http://localhost:3000/'}),
    function (req, res) {
      // Successful authentication, redirect home.

      console.log('Successful login');
      res.redirect('http://localhost:3000/');
    }
  );
  return router;
};
