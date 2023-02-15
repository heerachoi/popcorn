import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { MapSearchValue } from '../../atoms';
import { getPopupData } from '../../services/api';
import Maps from './Map/Maps';
import MapCategory from './MapCategory/MapCategory';
import MapDataList from './MapData/MapDataList';
import MapSearch from './MapSearch/MapSearch';
import MapWeather from './MapWeather/MapWeather';

interface LocationType {
  Ma: number;
  La: number;
}

interface Markers {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
  address: string;
  category: string;
}

const MapView = () => {
  const [info, setInfo] = useState<Markers>();
  const [markers, setMarkers] = useState<Markers[]>([]);
  const [map, setMap] = useState<any>();
  const [myLocation, setMyLocation] = useState<LocationType>();
  const [search, setSearch] = useRecoilState(MapSearchValue);

  const { data: popupData } = useQuery('popupData', getPopupData);

  const onSearchSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // new kakao.maps.services.Places(); 키워드로 검색하면 object를 반환해준다.
    setMarkerHandler();
  };

  const setMarkerHandler = () => {
    const ps = new kakao.maps.services.Places();

    // ps.keywordSearch(검색어, (키워드 데이터 [], 검색 상태 OK 여부, total count, page 수))
    ps.keywordSearch(
      search.value,
      (data, status, _pagination) => {
        console.log(_pagination);
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();
          let markers: any = [];

          // 받은 데이터 중에 사용할 것들만(lat, lng, content, address, category, img(이미지가 없다.)) markers에 push 해준다.
          // useState로 관리해주고 있는 markers에 set 해준다.
          // img 해결 방법 : 네이버 api를 사용해서 search keyword와 같은 값의 img들을 가져와서 markers에 push 해준다.

          // getSearchKeyWord().then(async () => {
          //   const NAVER_CLIENT_ID = 'ZDK5Gc_XwH219r8fwyIt';
          //   const NAVER_CLIENT_SECRET = 'VRu_0jKjhT';

          for (let i = 0; i < data.length; i++) {
            //     // console.log(data[i].place_name);

            //     const {
            //       data: { items },
            //     } = await axios.get('/v1/search/image', {
            //       params: { query: data[i].place_name, start: 1, display: 1 },
            //       headers: {
            //         'X-Naver-Client-Id': NAVER_CLIENT_ID,
            //         'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
            //       },
            //     });

            // @ts-ignore

            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
              address: data[i].address_name,
              category: data[i].category_group_name,
              // img: items.length !== 0 ? items[0].link : '파베이미지',
            });

            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          console.log(markers);
          setMarkers(markers);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다

          map.setBounds(bounds);

          // 검색된 장소 지도 가운데 위치를 내 위치로 업데이트 시켜줌
          let latlng = map.getCenter();
          console.log(latlng);
          setMyLocation(latlng);
          // Recoil로 set 할 때 {value: ''} 으로 확인하기
          setSearch({ value: '' });
          // });

          // });
        }
      },
      // {
      //   radius: 3000,
      //   // location: new kakao.maps.LatLng(37.53082287515338, 127.04443987550118),
      //   page: 1,
      //   size: 15,
      // },
    );
  };

  const getSearchKeyWord = async () => {
    const option = {
      query: '', //이미지 검색 텍스트
      start: 1, //검색 시작 위치
      display: 3, //가져올 이미지 갯수
      sort: 'sim', //정렬 유형 (sim:유사도)
      filter: 'small', //이미지 사이즈
    };
  };

  useEffect(() => {
    if (!map) return;
    setMarkerHandler();
  }, [map]);

  return (
    <Wrap>
      <div>
        <MapCategory />
        <MapSearch onSearchSubmitHandler={onSearchSubmitHandler} />
        <MapDataList popupData={popupData} />
      </div>
      <div>
        <MapWeather myLocation={myLocation} />
        <Maps
          info={info}
          markers={markers}
          map={map}
          setMap={setMap}
          setInfo={setInfo}
          myLocation={myLocation}
          setMyLocation={setMyLocation}
          popupData={popupData}
        />
      </div>
    </Wrap>
  );
};

export default MapView;

const Wrap = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;
