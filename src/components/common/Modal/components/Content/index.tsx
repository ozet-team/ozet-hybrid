import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div``;
const Content = styled.div``;

interface Props {
  children: ReactNode;
}

const ModalContent = ({ children }: Props) => {
  return (
    <ContentWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
  );
};

export default ModalContent;
