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
          setModal({ ...modal, [MODAL_KEY.SALARY]: !modal[MODAL_KEY.SALARY] })
        }
      >
        button
      </button>
      {modal.salary && <Modal type={MODAL_KEY.SALARY} />}
    </>
  );
};

export default DevTest;
