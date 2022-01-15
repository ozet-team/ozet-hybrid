import React, { useEffect } from 'react';
import {
  ScreenHelmet,
  useCurrentScreen,
  useNavigator,
} from '@karrotframe/navigator';
import { LayoutContainer } from 'src/styles/layout';
import ListContainer from '../components/ListContainer';
import Filter from '../components/Filter';
import { useGetAnnouncements } from 'src/api/hooks/useGetAnnouncements';
import { setToEnabledSwipe } from 'src/utils/bridge';

const listMock = [
  {
    id: 1,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 2,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 3,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 4,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 4,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 5,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 6,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 7,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 8,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 9,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 10,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 11,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 12,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 13,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 14,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
  {
    id: 15,
    title: '채용 공고 제목 두줄까지',
    shopName: '이철헤어커커',
    city: '서울',
    district: '광진구',
    url: 'https://picsum.photos/200',
  },
];

const All = () => {
  const { data, loading } = useGetAnnouncements();

  const { isRoot } = useCurrentScreen();

  useEffect(() => {
    setToEnabledSwipe(isRoot);
  }, [isRoot]);

  return (
    <>
      <ScreenHelmet title="모든공고" closeButtonLocation="right" />
      <LayoutContainer>
        <Filter />
        <ListContainer list={data}></ListContainer>
      </LayoutContainer>
    </>
  );
};

export default All;
