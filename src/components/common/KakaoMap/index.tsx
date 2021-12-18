import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Props {
  x: string;
  y: string;
}
const KakaoMap = ({ x, y }: Props): JSX.Element => {
  const options = {
    center: new window.kakao.maps.LatLng(x, y),
    level: 3,
  };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new window.kakao.maps.Map(ref.current, options);
  }, []);

  return <StyledContainer id="map" ref={ref} />;
};

const StyledContainer = styled.div`
  width: 100%;
  height: 150px;
`;

export default KakaoMap;
