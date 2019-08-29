import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '~/containers/main.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <>
        <Main>
          <Switch>
            {/* <Route exact path='/' component={Home} />         
            <Route component={NotFound} /> */}
          </Switch>
        </Main>
      </>
    );
  };
};