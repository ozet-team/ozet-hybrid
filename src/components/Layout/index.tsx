import React from 'react';
import { Navigator, Screen } from '@karrotframe/navigator';
import All from '../List/All';
import Recommend from '../List/Recommend';
import Bookmarked from '../List/Bookmarked';
import parser from 'ua-parser-js';
const IOS = 'iOS';
import RecruitmentDetail from '../pages/RecruitmentDetail';
import DetailBottomBar from '../common/DetailBottomBar';
import ResumeWeb from '../pages/ResumeWeb';

export const Layout = () => {
  const { os } = parser(window.navigator.userAgent);
  const isCupertino = os.name === IOS;
  return (
    <Navigator
      theme={isCupertino ? 'Cupertino' : 'Android'}
      onClose={() => console.log('onClose')}
    >
      <DetailBottomBar />
      <Screen path={'/list/all'} component={All} />
      <Screen path={'/list/recommend'} component={Recommend} />
      <Screen path={'/list/book-marked'} component={Bookmarked} />
      {/*<Route path={'/recruitment'} component={Recruitment}/>*/}
      <Screen path={'/recruitment/detail/:id'} component={RecruitmentDetail} />
      <Screen path={'/resume'} component={ResumeWeb} />
    </Navigator>
  );
};
