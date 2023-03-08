import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './stlye';
import {
  mapCategoryValue,
  mapFoodSearchValue,
  mapSearchValue,
  mapModalStatus,
  mapDetailBoxPopup,
  mapLevel,
} from '../../../atoms';
import LazyImg from '../../GlobalComponents/LazyImg';

const MapDataCard = ({
  popup,
  setMyLocation,
  setMarkerHandler,
  setPopupInfo,
  popupInfo,
}: any) => {
  const [category, setCategory] = useRecoilState(mapCategoryValue);
  const [search, setSearch] = useRecoilState(mapSearchValue);
  const [foodSearch, setFoodSearch] = useRecoilState(mapFoodSearchValue);
  const [mapModal, setMapModal] = useRecoilState(mapModalStatus);
  const [mapDetailPopupItem, setMapDetailPopupItem] =
    useRecoilState(mapDetailBoxPopup);
  const setLevel = useSetRecoilState(mapLevel);

  const condition =
    popup?.address.includes(search) || popup?.title.includes(search);

  // 카드를 누르면 해당 좌표로 지도가 이동되는 함수
  // popup 카테고리 일 때
  const popupCenterChangeHandler = () => {
    setLevel(4);
    setMapModal(true);
    setMyLocation({ Ma: popup.lat, La: popup.lon });
    searchAddrFromCoords(
      new kakao.maps.LatLng(popup.lat, popup.lon),
      displayCenterInfo,
    );
    setMapDetailPopupItem(popup);
    setPopupInfo(popup);
    categoryChangeHandler('음식점', foodSearch);
  };

  const geocoder = new window.kakao.maps.services.Geocoder();
  const searchAddrFromCoords = (coords: kakao.maps.LatLng, callback: any) => {
    // 좌표로 행정동 주소 정보를 요청합니다
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  };

  // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
  const displayCenterInfo = (result: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      setFoodSearch(
        `${result[0].region_1depth_name} ${result[0].region_3depth_name}`,
      );

      categoryChangeHandler(
        '음식점',
        `${result[0].region_1depth_name} ${result[0].region_3depth_name}`,
      );
    }
  };

  const categoryChangeHandler = (category: string, foodSearch: string) => {
    setCategory('음식점');
    setMarkerHandler(`${foodSearch} ${category}`, category);
  };

  console.log(popup.imgURL[0], 'popup');
  return (
    <>
      {condition && (
        <S.Wrap
          popupInfo={popupInfo?.title}
          popup={popup.title}
          onClick={popupCenterChangeHandler}
        >
          {/* <S.DetailImg src={popup?.imgURL} alt="사진" loading="lazy" /> */}
          <LazyImg src={popup?.imgURL} />
          <S.DetailWrap>
            <S.DetailTitle>{popup?.title}</S.DetailTitle>
            <S.DetailDescriptionWrap>
              <S.DetailDescription>{popup?.address}</S.DetailDescription>
              <S.DetailDescription>
                {popup?.open} - {popup?.close}
              </S.DetailDescription>
            </S.DetailDescriptionWrap>
          </S.DetailWrap>
        </S.Wrap>
      )}
    </>
  );
};

export default MapDataCard;
