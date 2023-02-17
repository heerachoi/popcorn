import { useEffect, useState, useRef } from 'react';
import { Circle, Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { mapSearchValue } from '../../../atoms';
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
}: Props) => {
  const search = useRecoilValue(mapSearchValue);

  const getLocation = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        // getCurrentPosition 사용자의 경도, 위도를 알려줌
        // 첫 번째 인자가 성공했을 때 반환하는 함수, 두 번째 인자가 실패했을 때 반환하는 함수
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (position) {
              console.log(position);
              setMyLocation({
                Ma: position.coords.latitude,
                La: position.coords.longitude,
              });
            }
          },
          (error) => reject(error),
        );
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* <Wrap id="map" ref={MapRef} /> */}
      {/* <button onClick={() => setOpenModal((prev) => !prev)}>모달</button>
      {openModal && <MapModal />} */}

      {/* 맵이 맨 처음 렌더링 되면 getLocation에서 내 위치를 가져온 값이 center 기준이 되고 marker도 center 좌표에 찍힌다.
      검색하고 onSubmit이 발생되면 map.getCenter() 메서드로 myLocation의 값을 검색 기준 지도 가운데 경도, 위도로 바꿔준다.
      map.getCenter() 함수를 몰라서 오래 걸렸다 후... */}
      <RemovableCustomOverlayStyle />
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
        {foodData.map((marker: any) => (
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
            onClick={() => setInfo(marker)}
          >
            {info && info.title === marker.title && (
              <CustomOverlayMap position={marker.position} yAnchor={1.4}>
                <MapInfoBox>
                  <ModalHeader>
                    <ModalHeaderTitle>{marker.title}</ModalHeaderTitle>
                    {/* <ModalHeaderDescription>10km</ModalHeaderDescription> */}
                  </ModalHeader>
                  <ModalMain>
                    <ModalMainImg
                      src="https://firebasestorage.googleapis.com/v0/b/popcorn1-4b47e.appspot.com/o/Kauts%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-02-07%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.41.36.png?alt=media&token=a5580ae1-4662-4658-94ec-4bb152ce1fa0"
                      alt="사진"
                    />
                    <ModalMainWrap>
                      <ModalMainTextWrap>
                        <ModalMainTitle>{marker.phone}</ModalMainTitle>
                        <ModalMainText>{marker.address}</ModalMainText>
                      </ModalMainTextWrap>
                      <ModalMainBtn>디테일 페이지로 이동</ModalMainBtn>
                    </ModalMainWrap>
                  </ModalMain>
                </MapInfoBox>
              </CustomOverlayMap>
            )}
          </MapMarker>
        ))}
        {popupData?.map((popup: any) => (
          <>
            {(popup?.address.includes(search) ||
              popup?.title.includes(search)) && (
              <MapMarker
                key={`marker-${popup.title}-${popup.lat},${popup.lon}`}
                position={{ lat: popup.lat, lng: popup.lon }} // 마커를 표시할 위치
                image={{
                  src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
                  size: {
                    width: 24,
                    height: 35,
                  },
                }}
                onClick={() => setInfo(popup)}
              >
                {info && info.title === popup.title && (
                  // <div style={{ color: '#000' }}>{popup.title}</div>
                  <></>
                )}
              </MapMarker>
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

const CustomOverlayBox = styled(CustomOverlayMap)`
  width: 300px;
  height: 100px;
  border-radius: 10px;
  z-index: 999;
`;

const MapInfoBox = styled.div`
  width: 300px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  z-index: 999;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 20px;
`;

const ModalHeaderTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const ModalHeaderDescription = styled.span`
  font-size: 13px;
`;

const ModalMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px 20px;
`;
const ModalMainImg = styled.img`
  width: 50px;
  height: 50px;
`;
const ModalMainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalMainTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalMainTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
`;
const ModalMainText = styled.span`
  font-size: 13px;
  font-weight: 400;
`;
const ModalMainBtn = styled.button`
  border: none;
  cursor: pointer;
`;

const RemovableCustomOverlayStyle = styled.div`
  display: none;
`;
