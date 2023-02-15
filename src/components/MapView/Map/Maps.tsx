import { useEffect, useState, useRef } from 'react';
import { Circle, Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
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
  markers: any;
  map: any;
  setMap: any;
  setInfo: any;
  myLocation: any;
  setMyLocation: any;
  popupData: any;
}

const Maps = ({
  info,
  markers,
  map,
  setMap,
  setInfo,
  myLocation,
  setMyLocation,
  popupData,
}: Props) => {
  const mapRef = useRef(null);
  const [filterData, setFilterData] = useState<any>([]);
  const arrFilter: any = [];
  const markerLocation: any = [];

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
              mapDist();
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
  console.log(mapRef.current);
  const mapDist = () => {
    let circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(
        Number(myLocation.lat),
        Number(myLocation.lng),
      ),
      radius: 3000,
      strokeOpacity: 0.3,
      strokeStyle: 'dashed',
      fillOpacity: 0.8,
    });
    // let center = circle?.getPosition();
    // let radius = circle?.getRadius();
    // console.log(center);
    // console.log('radius', radius);
    // let line: any = new kakao.maps.Polyline({ path: [markers.position] });

    let distArr: number[] = [];

    // markers?.forEach(function (marker: any) {
    //   // 마커의 위치와 원의 중심을 경로로 하는 폴리라인 설정
    //   let markerPosition = marker.getPosition();
    //   let path = [markerPosition, center];
    //   line.setPath(path);

    //   // 마커와 원의 중심 사이의 거리
    //   let dist = line.getLength();

    //   // 이 거리가 원의 반지름보다 작거나 같다면
    //   if (dist <= radius) {
    //     // 거리를 배열에 넣어줌, 마커의 경도/위도를 배열에 넣어줌
    //     distArr.push(dist);
    //     markerLocation.push(markerPosition);
    //   }
    //   setFilterData(distArr);
    // });
    // console.log(markerLocation);
    // 마커의 위치를 아이템에서 찾아줌 : 마커에는 데이터 값이 경도/위도 밖에 없기 때문에
    // for (const markerLocate of markerLocation) {
    //   let coords = new kakao.maps.Coords(markerLocate.La, markerLocate.Ma);
    //   console.log(coords);
    // let La = coords.La.toFixed(10);
    // let Ma = coords.Ma.toFixed(10);
    //   const filters = markers?.find(
    //     (item: any) =>
    //       Number(item.lat).toFixed(10) === Ma &&
    //       Number(item.lng).toFixed(10) === La,
    //   );
    //   if (filters !== undefined) {
    //     arrFilter.push(filters);
    //   }
    // }
    // 위의 아이템에 마커와 내 위치의 거리를 계산한 값을 넣어줌
    // for (let i = 0; i < arrFilter.length; i++) {
    //   arrFilter[i].dist = distArr[i];
    // }
  };

  const [openModal, setOpenModal] = useState(false);
  console.log(filterData);
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
        {myLocation && (
          <Circle
            ref={mapRef}
            center={{
              lat: myLocation?.Ma,
              lng: myLocation?.La,
            }}
            radius={3000}
            strokeWeight={5} // 선의 두께입니다
            strokeColor={'#75B8FA'} // 선의 색깔입니다
            strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle={'dash'} // 선의 스타일 입니다
            fillColor={'#CFE7FF'} // 채우기 색깔입니다
            fillOpacity={0.7} // 채우기 불투명도 입니다
          />
        )}
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: myLocation?.Ma || 0,
            lng: myLocation?.La || 0,
          }}
        />
        {markers.map((marker: any) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
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
            {info && info.content === marker.content && (
              <div style={{ color: '#000' }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
        {popupData?.map((marker: any) => (
          <MapMarker
            key={`marker-${marker.title}-${marker.lat},${marker.lon}`}
            position={{ lat: marker.lat, lng: marker.lon }} // 마커를 표시할 위치
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
              <div style={{ color: '#000' }}>{marker.title}</div>
            )}
          </MapMarker>
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
