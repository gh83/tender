import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '~/containers/main.jsx';
import Container from '~/containers/container.jsx';
import NotFound from '~/components/not-found.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <>
        <Main>
          <Switch>
            <Route exact path='/' component={Container} />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </>
    );
  };
};