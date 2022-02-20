import React, { useEffect, useState } from 'react';
import { ScreenHelmet, useCurrentScreen } from '@karrotframe/navigator';
import { LayoutContainer } from 'src/styles/layout';
import DropdownButton from '../common/Button/Dropdown';
import styled from 'styled-components';
import { setToEnabledSwipe } from 'src/utils/bridge';
import { useRecoilState } from 'recoil';
import { filterState, FILTER_KEY } from 'src/store/filter';
import { modalState, MODAL_KEY } from 'src/store/modal';
import { Modal } from '../common/Modal';
import ModalList, { ListItem } from '../common/Modal/components/List';
import { useGetCities, useGetCountries } from 'src/api/hooks/useGetAddress';
import IconClose from 'src/assets/icon_close.svg';

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

const AddressItemContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 0;
`;

const AddressItem = styled.div`
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

const AddressItemContent = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #5d2fff;
  padding-right: 8px;
`;

const AddressFilter = () => {
  const { data: cities, loading } = useGetCities();

  const [city, setCity] = useState({ id: 0, name: '전국' });
  const [country, setCountry] = useState({ id: 0, name: '' });

  const { data: countries } = useGetCountries(city.id);

  const [modal, setModal] = useRecoilState(modalState);
  const [filter, setFilter] = useRecoilState(filterState);

  useEffect(() => {
    setToEnabledSwipe(false);
  }, []);

  useEffect(() => {
    console.log(filter.city);
  }, [filter]);

  return (
    <>
      <ScreenHelmet title="지역" closeButtonLocation="right" />
      <LayoutContainer>
        <AddressFormContainer>
          <FormItem>
            <p>지역</p>
            <DropdownButton
              onClick={() =>
                setModal({
                  ...modal,
                  [MODAL_KEY.CITY]: !modal[MODAL_KEY.CITY],
                })
              }
            >
              {city.name}
            </DropdownButton>
          </FormItem>
          {city.id !== 0 && (
            <FormItem>
              <p>지역</p>
              <DropdownButton
                onClick={() =>
                  setModal({
                    ...modal,
                    [MODAL_KEY.COUNTRY]: !modal[MODAL_KEY.COUNTRY],
                  })
                }
              >
                {country.name}
              </DropdownButton>
            </FormItem>
          )}

          <AddressItemContainer>
            {filter.city.map((item, index) => {
              if (index && filter.country[index] && item.name !== '전체') {
                return (
                  <AddressItem key={index}>
                    <AddressItemContent>
                      {item.name} {filter.country[index].name}
                    </AddressItemContent>
                    <img src={IconClose} />
                  </AddressItem>
                );
              }
            })}
          </AddressItemContainer>
        </AddressFormContainer>
        {modal.city && (
          <Modal type={MODAL_KEY.CITY} title="지역">
            <ModalList>
              {cities &&
                cities?.map((item) => {
                  return (
                    <ListItem
                      key={item.id}
                      onClick={() => {
                        setCity(item);
                        setCountry({ id: 0, name: '' });
                      }}
                    >
                      {item.name}
                    </ListItem>
                  );
                })}
            </ModalList>
          </Modal>
        )}

        {modal.country && (
          <Modal type={MODAL_KEY.COUNTRY} title="지역">
            <ModalList>
              {countries &&
                countries?.map((item) => {
                  return (
                    <ListItem
                      key={item.id}
                      onClick={() => {
                        setFilter({
                          ...filter,
                          [FILTER_KEY.COUNTRY]: [...filter.country, item],
                          [FILTER_KEY.CITY]: [...filter.city, city],
                        });
                        setCity({ id: 0, name: '전국' });
                        setCountry({ id: 0, name: '' });
                      }}
                    >
                      {item.name}
                    </ListItem>
                  );
                })}
            </ModalList>
          </Modal>
        )}
      </LayoutContainer>
    </>
  );
};

export default AddressFilter;
