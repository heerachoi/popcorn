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
  };

  const setMarkerHandler = (search: any, category: any) => {
    const ps = new kakao.maps.services.Places();

    // ps.keywordSearch(검색어, (키워드 데이터 [], 검색 상태 OK 여부, total count, page 수))
    ps.keywordSearch(
      search, // 내가 검색한 input 값
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();
          let markers: any = [];
          // 카테고리가 음식점, 카페가 아닐 때
          // 검색어로 받은 data를 필요한 값만 markers에 넣어준다.
          if (category === '음식점' || category === '카페') {
            for (let i = 0; i < data.length; i++) {
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
              });
              // @ts-ignore ? 타입스크립트 에러를 무시
              // @ts-ignore
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x)); // 좌표의 중앙값으로 위치 선정
            }
          } else {
            // 카테고리가 팝업스토어 일 때 위와 동일
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
          // setFoodData에 markers를 넣어준다.
          setFoodData(markers);

          if (category === ' ') {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
            // 검색된 장소 지도 가운데 위치를 내 위치로 업데이트 시켜줌
            let latlng = map.getCenter();
            setMyLocation(latlng);
          }
        }
      },
    );
  };

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
            {/* <MapSearch onSearchSubmitHandler={onSearchSubmitHandler} /> */}
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
