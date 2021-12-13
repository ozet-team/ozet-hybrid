import React, { useEffect } from 'react';
import {
  RecruitmentCategory,
  RecruitmentCategoryText,
  RecruitmentElementWrapper,
  RecruitmentInfoCategory,
  RecruitmentMainText,
  RecruitmentSubTitle,
  RecruitmentTitle,
  RecruitmentWrapper,
  SectionColumnBar,
  SectionRowBar,
  StyledImage,
  StyledMapSkeleton,
} from './styled';
import { LayoutContainer } from '../../styles/layout';
import { ScreenHelmet, useParams } from '@karrotframe/navigator';
import { RecruitmentDetailData } from '../../api/RecruitmentDetailData';
import DetailBottomBar from 'src/components/common/DetailBottomBar';
import { RouteComponentProps } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { navState } from '../../store/navigation';
import { useLocation } from 'react-router';
interface Iprops {
  setNavHandler: (data: boolean) => void;
}
const RecruitmentDetail = () => {
  const [navHandler, setNavHandler] = useRecoilState(navState);
  const { id } = useParams<{ id: string }>();
  const data = RecruitmentDetailData.find((value) => value.id == id);

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
  }, []);
  console.log(location.pathname);
  console.log(navHandler);
  return (
    <>
      <ScreenHelmet title="공고상세" />

      <StyledImage />
      {/*<styledImage style={{ backgroundImage: 'url()' }} />*/}
      <RecruitmentWrapper>
        <RecruitmentTitle>{data?.title}</RecruitmentTitle>
        <RecruitmentElementWrapper>
          <RecruitmentInfoCategory>{data?.shopName}</RecruitmentInfoCategory>
          <SectionColumnBar />
          <RecruitmentInfoCategory>{data?.city}</RecruitmentInfoCategory>
        </RecruitmentElementWrapper>
        <RecruitmentElementWrapper>
          <RecruitmentCategory>담당자</RecruitmentCategory>
          <RecruitmentCategoryText>{data?.manager}</RecruitmentCategoryText>
          <RecruitmentCategoryText>{data?.callNumber}</RecruitmentCategoryText>
        </RecruitmentElementWrapper>
        <SectionRowBar />
        <RecruitmentSubTitle>채용정보</RecruitmentSubTitle>
        <RecruitmentElementWrapper>
          <RecruitmentCategory>마감일</RecruitmentCategory>
          <RecruitmentCategoryText>{data?.deadline}</RecruitmentCategoryText>
        </RecruitmentElementWrapper>
        <RecruitmentElementWrapper>
          <RecruitmentCategory>근무시간</RecruitmentCategory>
          <RecruitmentCategoryText>{data?.workTime}</RecruitmentCategoryText>
        </RecruitmentElementWrapper>
        <RecruitmentElementWrapper>
          <RecruitmentCategory>급여</RecruitmentCategory>
          <RecruitmentCategoryText>{data?.pay}</RecruitmentCategoryText>
        </RecruitmentElementWrapper>
        <RecruitmentElementWrapper>
          <RecruitmentCategory>경력</RecruitmentCategory>
          <RecruitmentCategoryText>{data?.career}</RecruitmentCategoryText>
        </RecruitmentElementWrapper>
        <SectionRowBar />
        <RecruitmentSubTitle>상세공고</RecruitmentSubTitle>
        {data?.detailText.split('\n').map((line, id) => (
          <RecruitmentMainText key={id}>{line}</RecruitmentMainText>
        ))}

        <SectionRowBar />
        <RecruitmentElementWrapper>
          <RecruitmentCategory>근무지역</RecruitmentCategory>
          <RecruitmentCategoryText>{data?.workSpace}</RecruitmentCategoryText>
        </RecruitmentElementWrapper>
        <StyledMapSkeleton />
      </RecruitmentWrapper>
      <DetailBottomBar />
    </>
  );
};

export default RecruitmentDetail;
