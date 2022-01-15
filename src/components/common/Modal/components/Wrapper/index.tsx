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
    <LayerWrapper
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ type: 'spring', duration: 0.3 }}
    >
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
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.5,
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
