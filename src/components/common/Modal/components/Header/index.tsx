import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 24px;
`;
const HeaderTitle = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`;

interface Props {
  title: string;
}

const ModalHeader = ({ title }: Props) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrapper>
  );
};

export default ModalHeader;
