import React from 'react';
import Header from './common/elements/Header';
import Footer from './common/elements/Footer';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router';
import Home from './user-cases/Home';
import NotFound from './user-cases/NotFound';
import Login from './user-cases/Login';
import Api from './user-cases/Api';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/api" component={Api} />
        <Route path="/" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
