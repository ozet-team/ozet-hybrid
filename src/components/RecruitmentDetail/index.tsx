import React, { useEffect, useRef, useState } from 'react';
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
} from './styled';
import {
  ScreenHelmet,
  useCurrentScreen,
  useParams,
} from '@karrotframe/navigator';
// import { recruitmentDetailData } from '../../api/recruitmentDetailData';
import DetailBottomBar from 'src/components/common/DetailBottomBar';
import SampleImage1 from '../../img/SampleImage1.png';
import SampleImage2 from '../../img/SampleImage2.png';
import SampleImage3 from '../../img/SampleImage3.png';
import { setToEnabledSwipe } from 'src/utils/bridge';
import KakaoMap from '../common/KakaoMap';
import { useGetAnnouncements } from '../../api/hooks/useGetAnnouncements';
import { locationConvert } from '../../utils/hooks/locationConvert';
import { paymentConvert } from '../../utils/hooks/paymentConvert';
import { useRecoilState } from 'recoil';
import { filterState } from '../../store/filter';
import API from '../../api';
import { useGetRecruitmentDetail } from '../../api/hooks/useGetRecruimentDetail';

const RecruitmentDetail = () => {
  const [filter] = useRecoilState(filterState);
  const { id } = useParams<{ id: string }>();
  // const { data }: any = useGetAnnouncements({
  //   salary: filter.salary,
  //   position: filter.position,
  // });

  // const detailData = data.find((value: any) => (value.id as string) == id);

  const { data } = useGetRecruitmentDetail(id as string);
  const detailData = data;
  console.log(detailData);
  const { isRoot } = useCurrentScreen();
  const [defaultImage, setDefaultImage] = useState('');
  const imageHandler = () => {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
      setDefaultImage(SampleImage1);
    }
    if (num == 2) {
      setDefaultImage(SampleImage2);
    }
    if (num == 3) {
      setDefaultImage(SampleImage3);
    }
  };
  useEffect(() => {
    imageHandler();
  }, []);

  useEffect(() => {
    setToEnabledSwipe(isRoot);
  }, [isRoot]);

  return (
    <>
      {detailData && (
        <>
          <ScreenHelmet title="공고상세" />
          <StyledImage image={defaultImage} />
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
                {paymentConvert({
                  payAmount: detailData.payAmount,
                  payType: detailData.payType,
                })}
              </RecruitmentCategoryText>
            </RecruitmentElementWrapper>
            <RecruitmentElementWrapper>
              <RecruitmentCategory>경력</RecruitmentCategory>
              {detailData.employeeTypes &&
                detailData.employeeTypes.map(
                  (data: { name: string }, id: number) => (
                    <RecruitmentCategoryText key={id}>
                      {data.name}
                    </RecruitmentCategoryText>
                  ),
                )}
            </RecruitmentElementWrapper>
            <SectionRowBar />
            <RecruitmentSubTitle>상세공고</RecruitmentSubTitle>
            {detailData.description &&
              detailData.description
                .split('\n')
                .map((line: string, id: number) => (
                  <RecruitmentMainText key={id}>{line}</RecruitmentMainText>
                ))}
            <SectionRowBar />
            <RecruitmentElementWrapper>
              <RecruitmentCategory>근무지역</RecruitmentCategory>
              <RecruitmentCategoryText>
                {detailData.shopLocation}
              </RecruitmentCategoryText>
            </RecruitmentElementWrapper>
            {detailData.shopLocation && (
              <KakaoMap x={detailData.shopLocation} />
            )}
          </RecruitmentWrapper>
          <DetailBottomBar id={id as string} />
        </>
      )}
    </>
  );
};

export default RecruitmentDetail;
