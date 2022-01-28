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
import { useParams } from 'react-router-dom';
import API from '../../../api/index';

const DetailBottomBar = () => {
  const { id }: any = useParams();
  const postBookmarkHandler = () => {
    API.postBookmarks({ announcementId: id });
  };
  return (
    <DetailFooterWrapper>
      <FooterFade />
      <FooterInner>
        <BookMarkBox
          onClick={() => {
            postBookmarkHandler();
          }}
        >
          <BookMark />
        </BookMarkBox>
        <FooterButtonWrapper>
          <OzetButton>이력서 전송</OzetButton>
        </FooterButtonWrapper>
      </FooterInner>
    </DetailFooterWrapper>
  );
};

export default DetailBottomBar;
