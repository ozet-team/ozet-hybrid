import React, { useEffect } from 'react';
import { ScreenHelmet, useCurrentScreen } from '@karrotframe/navigator';
import { LayoutContainer } from 'src/styles/layout';
import DropdownButton from '../common/Button/Dropdown';
import styled from 'styled-components';
import { setToEnabledSwipe } from 'src/utils/bridge';

const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  margin-top: 20px;
  p {
    margin-bottom: 6px;
    font-size: 13px;
    color: #666666;
  }
`;

const AddressFilter = () => {
  // const { data, loading } = useGetAnnouncements();

  useEffect(() => {
    setToEnabledSwipe(false);
  }, []);

  return (
    <>
      <ScreenHelmet title="필드제목" closeButtonLocation="right" />
      <LayoutContainer>
        <AddressFormContainer>
          <FormItem>
            <p>지역</p>
            <DropdownButton>전국</DropdownButton>
          </FormItem>
          <FormItem>
            <p>지역</p>
            <DropdownButton>전체</DropdownButton>
          </FormItem>
        </AddressFormContainer>
      </LayoutContainer>
    </>
  );
};

export default AddressFilter;
