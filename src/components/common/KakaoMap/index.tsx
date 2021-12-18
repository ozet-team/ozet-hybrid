import React, { useEffect, useRef } from 'react';
import { MapContainer } from './styled';

interface Props {
  x: string;
  y: string;
}
const KakaoMap = ({ x, y }: Props): JSX.Element => {
  const options = {
    center: new window.kakao.maps.LatLng(x, y),
    level: 5,
  };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new window.kakao.maps.Map(ref.current, options);
  }, []);

  return <MapContainer id="map" ref={ref} />;
};

export default KakaoMap;
