import React, { useEffect, useLayoutEffect, useState } from 'react';
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
import { useRecoilState } from 'recoil';
import { userState } from 'src/store/user';

interface bottomBarProps {
  id: string | undefined;
  announcementTitle: string;
  shopName: string;
}

const DetailBottomBar: React.FC<bottomBarProps> = ({
  id,
  announcementTitle,
  shopName,
}) => {
  const [isBookMark, setIsBookMark] = useState(false);
  const [deleteBookMark, setDeleteBookMark] = useState<string>('');
  const getBookmarkHandler = () => {
    try {
      id &&
        API.getBookMark().then((res) => {
          if (res.data) {
            const isBookMark = res.data
              .map((item) => item.announcement.id.toString())
              .indexOf(id);
            setIsBookMark(isBookMark !== -1);
            isBookMark !== -1 && setDeleteBookMark(res.data[isBookMark].id);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const applyRecruitmentHandler = async () => {
    const userData = await API.getUserMe();
    await applyRecruitment({
      name: userData.data.name,
      shopName: shopName,
      announcementTitle: announcementTitle,
      resumeURL: `https://web.ozet.app/resume/${userData.data.id}`,
      phoneNumber: userData.data.phoneNumber,
    });
  };

  const bookmarkHandler = () => {
    if (isBookMark) {
      API.deleteBookMark(deleteBookMark).then(() => {
        setIsBookMark(false);
      });
    } else {
      id &&
        API.postBookMark({ announcementId: id }).then(() => {
          setIsBookMark(true);
          getBookmarkHandler();
        });
    }
  };
  useLayoutEffect(() => {
    getBookmarkHandler();
  }, []);

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
          <OzetButton onClick={applyRecruitmentHandler}>이력서 전송</OzetButton>
        </FooterButtonWrapper>
      </FooterInner>
    </DetailFooterWrapper>
  );
};

export default DetailBottomBar;
