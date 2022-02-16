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
  word-break: keep-all;
`;
export const StyledImageWrapper = styled.div`
  height: 347px;
  background: transparent;
`;

export const StyledImage = styled.img<any>`
  box-sizing: border-box;
  height: 347px;
  width: 100%;
  overflow: hidden;
  background-size: 100% 347px;
  background-repeat: no-repeat;
  margin: 0 0 16px;
  background-image: url(${(props) => props.image});
  top: 0;
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
  word-break: keep-all;
  color: #939497;
  margin-bottom: 6px;
`;
export const RecruitmentElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
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

export const BackImage = styled.img`
  margin-left: 20px;
  height: 16px;
  width: 8px;
`;
