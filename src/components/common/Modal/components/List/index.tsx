import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;
const Item = styled.li`
  width: 100%;
  padding: 12px 24px;

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
`;

type Item = {
  text: string;
};

interface Props<T> {
  list: Array<T & Item>;
  onClick: (item: T) => void;
}

const ModalList = <T extends Record<string, unknown>>({
  list,
  onClick,
}: Props<T>) => {
  return (
    <ListWrapper>
      {list.map((item, index) => (
        <Item key={index} onClick={() => onClick(item)}>
          {item.text}
        </Item>
      ))}
    </ListWrapper>
  );
};

export default ModalList;
