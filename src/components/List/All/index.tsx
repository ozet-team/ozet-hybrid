import React from 'react';
import { ScreenHelmet } from '@karrotframe/navigator';
import { LayoutContainer } from 'src/styles/layout';
import ListContainer from '../components/ListContainer';
import Filter from '../components/Filter';

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
];

const All = () => {
  return (
    <>
      <ScreenHelmet title="모든공고" closeButtonLocation="right" />
      <LayoutContainer>
        <Filter></Filter>
        <ListContainer list={listMock}></ListContainer>
      </LayoutContainer>
    </>
  );
};

export default All;
