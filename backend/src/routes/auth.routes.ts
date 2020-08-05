import express from 'express';
import passport from 'passport';
import {
  handleGithubLogin,
  handleGithubCallback,
} from '../controllers/auth.controller';

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
  return router;
};
