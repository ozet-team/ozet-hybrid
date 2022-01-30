import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { navState } from '../../store/navigation';

const NavigationColorHandler = (props: {
  setScrollY: (data: number) => void;
  scrollY: number;
}) => {
  const { setScrollY, scrollY } = props;
  const [navHandler, setNavHandler] = useRecoilState(navState);
  function handleScroll() {
    if (scrollY > 299) {
      setScrollY(window.scrollY);
      setNavHandler({ ...navHandler, NAVIGATION: false });
    } else {
      setScrollY(window.scrollY);
      setNavHandler({ ...navHandler, NAVIGATION: true });
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  console.log(window.scrollY);
  return null;
};

export default NavigationColorHandler;
