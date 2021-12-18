import React, { useEffect, useRef } from 'react';
import { MapContainer } from './styled';
import OzetPin from '../../../img/OzetPin.svg';

interface Props {
  x: string;
  y: string;
}
const KakaoMap = ({ x, y }: Props): JSX.Element => {
  const imageSize = new window.kakao.maps.Size(35, 35); // 마커이미지의 크기입니다

  const markerImage = new window.kakao.maps.MarkerImage(OzetPin, imageSize),
    markerPosition = new window.kakao.maps.LatLng(x, y); // 마커가 표시될 위치입니다

  const marker = new window.kakao.maps.Marker({
    position: markerPosition,
    image: markerImage, // 마커이미지 설정
  });
  const options = {
    center: new window.kakao.maps.LatLng(x, y),
    level: 5,
  };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new window.kakao.maps.Map(ref.current, options);
    marker.setMap(map);
  }, []);

  return <MapContainer id="map" ref={ref} />;
};

export default KakaoMap;
