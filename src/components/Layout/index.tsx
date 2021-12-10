import React from 'react';
import { Navigator, Screen } from '@karrotframe/navigator';
import All from '../List/All';
import Recommend from '../List/Recommend';
import Bookmarked from '../List/Bookmarked';
import parser from 'ua-parser-js';
import { Switch, Route } from 'react-router-dom';
import DevTest from '../devTest';

const IOS = 'iOS';
import RecruitmentDetail from '../RecruitmentDetail';
import DetailBottomBar from '../common/DetailBottomBar';

export const Layout = () => {
  const { os } = parser(window.navigator.userAgent);
  const isCupertino = os.name === IOS;

  return (
    <Navigator
      theme={isCupertino ? 'Cupertino' : 'Android'}
      onClose={() => console.log('onClose')}
    >
      <Screen path={'/list/all'} component={All} />
      <Screen path={'/list/recommend'} component={Recommend} />
      <Screen path={'/list/book-marked'} component={Bookmarked} />
      <Screen path={'/recruitment/detail/:id'} component={RecruitmentDetail} />
      <Screen path={'/resume/:id'} component={RecruitmentDetail} />
    </Navigator>
  );
};
