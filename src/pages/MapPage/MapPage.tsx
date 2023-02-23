import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  mapCategoryValue,
  mapFoodData,
  mapSearchValue,
  popupList,
} from '../../atoms';
import { getPopupData } from '../../services/api';
import Maps from '../../components/MapView/Map/Maps';
import MapCategory from '../../components/MapView/MapCategory/MapCategory';
import MapDataList from '../../components/MapView/MapData/MapDataList';
import MapSearch from '../../components/MapView/MapSearch/MapSearch';
import MapWeather from '../../components/MapView/MapWeather/MapWeather';

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

const MapPage = () => {
  const [info, setInfo] = useState<Markers>();
  // const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩
  const [map, setMap] = useState<any>(); // 맵
  const [myLocation, setMyLocation] = useState<any>({
    Ma: 37.49810223154336,
    La: 127.0327612337389,
  }); // 나의 위치
  const [search, setSearch] = useRecoilState(mapSearchValue); // 검색어
  const [category, setCategory] = useRecoilState(mapCategoryValue); // 카테고리
  const popuplist = useRecoilValue(popupList); // popupData
  const [foodData, setFoodData] = useRecoilState(mapFoodData); // 음식점, 카페 데이터

  const { data: popupData, isLoading } = useQuery('popupData', getPopupData);

  const onSearchSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 검색할 때 팝업리스트가 없으면 return 해서 지도가 옮겨지지 않게 하고 검색결과가 없다고 알려준다.
    if (popuplist.length === 0) return alert('검색 결과가 없습니다.');
    // new kakao.maps.services.Places(); 키워드로 검색하면 object를 반환해준다.
    setMarkerHandler(search, category);
    // setCategory(' ');
  };

  const setMarkerHandler = (search: any, category: any) => {
    const ps = new kakao.maps.services.Places();
    // ps.keywordSearch(검색어, (키워드 데이터 [], 검색 상태 OK 여부, total count, page 수))
    if (search === '홍대') search += '마포구';
    if (search === '건대') search += '광진구';

    ps.keywordSearch(
      search,
      (data, status, _pagination) => {
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
          // 네이버 API 제한 횟수 제한
          // 엔터 연속으로 쳐서 데이터 여러번 불러오게 하는거 막기 ( 3초 이상 ,..)
          if (category === '음식점' || category === '카페') {
            for (let i = 0; i < data.length; i++) {
              // console.log('자!!!!!!!!!!!!!!!!!!', data[i]);

              // const {
              //   data: { items },
              // } = await axios.get('/v1/search/image', {
              //   params: { query: data[i].place_name, start: 1, display: 1 },
              //   headers: {
              //     'X-Naver-Client-Id': NAVER_CLIENT_ID,
              //     'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
              //   },
              // });

              // @ts-ignore

              markers.push({
                position: {
                  lat: data[i].y,
                  lng: data[i].x,
                },
                title: data[i].place_name,
                address: data[i].address_name,
                category: data[i].category_group_name,
                placeURL: data[i].place_url,
                id: data[i].id,
                phone: data[i].phone,
                // img: items.length !== 0 ? items[0].link : '파베이미지',
              });
              // @ts-ignore
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
          } else {
            for (let i = 0; i < popupData.length; i++) {
              if (
                popupData[i].address.includes(search) ||
                popupData[i].title.includes(search)
              ) {
                console.log(popupData[i].lat, popupData[i].lon);
                // @ts-ignore
                bounds.extend(
                  new kakao.maps.LatLng(popupData[i].lat, popupData[i].lon),
                );
              }
            }
          }

          setFoodData(markers);
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다

          if (category === ' ') {
            map.setBounds(bounds);
            // 검색된 장소 지도 가운데 위치를 내 위치로 업데이트 시켜줌
            let latlng = map.getCenter();
            setMyLocation(latlng);
          }
          // if (category === ' ') {
          //   map.setBounds(bounds);
          //   // 검색된 장소 지도 가운데 위치를 내 위치로 업데이트 시켜줌
          //   let latlng = map.getCenter();
          //   setMyLocation(latlng);
          // }

          // setSearch('');
          // setSearch((prev) => prev + ' ' + category);

          // });

          // axios 주석 풀때 같이 풀어주세요.
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

  const geocoder = new kakao.maps.services.Geocoder();
  const searchAddrFromCoords = (coords: kakao.maps.LatLng, callback: any) => {
    // 좌표로 행정동 주소 정보를 요청합니다
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  };

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
  //             setIsLoading(false);
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

  // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
  function displayCenterInfo(result: any, status: any) {
    if (status === kakao.maps.services.Status.OK) {
      console.log('result', result);
      setSearch(result[0].region_2depth_name);
    }
  }

  // useEffect(() => {
  //   getLocation();
  // }, []);

  useEffect(() => {
    if (!map) return;
    // setMarkerHandler();
  }, [map]);

  return (
    <>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <Wrap>
          <div>
            <MapCategory
              setMarkerHandler={setMarkerHandler}
              popupData={popupData}
            />
            <MapSearch onSearchSubmitHandler={onSearchSubmitHandler} />
            <MapDataList popupData={popupData} setMyLocation={setMyLocation} />
          </div>
          <div>
            <MapWeather myLocation={myLocation} />
            <Maps
              info={info}
              foodData={foodData}
              setMap={setMap}
              setInfo={setInfo}
              myLocation={myLocation}
              popupData={popupData}
            />
          </div>
        </Wrap>
      )}
    </>
  );
};

export default MapPage;

const Wrap = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;
