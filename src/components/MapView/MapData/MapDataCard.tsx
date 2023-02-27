import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  mapCategoryValue,
  mapFoodSearchValue,
  mapSearchValue,
} from '../../../atoms';

const MapDataCard = ({ popup, food, setMyLocation }: any) => {
  const category = useRecoilValue(mapCategoryValue);
  const [search, setSearch] = useRecoilState(mapSearchValue);
  const setFoodSearch = useSetRecoilState(mapFoodSearchValue);
  const condition =
    popup?.address.includes(search) || popup?.title.includes(search) || food;

  // 카드를 누르면 해당 좌표로 지도가 이동되는 함수
  // popup 카테고리 일 때
  const popupCenterChangeHandler = () => {
    setMyLocation({ Ma: popup.lat, La: popup.lon });
    searchAddrFromCoords(
      new kakao.maps.LatLng(popup.lat, popup.lon),
      displayCenterInfo,
    );
  };

  // 음식점, 카페 카테고리 일 때
  const foodCenterChangeHandler = () => {
    setMyLocation({ Ma: food.position.lat, La: food.position.lng });
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

  return (
    <>
      {condition && (
        <Wrap
          onClick={
            category === '팝업스토어'
              ? popupCenterChangeHandler
              : foodCenterChangeHandler
          }
        >
          <div>
            <DetailWrap>
              <DetailTitle>
                {category === '팝업스토어' ? popup?.title : food?.title}
              </DetailTitle>
              <DetailDescription>
                {' '}
                {category === '팝업스토어' ? popup?.item : food?.phone}
              </DetailDescription>
            </DetailWrap>
            <DetailAddressWrap>
              <DetailAddress>
                {category === '팝업스토어' ? popup?.address : food?.address}
              </DetailAddress>
            </DetailAddressWrap>
          </div>
          <div>
            <DetailImg
              src={category === '팝업스토어' ? popup?.imgURL : food?.img}
              alt="사진"
            />
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
