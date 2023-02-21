import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

// map를 호출해서 detailData.lat, detailData.lon의 위치를 마커표시해준다.

const DetailMap = () => {
  const { state: detailData } = useLocation();

  const detailLocation = {
    lat: detailData?.lat,
    lng: detailData?.lon,
  };

  return (
    <MapWrap>      
      <TitleText>찾아오시는 길</TitleText>
      <DetailPageMap center={detailLocation}>
        <MapMarker position={detailLocation} />
      </DetailPageMap>
    </MapWrap>
  );
};

export default DetailMap;

const MapWrap = styled.div``

const DetailPageMap = styled(Map)`
  margin: 0 auto;
  margin-top: 20px;
  width: 500px;
  height: 500px;
`;

const TitleBackground = styled.div`
  width: 140px;
  height: 23px;
  background-color: #ffeb62;
  position: absolute;
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
  left: 100px;
`;

const TitleText = styled.div`
  margin-top: 58px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  text-align: center;
`;
