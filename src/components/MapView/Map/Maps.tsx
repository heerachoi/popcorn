// library
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  mapCategoryValue,
  mapDetailBoxPopup,
  mapFoodSearchValue,
  mapLevel,
  mapLoading,
  mapModalStatus,
  mapSearchValue,
  popupList,
} from '../../../atoms';
// component
import MapModal from './MapModal';
// types
import { Store } from '../../../types/data/storeInterface';
import { AddressResult, FoodData, LocationType } from '../../../types/map';
// style
import styled from 'styled-components';
import CafeSpot from '../../../assets/Img/CafeSpot.png';
import RestaurantSpot from '../../../assets/Img/RestaurantSpot.png';
import LoadingAnimation from '../../GlobalComponents/LoadingAnimation';

interface Props {
  info?: FoodData;
  foodData: FoodData[];
  setMap: any;
  setInfo: React.Dispatch<React.SetStateAction<FoodData | undefined>>;
  myLocation: LocationType;
  popupInfo?: Store;
  setPopupInfo: React.Dispatch<React.SetStateAction<Store | undefined>>;
  setMyLocation: React.Dispatch<React.SetStateAction<LocationType>>;
  setMarkerHandler: (search: string, category: string) => void;
}

const Maps = ({
  info,
  foodData,
  setMap,
  setInfo,
  myLocation,
  popupInfo,
  setPopupInfo,
  setMyLocation,
  setMarkerHandler,
}: Props) => {
  const search = useRecoilValue(mapSearchValue);
  const popuplist = useRecoilValue(popupList);
  const loading = useRecoilValue(mapLoading);
  const setMapModal = useSetRecoilState(mapModalStatus);
  const setMapDetailPopupItem = useSetRecoilState(mapDetailBoxPopup);
  const [category, setCategory] = useRecoilState(mapCategoryValue);
  const [level, setLevel] = useRecoilState(mapLevel);
  const [foodSearch, setFoodSearch] = useRecoilState(mapFoodSearchValue);

  const popupCenterChangeHandler = (popup: Store) => {
    setLevel(4);
    setMapModal(true);
    setMyLocation({ Ma: popup.lat, La: popup.lon });
    searchAddrFromCoords(
      new kakao.maps.LatLng(+popup.lat, +popup.lon),
      displayCenterInfo,
    );
    setMapDetailPopupItem(popup);
    setPopupInfo(popup);
    categoryChangeHandler('음식점', foodSearch);
  };

  const geocoder = new window.kakao.maps.services.Geocoder();
  const searchAddrFromCoords = (
    coords: kakao.maps.LatLng,
    callback: (result: AddressResult[], status: string) => void,
  ) => {
    // 좌표로 행정동 주소 정보를 요청합니다
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  };

  // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
  const displayCenterInfo = (result: AddressResult[], status: string) => {
    if (status === kakao.maps.services.Status.OK) {
      setFoodSearch(
        `${result[1].region_1depth_name} ${result[1].region_3depth_name}`,
      );

      categoryChangeHandler(
        '음식점',
        `${result[1].region_1depth_name} ${result[1].region_3depth_name}`,
      );
    }
  };

  const categoryChangeHandler = (category: string, foodSearch: string) => {
    setCategory('음식점');
    setMarkerHandler(`${foodSearch} ${category}`, category);
  };

  return (
    <>
      {/* 맵이 맨 처음 렌더링 되면 getLocation에서 내 위치를 가져온 값이 center 기준이 되고 marker도 center 좌표에 찍힌다.
      검색하고 onSubmit이 발생되면 map.getCenter() 메서드로 myLocation의 값을 검색 기준 지도 가운데 경도, 위도로 바꿔준다.
      map.getCenter() 함수를 몰라서 오래 걸렸다 후... */}
      {loading ? (
        <LoadingAnimation />
      ) : (
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
            foodData.map((marker: FoodData) => (
              <div
                key={`marker-${marker.title}-${marker.position.lat},${marker.position.lng}`}
              >
                <MapMarker
                  position={{
                    lat: +marker.position.lat,
                    lng: +marker.position.lng,
                  }} // 마커를 표시할 위치
                  image={{
                    src: category === '음식점' ? RestaurantSpot : CafeSpot, // 마커이미지의 주소입니다
                    size: {
                      width: 24,
                      height: 35,
                    },
                  }}
                  onMouseOver={() => {
                    setInfo(marker);
                  }}
                  onClick={() => {
                    setMyLocation({
                      Ma: marker.position.lat,
                      La: marker.position.lng,
                    });
                    setInfo(marker);
                  }}
                />
                {info &&
                  info.title === marker.title &&
                  info.address === marker.address && (
                    <CustomOverlayMap
                      position={{
                        lat: +marker.position.lat,
                        lng: +marker.position.lng,
                      }}
                      yAnchor={2}
                      zIndex={1}
                    >
                      <MapModal marker={marker} setInfo={setInfo} />
                    </CustomOverlayMap>
                  )}
              </div>
            ))}

          {popuplist?.map((popup: Store) => (
            <div key={`popup-${popup.title}-${popup.lat},${popup.lon}`}>
              {(popup?.address.includes(search) ||
                popup?.title.includes(search)) && (
                <>
                  <MapMarker
                    position={{ lat: +popup.lat, lng: +popup.lon }} // 마커를 표시할 위치
                    image={{
                      src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
                      size: {
                        width: 24,
                        height: 35,
                      },
                    }}
                    onClick={() => popupCenterChangeHandler(popup)}
                  />
                  {popupInfo && popupInfo.title === popup.title && (
                    <CustomOverlayMap
                      position={{ lat: +popup.lat, lng: +popup.lon }}
                      yAnchor={2}
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
      )}
    </>
  );
};

export default Maps;

const Wrap = styled(Map)`
  max-width: 100%;
  height: 100%;
  position: relative;
`;
