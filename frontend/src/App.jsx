import React from 'react';
import Header from './common/elements/Header';
import Footer from './common/elements/Footer';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router';
import Home from './user-cases/Home';
import NotFound from './user-cases/NotFound';
import Login from './user-cases/Login';
import Api from './user-cases/Api';
import Callback from './user-cases/Callback';
import Providers from './common/providers';

const App = () => {
  return (
    <BrowserRouter>
      <Providers>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/callback" component={Callback} />
          <Route path="/api" component={Api} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </Providers>
    </BrowserRouter>
  );
};

export default App;
