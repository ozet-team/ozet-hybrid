import styled from 'styled-components';
import React from 'react';
// import sampleImage from '../../Sample/img.png';

export const SectionColumnBar = styled.div`
  width: 1px;
  height: 13px;
  flex-grow: 0;
  margin: 0px 8px;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const SectionRowBar = styled.div`
  height: 1px;
  margin: 16px 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;
export const RecruitmentWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  font-family: 'Noto Sans KR', sans-serif !important;
`;
export const StyledImageWrapper = styled.div`
  height: 347px;
  background: transparent;
`;

export const StyledImage = styled.img<any>`
  box-sizing: border-box;
  background-size: contain;
  height: 347px;
  width: 100vw;
  overflow: hidden;
  background-size: contain;
  margin: 0 0 16px;
  background-image: url(${(props) => props.image});
  //background-color: rgba(0, 0, 0, 0.1);
  top: 0px;
  background-attachment: fixed;
`;
export const StyledMapSkeleton = styled.div`
  height: 150px;
  margin: 0 0 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 14px;
`;
export const RecruitmentTitle = styled.h3`
  width: 320px;
  flex-grow: 0;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #000;
  margin-bottom: 8px;
`;
export const RecruitmentInfoCategory = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #666;
  margin-bottom: 6px;
`;
export const RecruitmentCategory = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #939497;
  margin-bottom: 6px;
`;
export const RecruitmentElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const RecruitmentCategoryText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-left: 8px;
  margin-bottom: 6px;
`;
export const RecruitmentSubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-bottom: 10px;
`;
export const RecruitmentMainText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  min-height: 20px;
`;
