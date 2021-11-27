import React from 'react';
import { Route, Switch } from 'react-router';
import { Sample } from '../Sample';
import RecruitmentDetail from '../pages/RecruitmentDetail';

export const Layout = () => {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={Sample} />
        {/*<Route path={'/recruitment'} component={Recruitment}/>*/}
        <Route path={'/recruitment/detail'} component={RecruitmentDetail} />
      </Switch>
    </>
  );
};
