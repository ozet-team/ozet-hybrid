import styled from 'styled-components';

export const LayoutContainer = styled.div<{ isList?: boolean }>`
  position: relative;
  top: ${(props) =>
    props.isList
      ? 'calc(102px + env(safe-area-inset-top));'
      : 'calc(44px + env(safe-area-inset-top));'}
  padding: 0 20px;
  height: 100%;
  overflow: auto;
`;

export const ListLayoutContainer = styled.div`
  overflow-y: hidden;
  padding-top: 20px;
  height: calc(100% - 20px);
`;
