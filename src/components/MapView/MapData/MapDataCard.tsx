import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  mapCategoryValue,
  mapFoodSearchValue,
  mapSearchValue,
  mapModalStatus,
} from '../../../atoms';

const MapDataCard = ({ popup, food, setMyLocation, setMarkerHandler }: any) => {
  const [category, setCategory] = useRecoilState(mapCategoryValue);
  const [search, setSearch] = useRecoilState(mapSearchValue);
  const [foodSearch, setFoodSearch] = useRecoilState(mapFoodSearchValue);
  const [mapModal, setMapModal] = useRecoilState(mapModalStatus);
  const condition =
    popup?.address.includes(search) || popup?.title.includes(search);

  // 카드를 누르면 해당 좌표로 지도가 이동되는 함수
  // popup 카테고리 일 때
  const popupCenterChangeHandler = () => {
    setMyLocation({ Ma: popup.lat, La: popup.lon });
    setMapModal(true);
    searchAddrFromCoords(
      new kakao.maps.LatLng(popup.lat, popup.lon),
      displayCenterInfo,
    );
    categoryChangeHandler('음식점', foodSearch);
  };

  const geocoder = new kakao.maps.services.Geocoder();
  const searchAddrFromCoords = (coords: kakao.maps.LatLng, callback: any) => {
    // 좌표로 행정동 주소 정보를 요청합니다
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  };

  // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
  const displayCenterInfo = (result: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      setFoodSearch(result[0].region_3depth_name);
    }
  };

  const categoryChangeHandler = async (
    category: string | null,
    foodSearch: string,
  ) => {
    setCategory('음식점');
    console.log(category, 'co');
    console.log(foodSearch, 'useRecoilState');
    // 1. 클릭하면 setSearch가 되기 전에 setMarkerHandler에서 search값이 들어갔다. 인자로 넘겨주니 해결되었다.
    // 2. 팝업스토어 카테고리 클릭하면 위치 NaN됨 if문으로 팝업스토어 일때는 search 값으로만 검색되게 하였다.
    if (category === '팝업스토어') setMarkerHandler(search, category);
    else setMarkerHandler(`${foodSearch} ${category}`, category);
  };

  return (
    <>
      {condition && (
        <Wrap onClick={popupCenterChangeHandler}>
          <div>
            <DetailWrap>
              <DetailTitle>{popup?.title}</DetailTitle>
              <DetailDescription>{popup?.item}</DetailDescription>
            </DetailWrap>
            <DetailAddressWrap>
              <DetailAddress>{popup?.address}</DetailAddress>
            </DetailAddressWrap>
          </div>
          <div>
            <DetailImg src={popup?.imgURL} alt="사진" />
          </div>
        </Wrap>
      )}
    </>
  );
};

export default MapDataCard;

const Wrap = styled.div`
  height: 120px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DetailWrap = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const DetailTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const DetailDescription = styled.span`
  opacity: 0.5;
`;

const DetailAddressWrap = styled.div`
  width: 300px;
  margin-top: 30px;
`;
const DetailAddress = styled.span``;

const DetailImg = styled.img`
  width: 100px;
  height: 100px;
`;
