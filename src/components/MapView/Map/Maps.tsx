import {
  Map,
  MapMarker,
  CustomOverlayMap,
  ZoomControl,
} from 'react-kakao-maps-sdk';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  mapCategoryValue,
  mapLevel,
  mapModalStatus,
  mapSearchValue,
  popupList,
} from '../../../atoms';
import MapModal from './MapModal';
import RestaurantSpot from '../../../assets/Img/RestaurantSpot.png';
import CafeSpot from '../../../assets/Img/CafeSpot.png';
import { useEffect } from 'react';

interface IMap {
  position: {
    lat: string;
    lng: string;
  };
  content: string;
}

interface Props {
  info: any;
  foodData: any;
  setMap: any;
  setInfo: any;
  myLocation: any;
  popupData: any;
}

const Maps = ({
  info,
  foodData,
  setMap,
  setInfo,
  myLocation,
  popupData,
}: Props) => {
  const search = useRecoilValue(mapSearchValue);
  const category = useRecoilValue(mapCategoryValue);
  const popuplist = useRecoilValue(popupList);
  const level = useRecoilValue(mapLevel);
  const detailModal = useRecoilValue(mapModalStatus);

  return (
    <>
      {/* 맵이 맨 처음 렌더링 되면 getLocation에서 내 위치를 가져온 값이 center 기준이 되고 marker도 center 좌표에 찍힌다.
      검색하고 onSubmit이 발생되면 map.getCenter() 메서드로 myLocation의 값을 검색 기준 지도 가운데 경도, 위도로 바꿔준다.
      map.getCenter() 함수를 몰라서 오래 걸렸다 후... */}
      <Wrap // 로드뷰를 표시할 Container
        center={{
          // 지도의 중심 좌표 설정
          lat: myLocation.Ma,
          lng: myLocation.La,
        }}
        level={level} // 지도 확대 크기
        onCreate={setMap} // 지도 표시
      >
        {(category === '음식점' || category === '카페') &&
          foodData.map((marker: any) => (
            <div
              key={`marker-${marker.title}-${marker.position.lat},${marker.position.lng}`}
            >
              <MapMarker
                position={marker.position} // 마커를 표시할 위치
                image={{
                  src: category === '음식점' ? RestaurantSpot : CafeSpot, // 마커이미지의 주소입니다
                  size: {
                    width: 24,
                    height: 35,
                  },
                }}
                onClick={() => {
                  setInfo(marker);
                }}
              />
              {info && info.title === marker.title && (
                <CustomOverlayMap
                  position={marker.position}
                  yAnchor={1.4}
                  zIndex={1}
                >
                  <MapModal marker={marker} setInfo={setInfo} />
                </CustomOverlayMap>
              )}
            </div>
          ))}

        {popuplist?.map((popup: any) => (
          <div key={`popup-${popup.title}-${popup.lat},${popup.lon}`}>
            {(popup?.address.includes(search) ||
              popup?.title.includes(search)) && (
              <>
                <MapMarker
                  position={{ lat: popup.lat, lng: popup.lon }} // 마커를 표시할 위치
                  image={{
                    src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
                    size: {
                      width: 24,
                      height: 35,
                    },
                  }}
                  onClick={() => setInfo(popup)}
                />
                {info && info.title === popup.title && (
                  <CustomOverlayMap
                    position={{ lat: popup.lat, lng: popup.lon }}
                    yAnchor={1.4}
                    zIndex={99}
                  >
                    <MapModal marker={popup} setInfo={setInfo} />
                  </CustomOverlayMap>
                )}
              </>
            )}
          </div>
        ))}
      </Wrap>
    </>
  );
};

export default Maps;

const Wrap = styled(Map)`
  background-color: grey;
  width: 100%;
  height: 100%;
`;
