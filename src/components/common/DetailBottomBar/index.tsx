import React, { useLayoutEffect, useState } from 'react';
import { OzetButton } from '../OzetButton/styled';
import {
  BookMarkBox,
  DetailFooterWrapper,
  FooterButtonWrapper,
  FooterFade,
  FooterInner,
} from './styled';
import BookMark from '../../../img/BookMark';
import API from '../../../api/index';
import { applyRecruitment } from '../../../utils/bridge';

const DetailBottomBar = (props: { id: string }) => {
  const { id } = props;
  const [isBookMark, setIsBookMark] = useState(false);
  const [deleteBookMark, setDeleteBookMark] = useState<string>('');
  const getBookmarkHandler = () => {
    API.getBookMark().then((res) => {
      if (res.data) {
        const isBookMark = res.data
          .map((item) => item.announcement.id.toString())
          .indexOf(id);
        setIsBookMark(isBookMark !== -1);
        isBookMark !== -1 && setDeleteBookMark(res.data[isBookMark].id);
      }
    });
  };
  useLayoutEffect(() => {
    API.getJWT({ user_id: '9' }).then(() => {
      getBookmarkHandler();
    });
  }, []);
  const bookmarkHandler = () => {
    if (isBookMark) {
      API.deleteBookMark(deleteBookMark).then(() => {
        setIsBookMark(false);
      });
    } else {
      API.postBookMark({ announcementId: id }).then(() => {
        setIsBookMark(true);
        getBookmarkHandler();
      });
    }
  };

  return (
    <DetailFooterWrapper>
      <FooterFade />
      <FooterInner>
        <BookMarkBox
          onClick={() => {
            bookmarkHandler();
          }}
        >
          <BookMark fill={isBookMark ? '#5d2fff' : '#D7D8DB'} />
        </BookMarkBox>
        <FooterButtonWrapper>
          <OzetButton
            onClick={() => {
              applyRecruitment();
            }}
          >
            이력서 전송
          </OzetButton>
        </FooterButtonWrapper>
      </FooterInner>
    </DetailFooterWrapper>
  );
};

export default DetailBottomBar;
