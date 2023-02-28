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
      <TitleBackground>
        <TitleText>찾아오시는 길</TitleText>
      </TitleBackground>
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


const MapWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 58px;
`;

const DetailPageMap = styled(Map)`
  margin: 0 auto;
  margin-top: 45px;
  width: 500px;
  height: 500px;
`;

const TitleBackground = styled.div`
  width: 170px;
  height: 18px;
  background-color: #ffeb62;
  position: absolute;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  position: relative;
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
