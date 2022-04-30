import { useNavigator } from '@karrotframe/navigator-legacy';
import React from 'react';
import { BookmarkDataResponse, ListItemType } from 'src/api/types';
import styled from 'styled-components';
import BookmarkImage from 'src/assets/bookmark.svg';
import SampleImage1 from 'src/assets/SampleImage1.png';
import SampleImage2 from 'src/assets/SampleImage2.png';
import SampleImage3 from 'src/assets/SampleImage3.png';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 0;
`;

const ListItem = styled.div`
  width: calc(50% - 8px);
  position: relative;
`;

const BookmarkImageWrapper = styled.img`
  position: absolute;
  right: 8px;
  top: 8px;
`;

const ListImage = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  width: 100%;
  height: 94px;
  margin-bottom: 12px;
`;

const ListTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
`;
const ListContent = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 4px;
  color: #939497;
`;

interface Props<T> {
  children?: React.ReactElement;
  list?: ListItemType[] | T;
  isBookMark?: boolean;
}

function ListContainer<T extends Record<string, any>>({
  list,
  isBookMark,
}: Props<T>) {
  const { push } = useNavigator();

  const handleDefaultImage = (id: number | string) => {
    const num = Number(id) % 3;
    if (num == 0) {
      return SampleImage1;
    }
    if (num == 1) {
      return SampleImage2;
    }
    return SampleImage3;
  };

  if (isBookMark) {
    return (
      <ListWrapper>
        {list &&
          list.map((item: BookmarkDataResponse) => (
            <ListItem
              key={item.announcement.id}
              onClick={() => push(`/recruitment/detail/${item.id}`)}
            >
              {/* TODO */}
              <BookmarkImageWrapper src={BookmarkImage} />
              <ListImage
                src={
                  item.announcement.imageUrl ||
                  handleDefaultImage(item.announcement.id)
                }
              />
              <ListTitle>{item.announcement.title}</ListTitle>
              <ListContent>{item.announcement.shopName}</ListContent>
              <ListContent>
                {/* TODO: */}
                {/* {item.city} ・ {item.district} */}
              </ListContent>
            </ListItem>
          ))}
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      {list &&
        list.map((item: any) => (
          <ListItem
            key={item.id}
            onClick={() => push(`/recruitment/detail/${item.id}`)}
          >
            {/* TODO */}
            <BookmarkImageWrapper src={BookmarkImage} />
            <ListImage src={item.imageUrl || handleDefaultImage(item.id)} />
            <ListTitle>{item.title}</ListTitle>
            <ListContent>{item.shopName}</ListContent>
            <ListContent>
              {/* TODO: */}
              {/* {item.city} ・ {item.district} */}
            </ListContent>
          </ListItem>
        ))}
    </ListWrapper>
  );
}

export default ListContainer;
