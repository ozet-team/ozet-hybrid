import styled from 'styled-components';

export const DetailFooterWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: auto;
  z-index: 99;
  display: flex;
  flex-direction: column;
`;
export const FooterFade = styled.div`
  background: -webkit-linear-gradient(
    bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0)
  );
  height: 25px;
`;
export const FooterInner = styled.div`
  height: 65px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const BookMarkBox = styled.div`
  height: 50px;
  width: 50px;
  background: #f0f2f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FooterButtonWrapper = styled.div`
  width: 258px;
`;
