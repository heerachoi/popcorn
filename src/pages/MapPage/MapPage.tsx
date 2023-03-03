import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  mapCategoryValue,
  mapFoodData,
  mapLevel,
  mapModalStatus,
  mapSearchValue,
  popupList,
} from '../../atoms';
import { getPopupData } from '../../services/api';
import Maps from '../../components/MapView/Map/Maps';
import MapDataList from '../../components/MapView/MapData/MapDataList';
import MapSearch from '../../components/MapView/MapSearch/MapSearch';
import DetailBox from '../../components/MapView/MapDetail/DetailBox';
import Vector from '../../assets/Img/Vector.png';
import COLORS from '../../assets/CSS/colors';

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
  const [popupInfo, setPopupInfo] = useState();
  const [info, setInfo] = useState<Markers>();
  const [map, setMap] = useState<any>(); // 맵
  const [myLocation, setMyLocation] = useState<LocationType>({
    Ma: 37.49810223154336,
    La: 127.0327612337389,
  }); // 나의 위치
  const search = useRecoilValue(mapSearchValue); // 검색어
  const [category, setCategory] = useRecoilState(mapCategoryValue); // 카테고리
  const popuplist = useRecoilValue(popupList); // popupData
  const [foodData, setFoodData] = useRecoilState(mapFoodData); // 음식점, 카페 데이터
  const [mapModal, setMapModal] = useRecoilState(mapModalStatus);
  const setLevel = useSetRecoilState(mapLevel);

  const { data: popupData, isLoading } = useQuery('popupData', getPopupData);

  const onSearchSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCategory('팝업스토어');
    setMapModal(false);
    // 검색할 때 팝업리스트가 없으면 return 해서 지도가 옮겨지지 않게 하고 검색결과가 없다고 알려준다.
    if (popuplist.length === 0) return alert('검색 결과가 없습니다.');
    // new kakao.maps.services.Places(); 키워드로 검색하면 object를 반환해준다.
    setMarkerHandler(search, '팝업스토어');
    // 디테일 카드를 클릭하고 다시 검색하면 레벨 설정이 제대로 작동안되서 초기화 해줘야 함.
    setLevel(3);
  };

  const setMarkerHandler = (search: any, category: any) => {
    const ps = new kakao.maps.services.Places();
    // ps.keywordSearch(검색어, (키워드 데이터 [], 검색 상태 OK 여부, total count, page 수))

    ps.keywordSearch(
      category === '팝업스토어' ? search : `${search} ${category}`,
      async (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();
          let markers: any = [];
          // 받은 데이터 중에 사용할 것들만(lat, lng, content, address, category, img(이미지가 없다.)) markers에 push 해준다.
          // useState로 관리해주고 있는 markers에 set 해준다.
          // img 해결 방법 : 카카오 검색 api를 사용해서 search keyword와 같은 값의 img들을 가져와서 markers에 push 해준다.

          const KAKAO_KEY = 'de74e268b76a8e2b1f6b81e6cff5b52f';
          const Kakao = axios.create({
            baseURL: 'https://dapi.kakao.com',
            headers: {
              Authorization: 'KakaoAK ' + KAKAO_KEY,
            },
          });

          if (category === '음식점' || category === '카페') {
            for (let i = 0; i < data.length; i++) {
              const params: any = {
                query: data[i].place_name,
                sort: 'accuracy', // accuracy | recency 정확도 or 최신
                page: 1, // 페이지번호
                size: 3, // 한 페이지에 보여 질 문서의 개수
              };

              const { data: image } = await Kakao.get('/v2/search/image', {
                params,
              });

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
                imgURL:
                  image.documents.length !== 0 &&
                  image.documents[1]?.thumbnail_url,
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
                // @ts-ignore
                bounds.extend(
                  new kakao.maps.LatLng(popupData[i].lat, popupData[i].lon),
                );
              }
            }
          }
          setFoodData(markers);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          if (category === '팝업스토어') {
            map.setBounds(bounds);
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
            <MapSearch
              onSearchSubmitHandler={onSearchSubmitHandler}
              myLocation={myLocation}
            />
            <MapDataList
              popupData={popupData}
              setMyLocation={setMyLocation}
              setMarkerHandler={setMarkerHandler}
              setPopupInfo={setPopupInfo}
            />
          </div>
          {mapModal && (
            <DetailBoxWrap>
              <DetailBox
                setMarkerHandler={setMarkerHandler}
                setMyLocation={setMyLocation}
                setInfo={setInfo}
              />
              <CloseDetailBox onClick={() => setMapModal(false)}>
                <img src={Vector} />
              </CloseDetailBox>
            </DetailBoxWrap>
          )}
          <MapWrap mapModal={mapModal}>
            <Maps
              popupInfo={popupInfo}
              info={info}
              foodData={foodData}
              setMap={setMap}
              setInfo={setInfo}
              myLocation={myLocation}
              popupData={popupData}
            />
          </MapWrap>
        </Wrap>
      )}
    </>
  );
};

export default MapPage;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* justify-content: space-around; */
  /* align-items: flex-end; */
`;

const MapWrap = styled.div`
  width: 100%;
  height: 100%;
  margin-left: ${(props: Props) => (props.mapModal ? '300px' : '0px')};
`;

const DetailBoxWrap = styled.div`
  height: 100%;
  position: relative;
`;

const CloseDetailBox = styled.div`
  position: absolute;
  top: 50%;
  left: 400px;
  z-index: 999;
  width: 35px;
  height: 80px;
  background-color: ${COLORS.white};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface Props {
  mapModal: boolean;
}
