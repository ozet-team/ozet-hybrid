import React, { useEffect, useRef } from 'react';
import { MapContainer } from './styled';
import OzetPin from '../../../img/OzetPin.svg';
const { kakao } = window;

interface Props {
  x: string;
}
const KakaoMap = (x: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const imageSize = new window.kakao.maps.Size(35, 35); // 마커이미지의 크기입니다

    const markerImage = new window.kakao.maps.MarkerImage(OzetPin, imageSize);
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 5,
    };
    // 지도를 생성합니다.
    const map = new kakao.maps.Map(ref.current, options);
    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다..
    geocoder.addressSearch(x.x, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
          image: markerImage,
        });

        map.setCenter(coords);
        marker.setMap(map);
      }
    });
  }, []);

  return <MapContainer id="map" ref={ref} />;
};

export default KakaoMap;
