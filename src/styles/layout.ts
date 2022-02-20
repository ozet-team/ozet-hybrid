import styled from 'styled-components';

export const LayoutContainer = styled.div<{ isList?: boolean }>`
  position: relative;
  top: ${(props) => (props.isList ? '102px;' : '44px;')}
  padding: 0 20px;
  height: 100%;
  overflow: auto;
`;

export const ListLayoutContainer = styled.div`
  height: 100%;
  overflow-y: hidden;
  padding-top: 20px;
`;
