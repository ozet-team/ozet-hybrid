import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LayerWrapper = styled(motion.div)`
  &:before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    content: '';
    z-index: 2;
  }
`;

export const Inner = styled(motion.div)`
  overflow: hidden;
  position: fixed;
  height: 100px;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: var(--white);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 3;
  background-color: white;
`;

export const FullTypeInner = styled(motion.div)`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--white);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 3;
  background-color: white;
`;

export const Content = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  max-height: calc(500px - 70px);
  padding-bottom: 30px;
  padding-bottom: calc(30px + env(safe-area-inset-bottom));
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;
