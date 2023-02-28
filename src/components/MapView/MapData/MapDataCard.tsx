import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  mapCategoryValue,
  mapFoodSearchValue,
  mapSearchValue,
  mapModalStatus,
  mapDetailBoxPopup,
  mapLevel,
} from '../../../atoms';

const MapDataCard = ({ popup, food, setMyLocation, setMarkerHandler }: any) => {
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
  };

  const geocoder = new kakao.maps.services.Geocoder();
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

  return (
    <>
      {condition && (
        <Wrap onClick={popupCenterChangeHandler}>
          <DetailImg src={popup?.imgURL} alt="사진" />
          <DetailWrap>
            <DetailTitle>{popup?.title}</DetailTitle>
            <DetailDescriptionWrap>
              <DetailDescription>{popup?.address}</DetailDescription>
              <DetailDescription>
                {popup?.open} - {popup?.close}
              </DetailDescription>
            </DetailDescriptionWrap>
          </DetailWrap>
        </Wrap>
      )}
    </>
  );
};

export default MapDataCard;

const Wrap = styled.div`
  border: 1px solid #d9d9d9;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 175px;
  cursor: pointer;
`;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
`;
const DetailTitle = styled.span`
  font-weight: 800;
  font-size: 17px;
  line-height: 29px;
  color: #323232;
`;
const DetailDescription = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #a6a6a6;
`;

const DetailDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailImg = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 8px 0px 0px 8px;
`;
