import React from 'react';
import { Route, Switch } from 'react-router';

import { Sample } from '../Sample';

export const Layout = () => {
  return (
    <>
      <Switch>
        <Route path={''} component={Sample} />
      </Switch>
    </>
  );
};
