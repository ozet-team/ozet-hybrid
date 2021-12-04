import React from 'react';
import { OzetButton } from '../OzetButton/styled';
import {
  BookMarkBox,
  DetailFooterWrapper,
  FooterButtonWrapper,
  FooterFade,
  FooterInner,
} from './styled';
import BookMark from '../../../img/BookMark';

const DetailBottomBar = () => {
  return (
    <DetailFooterWrapper>
      <FooterFade />
      <FooterInner>
        <BookMarkBox>
          <BookMark />
        </BookMarkBox>
        <FooterButtonWrapper>
          <OzetButton>지원하기</OzetButton>
        </FooterButtonWrapper>
      </FooterInner>
    </DetailFooterWrapper>
  );
};

export default DetailBottomBar;
