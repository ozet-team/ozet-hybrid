import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState, MODAL_KEY } from 'src/store/modal';
import { Modal } from '../common/Modal';

const DevTest = () => {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <>
      <button
        onClick={() =>
          setModal({ ...modal, [MODAL_KEY.NORMAL]: !modal[MODAL_KEY.NORMAL] })
        }
      >
        button
      </button>
      {modal.normal && <Modal type={MODAL_KEY.NORMAL} />}
    </>
  );
};

export default DevTest;
