import React from 'react';
import styled from 'styled-components';
import DropdownIcon from 'src/assets/dropdown.svg';
import { Modal } from 'src/components/common/Modal';
import { useRecoilState } from 'recoil';
import { modalState, MODAL_KEY } from 'src/store/modal';

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: 20px 0;
  -webkit-overflow-scrolling: touch;
`;

const FilterItem = styled.div`
  min-width: 152px;
  height: 38px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 21px;
  padding: 10px 12px 10px 16px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin-right: 12px;
`;

const FilterTitle = styled.span`
  font-size: 14px;
  line-height: 17px;
`;
const FilterContent = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #5d2fff;
`;

function Filter() {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <>
      <FilterWrapper>
        <FilterItem
          onClick={() =>
            setModal({ ...modal, [MODAL_KEY.NORMAL]: !modal[MODAL_KEY.NORMAL] })
          }
        >
          <FilterTitle>지역</FilterTitle>
          <FilterContent>서울 강남구</FilterContent>
          <img src={DropdownIcon} />
        </FilterItem>
        <FilterItem>
          <FilterTitle>지역</FilterTitle>
          <FilterContent>서울 강남구</FilterContent>
          <img src={DropdownIcon} />
        </FilterItem>
        <FilterItem>
          <FilterTitle>지역</FilterTitle>
          <FilterContent>서울 강남구</FilterContent>
          <img src={DropdownIcon} />
        </FilterItem>
      </FilterWrapper>
      {modal.normal && <Modal type={MODAL_KEY.NORMAL} />}
    </>
  );
}

export default Filter;
