import React, { useState } from 'react';
import {
  ProfileImage,
  ProfileImageWrapper,
  ProfileIntroduce,
  ProfileName,
  ProfileNickname,
  ProfileWrapper,
  ProfileTextWrapper,
  ResumeDetailWrapper,
  ResumeSubTitle,
  ResumeDetailTitle,
  ResumeDetailText,
  ResumeTerm,
  ResumeBr,
} from './styled';
import exProfileImg from '../../../img/profileImg.png';
import './Resume.css';
import ResumeCategoryBar from 'src/components/ResumeCategoryBar';

const ResumeWeb = () => {
  const tabs = [{ label: '상세정보' }, { label: 'SNS' }];
  const [selectedTab, setSelectedTab] = useState('상세정보');
  return (
    <>
      <ProfileWrapper className={'Profile'}>
        <ProfileImageWrapper>
          <ProfileImage src={exProfileImg} />
        </ProfileImageWrapper>
        <ProfileTextWrapper>
          <ProfileNickname>Ozet</ProfileNickname>
          <ProfileName>김오젯</ProfileName>
          <ProfileIntroduce>
            책임감과 성실함을 겸비한 준비된 미용인입니다.
          </ProfileIntroduce>
        </ProfileTextWrapper>
      </ProfileWrapper>
      <ResumeCategoryBar
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === '상세정보' ? (
        <ResumeDetailWrapper>
          <ResumeSubTitle>경력 (1년 4개월)</ResumeSubTitle>
          <ResumeDetailTitle>준오헤어 잠실롯데월드점 (1년)</ResumeDetailTitle>
          <ResumeDetailText>
            스텝 | 헤어, 커트 어시스턴트 및 막내 스텝 교육
          </ResumeDetailText>
          <ResumeTerm> 2000.00 ~ 2000.00</ResumeTerm>
          <ResumeDetailTitle>준오헤어 잠실롯데월드점 (1년)</ResumeDetailTitle>
          <ResumeDetailText>
            스텝 | 헤어, 커트 어시스턴트 및 막내 스텝 교육
          </ResumeDetailText>
          <ResumeTerm> 2000.00 ~ 2000.00</ResumeTerm>
          <ResumeBr />
          <ResumeSubTitle>자격증</ResumeSubTitle>
          <ResumeDetailTitle>미용사(헤어) 한국기술자격검정원</ResumeDetailTitle>
          <ResumeTerm> 2000.00 ~ 2000.00</ResumeTerm>
          <ResumeBr />
          <ResumeSubTitle>학력</ResumeSubTitle>
          <ResumeDetailTitle>오젯대학교 미용학과</ResumeDetailTitle>
          <ResumeTerm> 2000.00 ~ 2000.00</ResumeTerm>
          <ResumeDetailTitle>오젯고등학교 일반계</ResumeDetailTitle>
          <ResumeTerm> 2000.00 ~ 2000.00</ResumeTerm>
          <ResumeBr />
          <ResumeSubTitle>병역</ResumeSubTitle>
          <ResumeDetailTitle>해당 없음</ResumeDetailTitle>
        </ResumeDetailWrapper>
      ) : null}
      {selectedTab === 'SNS' ? (
        <ResumeDetailWrapper>
          <ResumeSubTitle>instagram.com/hair_ozet/</ResumeSubTitle>
        </ResumeDetailWrapper>
      ) : null}
    </>
  );
};

export default ResumeWeb;
