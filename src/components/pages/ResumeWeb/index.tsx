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
      <ResumeDetailWrapper></ResumeDetailWrapper>
    </>
  );
};

export default ResumeWeb;
