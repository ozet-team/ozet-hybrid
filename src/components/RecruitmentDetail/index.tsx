import React, { useEffect, useState } from 'react';
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
import {
  ScreenHelmet,
  useCurrentScreen,
  useParams,
} from '@karrotframe/navigator';
// import { recruitmentDetailData } from '../../api/recruitmentDetailData';
import DetailBottomBar from 'src/components/common/DetailBottomBar';
import { RouteComponentProps } from 'react-router-dom';
import SampleImage1 from '../../img/SampleImage1.png';
import SampleImage2 from '../../img/SampleImage2.png';
import SampleImage3 from '../../img/SampleImage3.png';

import { useRecoilState } from 'recoil';
import { navState } from '../../store/navigation';
import { useLocation } from 'react-router';
import { setToEnabledSwipe } from 'src/utils/bridge';
import KakaoMap from '../common/KakaoMap';
import { useGetAnnouncements } from '../../api/hooks/useGetAnnouncements';
import { locationConvert } from '../../utils/hooks/locationConvert';
interface Iprops {
  setNavHandler: (data: boolean) => void;
}
const RecruitmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data }: any = useGetAnnouncements();
  const detailData = data?.find((value: any) => (value?.id as string) == id);
  const { isRoot } = useCurrentScreen();
  const [defaultImage, setDefaultImage] = useState('');

  const imageHandler = () => {
    const num = Math.floor(Math.random() * 3) + 1;
    console.log(num);
    if (num == 1) {
      setDefaultImage(SampleImage1);
    } else if (num == 2) {
      setDefaultImage(SampleImage2);
    } else if (num == 3) {
      setDefaultImage(SampleImage3);
    }
  };
  useEffect(() => {
    imageHandler();
  }, []);
  console.log(defaultImage);

  useEffect(() => {
    setToEnabledSwipe(isRoot);
  }, [isRoot]);

  console.log(defaultImage);
  return (
    <>
      {detailData && (
        <>
          <ScreenHelmet title="공고상세" />
          <StyledImage image={defaultImage} />
          {/*// <styledImage style={{ backgroundImage: 'url()' }} />*/}
          <RecruitmentWrapper>
            <RecruitmentTitle>{detailData.title}</RecruitmentTitle>
            <RecruitmentElementWrapper>
              <RecruitmentInfoCategory>
                {detailData.shopName}
              </RecruitmentInfoCategory>
              <SectionColumnBar />
              <RecruitmentInfoCategory>
                {locationConvert(detailData.shopLocation)}
              </RecruitmentInfoCategory>
            </RecruitmentElementWrapper>
            <RecruitmentElementWrapper>
              <RecruitmentCategory>담당자</RecruitmentCategory>
              <RecruitmentCategoryText>
                {detailData.managerName}
              </RecruitmentCategoryText>
              <RecruitmentCategoryText>
                {detailData.managerPhoneNumber}
              </RecruitmentCategoryText>
            </RecruitmentElementWrapper>
            <SectionRowBar />
            <RecruitmentSubTitle>채용정보</RecruitmentSubTitle>
            <RecruitmentElementWrapper>
              <RecruitmentCategory>마감일</RecruitmentCategory>
              <RecruitmentCategoryText>
                {detailData.expiredDatetime == null
                  ? '없음'
                  : detailData.expiredDatetime}
              </RecruitmentCategoryText>
            </RecruitmentElementWrapper>
            <RecruitmentElementWrapper>
              <RecruitmentCategory>근무시간</RecruitmentCategory>
              <RecruitmentCategoryText>
                {detailData.workingHour}
              </RecruitmentCategoryText>
            </RecruitmentElementWrapper>
            <RecruitmentElementWrapper>
              <RecruitmentCategory>급여</RecruitmentCategory>
              <RecruitmentCategoryText>
                {detailData.payAmount}
              </RecruitmentCategoryText>
            </RecruitmentElementWrapper>
            <RecruitmentElementWrapper>
              <RecruitmentCategory>경력</RecruitmentCategory>
              {detailData.employeeTypes.map(
                (data: { name: string }, id: number) => (
                  <RecruitmentCategoryText key={id}>
                    {data.name}
                  </RecruitmentCategoryText>
                ),
              )}
            </RecruitmentElementWrapper>
            <SectionRowBar />
            <RecruitmentSubTitle>상세공고</RecruitmentSubTitle>
            {detailData.description && (
              <>
                {detailData.description
                  .split('\n')
                  .map((line: string, id: number) => (
                    <RecruitmentMainText key={id}>{line}</RecruitmentMainText>
                  ))}
              </>
            )}
            <SectionRowBar />
            <RecruitmentElementWrapper>
              <RecruitmentCategory>근무지역</RecruitmentCategory>
              <RecruitmentCategoryText>
                {detailData.shopLocation}
              </RecruitmentCategoryText>
            </RecruitmentElementWrapper>
            <KakaoMap x={detailData.shopLocation} />
          </RecruitmentWrapper>
          <DetailBottomBar />
        </>
      )}
    </>
  );
};

export default RecruitmentDetail;
