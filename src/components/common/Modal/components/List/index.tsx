import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ListItem = styled.li`
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
  list?: Array<T & Item>;
  children?: ReactNode;
  onClick?: (item: T) => void;
}

const ModalList = <T extends Record<string, unknown>>({
  list,
  onClick,
  children,
}: Props<T>) => {
  return (
    <ListWrapper>
      {list &&
        list.map((item, index) => (
          <ListItem key={index} onClick={() => onClick && onClick(item)}>
            {item.text}
          </ListItem>
        ))}
      {children}
    </ListWrapper>
  );
};

export default ModalList;
