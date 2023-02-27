import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';

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
        <CustomOverlayMap position={detailLocation} yAnchor={4.0} zIndex={1}>
          <MapInfoBox>
            <ModalHeaderTitle>{detailData.title}</ModalHeaderTitle>
          </MapInfoBox>
        </CustomOverlayMap>
      </DetailPageMap>
    </MapWrap>
  );
};

export default DetailMap;

const MapWrap = styled.div``;

const DetailPageMap = styled(Map)`
  margin: 0 auto;
  margin-top: 20px;
  width: 500px;
  height: 500px;
`;

const TitleText = styled.div`
  margin-top: 58px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

const MapInfoBox = styled.div`
  width: 120%;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
const ModalHeaderTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
