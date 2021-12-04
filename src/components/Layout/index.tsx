import React from 'react';
import { Route, Switch } from 'react-router';
import DevTest from '../devTest';
import List from '../List';

export const Layout = () => {
  return (
    <>
      <Switch>
        <Route path={'/dev-test'} component={DevTest} />
        <Route path={'/list'} component={List} />
      </Switch>
    </>
  );
};
