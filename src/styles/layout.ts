import styled from 'styled-components';

export const LayoutContainer = styled.div<{ isList?: boolean }>`
  position: relative;
  top: ${(props) =>
    props.isList
      ? 'calc(102px + env(safe-area-inset-top));'
      : 'calc(44px + env(safe-area-inset-top));'}
  padding: 0 20px;
  height: ${(props) =>
    props.isList ? 'calc(100% - 102px);' : 'calc(100% - 44px);'}
  padding-bottom: calc(102px + env(safe-area-inset-bottom));
  overflow: auto;
`;

export const ListLayoutContainer = styled.div`
  overflow-y: hidden;
  padding-top: 20px;
  height: calc(100% - 20px);
`;
