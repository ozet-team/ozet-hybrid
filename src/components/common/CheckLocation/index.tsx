import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { navState } from '../../../store/navigation';
import { useLocation } from 'react-router';

const CheckLocation = () => {
  const [navHandler, setNavHandler] = useRecoilState(navState);
  const location = useLocation();
  const hideNavigation = () => {
    if (location.pathname.includes('/recruitment/detail')) {
      setNavHandler({ ...navHandler, NAVIGATION: false });
    } else {
      setNavHandler({ ...navHandler, NAVIGATION: true });
    }
  };
  useEffect(() => {
    hideNavigation();
  }, [location]);
  console.log(location.pathname);
  console.log(navHandler);
  return null;
};

export default CheckLocation;
