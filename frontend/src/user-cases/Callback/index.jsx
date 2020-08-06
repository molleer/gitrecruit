import React from 'react';
import {Switch} from 'react-router-dom';
import {Route, Redirect} from 'react-router';
import GithubCallback from './github.callback';

const Callback = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/callback/github" component={GithubCallback} />
        <Route path="/" component={() => <Redirect to="/pageNotFound" />} />
      </Switch>
    </div>
  );
};

export default Callback;
