import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react';
import { Circle, Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { mapCategoryValue, mapSearchValue } from '../../../atoms';
import MapModal from './MapModal';

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
  map: any;
  setMap: any;
  setInfo: any;
  myLocation: any;
  setMyLocation: any;
  popupData: any;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Maps = ({
  info,
  foodData,
  map,
  setMap,
  setInfo,
  myLocation,
  setMyLocation,
  popupData,
  setIsLoading,
}: Props) => {
  const search = useRecoilValue(mapSearchValue);
  const category = useRecoilValue(mapCategoryValue);
  const geocoder = new kakao.maps.services.Geocoder();
  const setSearch = useSetRecoilState(mapSearchValue);

  // const searchAddrFromCoords = (coords: kakao.maps.LatLng, callback: any) => {
  //   // 좌표로 행정동 주소 정보를 요청합니다
  //   geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  // };

  // const getLocation = (): Promise<GeolocationPosition> => {
  //   return new Promise((resolve, reject) => {
  //     if (navigator.geolocation) {
  //       // getCurrentPosition 사용자의 경도, 위도를 알려줌
  //       // 첫 번째 인자가 성공했을 때 반환하는 함수, 두 번째 인자가 실패했을 때 반환하는 함수
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           if (position) {
  //             console.log(position);
  //             setMyLocation({
  //               Ma: position.coords.latitude,
  //               La: position.coords.longitude,
  //             });
  //             // setIsLoading(false);
  //             console.log('');
  //             searchAddrFromCoords(
  //               new kakao.maps.LatLng(
  //                 position.coords.latitude,
  //                 position.coords.longitude,
  //               ),
  //               displayCenterInfo,
  //             );
  //           }
  //         },
  //         (error) => reject(error),
  //       );
  //     } else {
  //       alert('Geolocation is not supported by this browser.');
  //     }
  //   });
  // };

  // // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
  // function displayCenterInfo(result: any, status: any) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     console.log('result', result);
  //     setSearch(result[0].region_2depth_name);
  //   }
  // }

  // useEffect(() => {
  //   getLocation();
  // }, []);

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* <Wrap id="map" ref={MapRef} /> */}
      {/* <button onClick={() => setOpenModal((prev) => !prev)}>모달</button>
      {openModal && <MapModal />} */}

      {/* 맵이 맨 처음 렌더링 되면 getLocation에서 내 위치를 가져온 값이 center 기준이 되고 marker도 center 좌표에 찍힌다.
      검색하고 onSubmit이 발생되면 map.getCenter() 메서드로 myLocation의 값을 검색 기준 지도 가운데 경도, 위도로 바꿔준다.
      map.getCenter() 함수를 몰라서 오래 걸렸다 후... */}
      <Wrap // 로드뷰를 표시할 Container
        center={{
          lat: (myLocation && myLocation?.Ma) || 0,
          lng: (myLocation && myLocation?.La) || 0,
        }}
        level={3}
        onCreate={setMap}
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: myLocation?.Ma || 0,
            lng: myLocation?.La || 0,
          }}
        />
        {(category === '음식점' || category === '카페') &&
          foodData.map((marker: any) => (
            <>
              <MapMarker
                key={`marker-${marker.title}-${marker.position.lat},${marker.position.lng}`}
                position={marker.position} // 마커를 표시할 위치
                image={{
                  src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
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
            </>
          ))}
        {popupData?.map((popup: any) => (
          <>
            {(popup?.address.includes(search) ||
              popup?.title.includes(search)) && (
              <>
                <MapMarker
                  key={`popup-${popup.title}-${popup.lat},${popup.lon}`}
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
          </>
        ))}
      </Wrap>
    </>
  );
};

export default Maps;

const Wrap = styled(Map)`
  background-color: grey;
  width: 700px;
  height: 600px;
`;
