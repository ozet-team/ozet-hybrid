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
import { useRecoilState } from 'recoil';
import { navState } from '../../store/navigation';
import CheckLocation from '../common/CheckLocation';
import AddressFilter from '../AddressFilter';
import { backSwipe } from 'src/utils/bridge';
import NavigationColorHandler from '../NavigationColorHandler';

export const Layout = () => {
  const location = useLocation();
  const { os } = parser(window.navigator.userAgent);
  const isCupertino = os.name === IOS;
  const [navHandler, setNavHandler] = useRecoilState(navState);

  return (
    <>
      <Navigator
        theme="Cupertino"
        className={navHandler.NAVIGATION ? '' : 'navigateClean'}
        onClose={() => backSwipe()}
      >
        <CheckLocation />
        <Screen path={'/list/all'} component={All} />
        <Screen path={'/list/recommend'} component={Recommend} />
        <Screen path={'/list/book-marked'} component={Bookmarked} />
        <Screen path={'/filter/address'} component={AddressFilter} />
        <Screen
          path={'/recruitment/detail/:id'}
          component={RecruitmentDetail}
        />
        <Screen path={'/resume/:id'} component={RecruitmentDetail} />
      </Navigator>
    </>
  );
};
