import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// map를 호출해서 detailData.lat, detailData.lon의 위치를 마커표시해준다.

const DetailMap = () => {
  const MapRef = useRef(null);
  const { state: detailData } = useLocation();

  const detailLocation = new window.kakao.maps.LatLng(
    detailData.lat,
    detailData.lon,
  );

  useEffect(() => {
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: detailLocation, //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(MapRef.current, options); //지도 생성 및 객체 리턴

    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    new window.kakao.maps.Marker({
      map,
      position: detailLocation,
    });
  }, []);

  return <DetailPageMap ref={MapRef}></DetailPageMap>;
};

export default DetailMap;

const DetailPageMap = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 500px;
`;
