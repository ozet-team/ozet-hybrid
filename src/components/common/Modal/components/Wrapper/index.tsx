import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { FullTypeInner, Inner, LayerWrapper } from './styled';
import { AnimatePresence } from 'framer-motion';

interface ModalProps {
  children: React.ReactNode;
  isFullType?: boolean;
  canOutsideClick?: boolean;
  onOutsideClick?: () => void;
}
const ModalWrapper = ({ isFullType, children }: ModalProps) => {
  const closeModal = useCallback(() => {
    console.log('1');
  }, []);

  return ReactDOM.createPortal(
    <LayerWrapper>
      <AnimatePresence>
        {isFullType ? (
          <FullTypeInner
            initial={{ height: 0 }}
            animate={{
              height: '100vh',
            }}
          >
            {children}
          </FullTypeInner>
        ) : (
          <Inner
            initial={{ height: 0 }}
            animate={{
              height: 'auto',
            }}
          >
            {children}
          </Inner>
        )}
      </AnimatePresence>
    </LayerWrapper>,
    document.getElementById('layer') as Element,
  );
};

export default ModalWrapper;
