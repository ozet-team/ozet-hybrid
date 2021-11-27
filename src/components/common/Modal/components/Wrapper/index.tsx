import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { Inner, LayerWrapper } from './styled';
import { AnimatePresence } from 'framer-motion';

interface ModalProps {
  type?: string;
  isShow?: boolean;
  className?: string;
  children: React.ReactNode;
  canOutsideClick?: boolean;
  onOutsideClick?: () => void;
}
const ModalWrapper = ({
  type,
  isShow = false,
  className = '',
  children,
}: ModalProps) => {
  const closeModal = useCallback(() => {
    console.log('1');
  }, []);

  return ReactDOM.createPortal(
    <LayerWrapper>
      <AnimatePresence>
        <Inner
          initial={{ height: 0 }}
          animate={{
            height: 500,
          }}
        >
          {children}
        </Inner>
      </AnimatePresence>
    </LayerWrapper>,
    document.getElementById('layer') as Element,
  );
};

export default ModalWrapper;
