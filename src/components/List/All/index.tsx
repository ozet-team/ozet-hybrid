import React, { useEffect } from 'react';
import { ScreenHelmet } from '@karrotframe/navigator-legacy';
import { LayoutContainer, ListLayoutContainer } from 'src/styles/layout';
import ListContainer from '../components/ListContainer';
import Filter from '../components/Filter';
import { useGetAnnouncements } from 'src/api/hooks/useGetAnnouncements';
import { setToEnabledSwipe } from 'src/utils/bridge';
import { useRecoilValue } from 'recoil';
import { filterSelector } from 'src/store/filter';
import { useLocation } from 'react-router';

const All = () => {
  const filter = useRecoilValue(filterSelector);
  const { data, loading } = useGetAnnouncements(filter);

  const location = useLocation();

  useEffect(() => {
    setToEnabledSwipe(true);
  }, [location]);

  return (
    <>
      <ScreenHelmet title="모든공고" closeButtonLocation="right" />
      <ListLayoutContainer>
        <Filter />
        <LayoutContainer isList>
          <ListContainer list={data}></ListContainer>
        </LayoutContainer>
      </ListLayoutContainer>
    </>
  );
};

export default All;
