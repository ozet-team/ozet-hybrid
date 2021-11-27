import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState, MODAL_KEY } from 'src/store/modal';
import ModalWrapper from './components/Wrapper';
import { $Values } from 'utility-types';
import OutsideClickHandler from 'src/utils/hooks/OutsideClickHandler';

interface Props {
  type: $Values<typeof MODAL_KEY>;
}

export const Modal = ({ type = MODAL_KEY.NORMAL }: Props) => {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <OutsideClickHandler
      outsideClick={() => setModal({ ...modal, [type]: !modal[type] })}
    >
      <ModalWrapper>header content</ModalWrapper>;
    </OutsideClickHandler>
  );
};
