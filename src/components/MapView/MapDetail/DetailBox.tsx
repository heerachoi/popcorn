import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  mapCategoryValue,
  mapDetailBoxPopup,
  mapFoodSearchValue,
} from '../../../atoms';
import FoodList from './FoodList';

interface Props {
  setMarkerHandler: (search: any, category: any) => void;
  setMyLocation: any;
}

const DetailBox = ({ setMarkerHandler, setMyLocation }: Props) => {
  const setcategory = useSetRecoilState(mapCategoryValue);
  const foodSearch = useRecoilValue(mapFoodSearchValue);
  const [popup, setPopup] = useRecoilState(mapDetailBoxPopup);

  const categoryChangeHandler = async (category: string) => {
    setcategory(category);
    setMarkerHandler(`${foodSearch} ${category}`, category);
  };

  return (
    <DetailBoxWrap>
      <DetailInfoWrap>
        <DetailImg src={popup.imgURL[0]} />
        <DetailTitle>{popup.title}</DetailTitle>
        <DetailInfoBox>
          <DetailTextBox>
            <DetailInfoTitle>운영기간</DetailInfoTitle>
            <DetailInfoTitle>영업시간</DetailInfoTitle>
            <DetailInfoTitle>주소</DetailInfoTitle>
          </DetailTextBox>
          <DetailTextBox>
            <DetailInfoText>
              {popup.open} - {popup.close}
            </DetailInfoText>
            <DetailInfoText>
              {popup.openingTime[0]} - {popup.closeTime[0]}
            </DetailInfoText>
            <DetailInfoText>{popup.address}</DetailInfoText>
          </DetailTextBox>
        </DetailInfoBox>
      </DetailInfoWrap>
      <CategoryBtn
        type="submit"
        onClick={() => categoryChangeHandler('음식점')}
      >
        음식점
      </CategoryBtn>
      <CategoryBtn type="submit" onClick={() => categoryChangeHandler('카페')}>
        카페
      </CategoryBtn>
      <FoodList setMyLocation={setMyLocation} />
    </DetailBoxWrap>
  );
};

export default DetailBox;

const DetailBoxWrap = styled.div`
  width: 450px;
`;

const CategoryBtn = styled.button`
  border: none;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

const DetailImg = styled.img`
  width: 100%;
  height: 300px;
`;

const DetailInfoWrap = styled.div`
  text-align: center;
`;

const DetailTitle = styled.span`
  color: #323232;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
`;

const DetailInfoBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DetailTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DetailInfoTitle = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #00c113;
`;

const DetailInfoText = styled(DetailInfoTitle)`
  color: #323232;
`;
