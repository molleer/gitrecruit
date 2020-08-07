import express from 'express';
import passport from 'passport';
import {
  handleGithubLogin,
  handleGithubCallback,
} from '../controllers/auth.controller';

const checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).end();
};

export const getAuthRoutes = (
  pass: passport.Authenticator,
  router: express.Router
) => {
  router.get('/login/github', handleGithubLogin(pass));
  router.get(
    '/callback/github',
    passport.authenticate('github', {failureRedirect: '/'}),
    handleGithubCallback()
  );
  router.get('/login/checkLogin', checkAuth, (req, res) => {
    res.status(200).json(req.user);
  });
  return router;
};
