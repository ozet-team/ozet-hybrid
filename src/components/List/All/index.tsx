import React, { useEffect } from 'react';
import {
  ScreenHelmet,
  useCurrentScreen,
  useNavigator,
} from '@karrotframe/navigator';
import { LayoutContainer, ListLayoutContainer } from 'src/styles/layout';
import ListContainer from '../components/ListContainer';
import Filter from '../components/Filter';
import { useGetAnnouncements } from 'src/api/hooks/useGetAnnouncements';
import { setToEnabledSwipe } from 'src/utils/bridge';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filterSelector, filterState } from 'src/store/filter';

const All = () => {
  const filter = useRecoilValue(filterSelector);
  const { data, loading } = useGetAnnouncements(filter);

  useEffect(() => {
    setToEnabledSwipe(true);
  }, []);

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
