import React, { useLayoutEffect, useState } from 'react';
import {
  ScreenHelmet,
  useCurrentScreen,
  useParams,
} from '@karrotframe/navigator';
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
import { recruitmentDetailDataType } from '../../api/types';
import Api from '../../api';

const RecruitmentDetail = () => {
  const [filter] = useRecoilState(filterState);
  const [detailData, setDetailData] = useState<recruitmentDetailDataType>();
  const { isRoot } = useCurrentScreen();
  const { id } = useParams<{ id: string }>();

  const { data }: any = useGetAnnouncements({
    salary: filter.salary,
    position: filter.position,
    city: filter.city,
    country: filter.country,
  });

  useLayoutEffect(() => {
    async function getAnnouncement(url: string) {
      const res = await Api.getRecruitmentDetailData(url);
      return res.data;
    }
    {
      id &&
        getAnnouncement(id).then((res) => {
          setDetailData(res);
        });
    }
  }, [id]);

  const [defaultImage, setDefaultImage] = useState('');
  const imageHandler = () => {
    const num = Number(detailData?.id) % 3;
    if (num == 0) {
      setDefaultImage(SampleImage1);
    }
    if (num == 1) {
      setDefaultImage(SampleImage2);
    }
    if (num == 2) {
      setDefaultImage(SampleImage3);
    }
  };
  useLayoutEffect(() => {
    imageHandler();
  }, [detailData?.id]);

  useLayoutEffect(() => {
    setToEnabledSwipe(isRoot);
  }, [isRoot]);
  return (
    <>
      {detailData && (
        <>
          <ScreenHelmet />
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
          <DetailBottomBar
            id={id}
            announcementTitle={detailData.title}
            shopName={detailData.shopName}
          />
        </>
      )}
    </>
  );
};

export default RecruitmentDetail;
