import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { mapCategoryValue, mapFoodData, mapSearchValue } from '../../../atoms';

const MapDataCard = ({ popup, food }: any) => {
  const category = useRecoilValue(mapCategoryValue);
  const search = useRecoilValue(mapSearchValue);
  // console.log(category, '데이터카드 카테고리입니다.');
  console.log(food, 'food입니다');
  console.log(popup?.si, 'popup.si');
  console.log(popup?.gu, 'popup?.gu');
  console.log(popup?.dong, 'popup?.dong');

  const condition =
    popup?.address.includes(search) || popup?.title.includes(search) || food;

  return (
    <>
      {condition && (
        <Wrap>
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
