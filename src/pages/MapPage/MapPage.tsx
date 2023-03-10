// library
import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  mapCategoryValue,
  mapFoodData,
  mapLevel,
  mapModalStatus,
  mapSearchValue,
  popupList,
} from '../../atoms';
// api
import { getPopupData } from '../../services/api';
// component
import Maps from '../../components/MapView/Map/Maps';
import MapDataList from '../../components/MapView/MapData/MapDataList';
import MapSearch from '../../components/MapView/MapSearch/MapSearch';
import DetailBox from '../../components/MapView/MapDetail/DetailBox';
import LoadingAnimation from '../../components/GlobalComponents/LoadingAnimation';
// types
import { LocationType, FoodData, Params } from '../../types/map';
import { Store } from '../../types/data/storeInterface';
// style
import * as S from './style';
import arrow from '../../assets/Img/arrow.svg';

const MapPage = () => {
  const [popupInfo, setPopupInfo] = useState<Store | undefined>();
  const [info, setInfo] = useState<FoodData>();
  const [map, setMap] = useState<any>(); // 맵
  const [myLocation, setMyLocation] = useState<LocationType>({
    Ma: '37.49810223154336',
    La: '127.0327612337389',
  }); // 나의 위치
  const [foodData, setFoodData] = useRecoilState(mapFoodData); // 음식점, 카페 데이터
  const [mapModal, setMapModal] = useRecoilState(mapModalStatus);
  const search = useRecoilValue(mapSearchValue); // 검색어
  const popuplist = useRecoilValue(popupList); // popupData
  const setCategory = useSetRecoilState(mapCategoryValue); // 카테고리
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

  const setMarkerHandler = (search: string, category: string) => {
    const ps = new kakao.maps.services.Places();
    // ps.keywordSearch(검색어, (키워드 데이터 [], 검색 상태 OK 여부, total count, page 수))

    ps.keywordSearch(
      category === '팝업스토어' ? search : `${search} ${category}`,
      async (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();
          let markers: FoodData[] = [];
          // 받은 데이터 중에 사용할 것들만(lat, lng, content, address, category, img(이미지가 없다.)) markers에 push 해준다.
          // useState로 관리해주고 있는 markers에 set 해준다.
          // img 해결 방법 : 카카오 검색 api를 사용해서 search keyword와 같은 값의 img들을 가져와서 markers에 push 해준다.

          const KAKAO_KEY = process.env.REACT_APP_KAKAO_SEARCH_KEY;
          const Kakao = axios.create({
            baseURL: 'https://dapi.kakao.com',
            headers: {
              Authorization: 'KakaoAK ' + KAKAO_KEY,
            },
          });

          const params1: Params = {
            query: data[0].place_name,
            sort: 'accuracy', // accuracy | recency 정확도 or 최신
            page: 1, // 페이지번호
            size: 1, // 한 페이지에 보여 질 문서의 개수
          };

          const params2: Params = {
            query: data[1].place_name,
            sort: 'accuracy', // accuracy | recency 정확도 or 최신
            page: 1, // 페이지번호
            size: 1, // 한 페이지에 보여 질 문서의 개수
          };

          // const getKaKaoImage = async (params: Params) => {
          //   const { data: image } = await Kakao.get('/v2/search/image', {
          //     params,
          //   });
          //   return image;
          // };

          const getArray = [params1, params2];
          // const getPromiseAll = () => {
          //   Promise.all(
          //     getArray.map(async (param) => {
          //       await Kakao.get('/v2/search/image', {
          //         param,
          //       });
          //     }),
          //   )
          //     .then((result) => {
          //       console.log(result);
          //     })
          //     .catch((e) => {
          //       console.error(e);
          //     });
          // };

          if (category === '음식점' || category === '카페') {
            for (let i = 0; i < data.length; i++) {
              // const params: Params = {
              //   query: data[i].place_name,
              //   sort: 'accuracy', // accuracy | recency 정확도 or 최신
              //   page: 1, // 페이지번호
              //   size: 1, // 한 페이지에 보여 질 문서의 개수
              // };

              // const { data: image } = await Kakao.get('/v2/search/image', {
              //   params,
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
                // imgURL:
                //   image.documents.length !== 0 &&
                //   image.documents[0]?.thumbnail_url,
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
            map.panTo(map.setBounds(bounds));
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
        <LoadingAnimation />
      ) : (
        <S.Wrap>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <MapSearch
              onSearchSubmitHandler={onSearchSubmitHandler}
              myLocation={myLocation}
            />
            <MapDataList
              popupData={popupData}
              setMyLocation={setMyLocation}
              setMarkerHandler={setMarkerHandler}
              setPopupInfo={setPopupInfo}
              popupInfo={popupInfo}
            />
          </div>
          {mapModal && (
            <S.DetailBoxWrap>
              <DetailBox
                setMarkerHandler={setMarkerHandler}
                setMyLocation={setMyLocation}
                setInfo={setInfo}
                info={info}
              />
              <S.CloseDetailBox onClick={() => setMapModal(false)}>
                <S.CloseButtonImg src={arrow} />
              </S.CloseDetailBox>
            </S.DetailBoxWrap>
          )}
          <S.MapWrap mapModal={mapModal}>
            <Maps
              popupInfo={popupInfo}
              info={info}
              foodData={foodData}
              setMap={setMap}
              setInfo={setInfo}
              myLocation={myLocation}
              setPopupInfo={setPopupInfo}
              setMyLocation={setMyLocation}
              setMarkerHandler={setMarkerHandler}
            />
          </S.MapWrap>
        </S.Wrap>
      )}
    </>
  );
};

export default MapPage;
