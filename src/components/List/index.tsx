import React from 'react';
import { Route, Switch } from 'react-router';
import All from './All';
import BookMarked from './Bookmarked';
import Recommend from './Recommend';

const List = () => {
  console.log('list');
  return (
    <Switch>
      <Route exact path={'/list/recommend'} component={Recommend} />
      <Route exact path={'/list/all'} component={All} />
      <Route exact path={'/list/recommend'} component={BookMarked} />
    </Switch>
  );
};

export default List;
