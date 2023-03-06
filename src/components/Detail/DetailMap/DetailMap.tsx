import { useLocation } from 'react-router-dom';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './style';

// map를 호출해서 detailData.lat, detailData.lon의 위치를 마커표시해준다.

const DetailMap = () => {
  const { state: detailData } = useLocation();

  const detailLocation = {
    lat: detailData?.lat,
    lng: detailData?.lon,
  };

  return (
    <S.MapWrap>
      <S.TitleBackground>
        <S.TitleText>찾아오시는 길</S.TitleText>
      </S.TitleBackground>
      <S.DetailPageMap center={detailLocation}>
        <MapMarker
          position={detailLocation}
          image={{
            src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
            size: {
              width: 24,
              height: 35,
            },
          }}
        />
        <CustomOverlayMap
          position={detailLocation}
          yAnchor={2.5}
          xAnchor={0.6}
          zIndex={1}
        >
          <S.MapInfoBox>
            <S.ModalHeaderTitle>{detailData.title}</S.ModalHeaderTitle>
          </S.MapInfoBox>
        </CustomOverlayMap>
      </S.DetailPageMap>
    </S.MapWrap>
  );
};

export default DetailMap;
