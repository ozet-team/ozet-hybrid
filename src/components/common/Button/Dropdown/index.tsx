import React from 'react';

import styled from 'styled-components';
import DropdownImage from 'src/assets/dropdown.svg';

const DropdownButtonWrapper = styled.button`
  width: 100%;
  min-height: 50px;
  padding: 9px 46px 8px 16px;
  text-align: left;
  font-size: 15px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: url(${DropdownImage}) no-repeat center right 16px;
`;

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const DropdownButton = ({ children, ...rest }: Props) => {
  return <DropdownButtonWrapper {...rest}>{children}</DropdownButtonWrapper>;
};

export default DropdownButton;
