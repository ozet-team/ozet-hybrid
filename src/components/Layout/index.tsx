import React, { useEffect } from 'react';
import { Navigator, Screen } from '@karrotframe/navigator';
import All from '../List/All';
import Recommend from '../List/Recommend';
import Bookmarked from '../List/Bookmarked';
import './Layout.css';

import RecruitmentDetail from '../RecruitmentDetail';
import { useRecoilState } from 'recoil';
import { navState } from '../../store/navigation';
import CheckLocation from '../common/CheckLocation';
import AddressFilter from '../AddressFilter';
import { backSwipe, getAccessToken } from 'src/utils/bridge';
import { userState } from '../../store/user';
import API from '../../api';

export const Layout = () => {
  const [navHandler, _] = useRecoilState(navState);
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    const getUser = async () => {
      await getAccessToken();
      const res = await API.getUserMe();
      setUser({ ...res.data });
      console.log(res.data);
    };
    getUser();
  }, []);
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
      </Navigator>
    </>
  );
};
