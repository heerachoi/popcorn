import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { mapCategoryValue, mapSearchValue, popupList } from '../../../atoms';

const MapDataCard = ({ popup, food, setMyLocation }: any) => {
  const category = useRecoilValue(mapCategoryValue);
  const search = useRecoilValue(mapSearchValue);
  const condition =
    popup?.address.includes(search) || popup?.title.includes(search) || food;

  // 카드를 누르면 해당 좌표로 지도가 이동되는 함수
  // popup 카테고리 일 때
  const popupCenterChangeHandler = () => {
    console.log(popup.lat, popup.lon, 'id');
    setMyLocation({ Ma: popup.lat, La: popup.lon });
  };

  // 음식점, 카페 카테고리 일 때
  const foodCenterChangeHandler = () => {
    setMyLocation({ Ma: food.position.lat, La: food.position.lng });
  };
  return (
    <>
      {condition && (
        <Wrap
          onClick={
            category === ' '
              ? popupCenterChangeHandler
              : foodCenterChangeHandler
          }
        >
          <div>
            <DetailWrap>
              <DetailTitle>
                {category === ' ' ? popup?.title : food?.title}
              </DetailTitle>
              <DetailDescription>
                {' '}
                {category === ' ' ? popup?.item : food?.phone}
              </DetailDescription>
            </DetailWrap>
            <DetailAddressWrap>
              <DetailAddress>
                {category === ' ' ? popup?.address : food?.address}
              </DetailAddress>
            </DetailAddressWrap>
          </div>
          <div>
            <DetailImg
              src={category === ' ' ? popup?.imgURL : food?.img}
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

// (popup?.si === search ||
// popup?.gu === search ||
// popup?.dong === search)
