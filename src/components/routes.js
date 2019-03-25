import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './home';

const Routes = () => {

  return(
    <div className="parent">

      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>

  </div>
  )
}


export default Routes;