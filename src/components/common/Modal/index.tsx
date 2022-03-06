import React, { ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { modalState, MODAL_KEY } from 'src/store/modal';
import ModalWrapper from './components/Wrapper';
import { $Values } from 'utility-types';
import OutsideClickHandler from 'src/utils/hooks/OutsideClickHandler';
import ModalHeader from './components/Header';
import ModalContent from './components/Content';

interface Props {
  type: $Values<typeof MODAL_KEY>;
  title?: string;
  children?: ReactNode;
}

export const Modal = ({
  type = MODAL_KEY.SALARY,
  title = '',
  children,
}: Props) => {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <OutsideClickHandler
      outsideClick={() => setModal({ ...modal, [type]: !modal[type] })}
    >
      <ModalWrapper>
        <ModalHeader title={title} />
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </OutsideClickHandler>
  );
};
