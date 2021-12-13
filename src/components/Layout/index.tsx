import React, { useEffect, useState } from 'react';
import { Navigator, Screen } from '@karrotframe/navigator';
import All from '../List/All';
import Recommend from '../List/Recommend';
import Bookmarked from '../List/Bookmarked';
import parser from 'ua-parser-js';
import { useLocation } from 'react-router';
import DevTest from '../devTest';
import './Layout.css';

const IOS = 'iOS';
import RecruitmentDetail from '../RecruitmentDetail';
import DetailBottomBar from '../common/DetailBottomBar';
import { useRecoilState } from 'recoil';
import { navState } from '../../store/navigation';

export const Layout = () => {
  const location = useLocation();
  const { os } = parser(window.navigator.userAgent);
  const isCupertino = os.name === IOS;
  const [navHandler, setNavHandler] = useRecoilState(navState);

  return (
    <>
      <Navigator
        className={navHandler.NAVIGATION ? '' : 'navigateClean'}
        theme={isCupertino ? 'Cupertino' : 'Android'}
        onClose={() => console.log('onClose')}
      >
        <Screen path={'/list/all'} component={All} />
        <Screen path={'/list/recommend'} component={Recommend} />
        <Screen path={'/list/book-marked'} component={Bookmarked} />
        <Screen
          path={'/recruitment/detail/:id'}
          component={RecruitmentDetail}
        />
        <Screen path={'/resume/:id'} component={RecruitmentDetail} />
      </Navigator>
    </>
  );
};
