import React from 'react';
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
  StyledImageSkeleton,
  StyledMapSkeleton,
} from './styled';
import { LayoutContainer } from '../../../styles/layout';

const RecruitmentDetail = () => {
  return (
    <>
      <LayoutContainer>
        <StyledImageSkeleton />
        <RecruitmentWrapper>
          <RecruitmentTitle> 채용공고 제목 String</RecruitmentTitle>
          <RecruitmentElementWrapper>
            <RecruitmentInfoCategory>shop name</RecruitmentInfoCategory>
            <SectionColumnBar />
            <RecruitmentInfoCategory>서울 • 강남구</RecruitmentInfoCategory>
          </RecruitmentElementWrapper>
          <RecruitmentElementWrapper>
            <RecruitmentCategory>담당자</RecruitmentCategory>
            <RecruitmentCategoryText>담당자 이름 </RecruitmentCategoryText>
            <RecruitmentCategoryText>010-0000-0000 </RecruitmentCategoryText>
          </RecruitmentElementWrapper>
          <SectionRowBar />
          <RecruitmentSubTitle>채용정보</RecruitmentSubTitle>
          <RecruitmentElementWrapper>
            <RecruitmentCategory>마감일</RecruitmentCategory>
            <RecruitmentCategoryText>2021.01.01</RecruitmentCategoryText>
          </RecruitmentElementWrapper>
          <RecruitmentElementWrapper>
            <RecruitmentCategory>근무시간</RecruitmentCategory>
            <RecruitmentCategoryText>10:00 ~ 21:00</RecruitmentCategoryText>
          </RecruitmentElementWrapper>
          <RecruitmentElementWrapper>
            <RecruitmentCategory>급여</RecruitmentCategory>
            <RecruitmentCategoryText>240이상</RecruitmentCategoryText>
          </RecruitmentElementWrapper>
          <RecruitmentElementWrapper>
            <RecruitmentCategory>경력</RecruitmentCategory>
            <RecruitmentCategoryText>디자이너</RecruitmentCategoryText>
          </RecruitmentElementWrapper>
          <SectionRowBar />
          <RecruitmentSubTitle>상세공고</RecruitmentSubTitle>
          <RecruitmentMainText>main text</RecruitmentMainText>
          <SectionRowBar />
          <RecruitmentElementWrapper>
            <RecruitmentCategory>근무지역</RecruitmentCategory>
            <RecruitmentCategoryText>
              서울 강동구 어쩌고 어쩌고
            </RecruitmentCategoryText>
          </RecruitmentElementWrapper>
          <StyledMapSkeleton />
        </RecruitmentWrapper>
      </LayoutContainer>
    </>
  );
};

export default RecruitmentDetail;
