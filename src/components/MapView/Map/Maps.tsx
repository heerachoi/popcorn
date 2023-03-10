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
    categoryChangeHandler('?????????', foodSearch);
  };

  const geocoder = new window.kakao.maps.services.Geocoder();
  const searchAddrFromCoords = (
    coords: kakao.maps.LatLng,
    callback: (result: AddressResult[], status: string) => void,
  ) => {
    // ????????? ????????? ?????? ????????? ???????????????
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  };

  // ?????? ??????????????? ?????? ??????????????? ?????? ??????????????? ???????????? ???????????????
  const displayCenterInfo = (result: AddressResult[], status: string) => {
    if (status === kakao.maps.services.Status.OK) {
      setFoodSearch(
        `${result[1].region_1depth_name} ${result[1].region_3depth_name}`,
      );

      categoryChangeHandler(
        '?????????',
        `${result[1].region_1depth_name} ${result[1].region_3depth_name}`,
      );
    }
  };

  const categoryChangeHandler = (category: string, foodSearch: string) => {
    setCategory('?????????');
    setMarkerHandler(`${foodSearch} ${category}`, category);
  };

  return (
    <>
      {/* ?????? ??? ?????? ????????? ?????? getLocation?????? ??? ????????? ????????? ?????? center ????????? ?????? marker??? center ????????? ?????????.
      ???????????? onSubmit??? ???????????? map.getCenter() ???????????? myLocation??? ?????? ?????? ?????? ?????? ????????? ??????, ????????? ????????????.
      map.getCenter() ????????? ????????? ?????? ????????? ???... */}
      {loading ? (
        <LoadingAnimation />
      ) : (
        <Wrap // ???????????? ????????? Container
          center={{
            // ????????? ?????? ?????? ??????
            lat: myLocation.Ma,
            lng: myLocation.La,
          }}
          level={level} // ?????? ?????? ??????
          onCreate={setMap} // ?????? ??????
        >
          {(category === '?????????' || category === '??????') &&
            foodData.map((marker: FoodData) => (
              <div
                key={`marker-${marker.title}-${marker.position.lat},${marker.position.lng}`}
              >
                <MapMarker
                  position={{
                    lat: +marker.position.lat,
                    lng: +marker.position.lng,
                  }} // ????????? ????????? ??????
                  image={{
                    src: category === '?????????' ? RestaurantSpot : CafeSpot, // ?????????????????? ???????????????
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
                    position={{ lat: +popup.lat, lng: +popup.lon }} // ????????? ????????? ??????
                    image={{
                      src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // ?????????????????? ???????????????
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
