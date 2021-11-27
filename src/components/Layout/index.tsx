import React from 'react';
import { Route, Switch } from 'react-router';
import { useRecoilState } from 'recoil';
import { modalState, MODAL_KEY } from 'src/store/modal';
import { Modal } from '../common/Modal';

import { Sample } from '../Sample';

export const Layout = () => {
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
      <Switch>
        <Route path={''} component={Sample} />
      </Switch>
    </>
  );
};
