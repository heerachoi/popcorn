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
    <>
      <MapTitleBox>
        <TitleBackground>
          <TitleText>찾아오시는 길</TitleText>
        </TitleBackground>
      </MapTitleBox>
      <MapWrap>
        <DetailPageMap center={detailLocation}>
          <MapMarker position={detailLocation} />
        </DetailPageMap>
      </MapWrap>
    </>
  );
};

export default DetailMap;

const MapTitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 88px;
`;

const MapWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  
`;

const DetailPageMap = styled(Map)`
  margin: 0 auto;
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
  position: relative;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`;
