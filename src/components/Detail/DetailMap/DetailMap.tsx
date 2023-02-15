import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

// map를 호출해서 detailData.lat, detailData.lon의 위치를 마커표시해준다.

const DetailMap = () => {
  const { state: detailData } = useLocation();

  const detailLocation = {
    lat: detailData.lat,
    lng: detailData.lon,
  };

  return (
    <DetailPageMap center={detailLocation}>
      <MapMarker position={detailLocation}>
        <div>{detailData.title}</div>
      </MapMarker>
    </DetailPageMap>
  );
};

export default DetailMap;

const DetailPageMap = styled(Map)`
  width: 500px;
  height: 500px;
`;
