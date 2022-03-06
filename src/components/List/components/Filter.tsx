import React from 'react';
import styled from 'styled-components';
import DropdownIcon from 'src/assets/dropdown.svg';
import { Modal } from 'src/components/common/Modal';
import { useRecoilState } from 'recoil';
import { modalState, MODAL_KEY } from 'src/store/modal';
import ModalList from 'src/components/common/Modal/components/List';
import { position, salary } from 'src/constants/list';
import { filterState, FILTER_KEY } from 'src/store/filter';
import { useNavigator } from '@karrotframe/navigator';

const FilterWrapper = styled.div`
  position: fixed;
  top: 0px;
  overflow-y: hidden;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-top: calc(64px + env(safe-area-inset-top));
  padding-left: 20px;
`;

const FilterItem = styled.div`
  height: 38px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 21px;
  padding: 10px 12px 10px 16px;
  display: flex;
  flex-shrink: 0;
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
  padding: 0 8px;
`;

function Filter() {
  const [modal, setModal] = useRecoilState(modalState);
  const [filter, setFilter] = useRecoilState(filterState);
  const { push } = useNavigator();

  return (
    <>
      <FilterWrapper>
        <FilterItem
          onClick={() =>
            setModal({ ...modal, [MODAL_KEY.SALARY]: !modal[MODAL_KEY.SALARY] })
          }
        >
          <FilterTitle>급여</FilterTitle>
          <FilterContent>{filter.salary.text}</FilterContent>
          <img src={DropdownIcon} />
        </FilterItem>
        <FilterItem
          onClick={() =>
            setModal({
              ...modal,
              [MODAL_KEY.POSITION]: !modal[MODAL_KEY.POSITION],
            })
          }
        >
          <FilterTitle>직급</FilterTitle>
          <FilterContent>{filter.position.text}</FilterContent>
          <img src={DropdownIcon} />
        </FilterItem>
        <FilterItem onClick={() => push('/filter/address')}>
          <FilterTitle>지역</FilterTitle>
          <FilterContent>서울 강남구</FilterContent>
          <img src={DropdownIcon} />
        </FilterItem>
      </FilterWrapper>
      {modal.salary && (
        <Modal type={MODAL_KEY.SALARY} title="급여 선택">
          <ModalList
            list={salary}
            onClick={(item: any) =>
              setFilter({ ...filter, [FILTER_KEY.SALARY]: item })
            }
          ></ModalList>
        </Modal>
      )}
      {modal.position && (
        <Modal type={MODAL_KEY.POSITION} title="직급 선택">
          <ModalList
            list={position}
            onClick={(item: any) =>
              setFilter({ ...filter, [FILTER_KEY.POSITION]: item })
            }
          ></ModalList>
        </Modal>
      )}
    </>
  );
}

export default Filter;
