import React, { useEffect } from 'react';
import { ScreenHelmet } from '@karrotframe/navigator';
import { LayoutContainer, ListLayoutContainer } from 'src/styles/layout';
import ListContainer from '../components/ListContainer';
import Filter from '../components/Filter';
import { useGetAnnouncements } from 'src/api/hooks/useGetAnnouncements';
import { setToEnabledSwipe } from 'src/utils/bridge';
import { useRecoilValue } from 'recoil';
import { filterSelector } from 'src/store/filter';
import { useLocation } from 'react-router';
import { useGetBookmarks } from 'src/api/hooks/useGetBookmarks';

const BookMarked = () => {
  const { data, loading } = useGetBookmarks();

  const location = useLocation();

  useEffect(() => {
    setToEnabledSwipe(true);
  }, [location]);

  return (
    <>
      <ScreenHelmet title="북마크" closeButtonLocation="right" />
      <ListLayoutContainer>
        <LayoutContainer>
          <ListContainer list={data}></ListContainer>
        </LayoutContainer>
      </ListLayoutContainer>
    </>
  );
};

export default BookMarked;
