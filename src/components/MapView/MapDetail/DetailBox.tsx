import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './style';
import {
  mapCategoryValue,
  mapDetailBoxPopup,
  mapFoodSearchValue,
} from '../../../atoms';
import FoodList from './FoodList';

interface Props {
  setMarkerHandler: (search: any, category: any) => void;
  setMyLocation: any;
  setInfo: any;
}

const DetailBox = ({ setMarkerHandler, setMyLocation, setInfo }: Props) => {
  const navigate = useNavigate();

  const setcategory = useSetRecoilState(mapCategoryValue);
  const foodSearch = useRecoilValue(mapFoodSearchValue);
  const popup = useRecoilValue(mapDetailBoxPopup);

  const categoryChangeHandler = async (category: string) => {
    setcategory(category);
    setMarkerHandler(`${foodSearch} ${category}`, category);
  };

  return (
    <S.DetailBoxWrap>
      <S.DetailInfoWrap>
        <S.DetailImg src={popup.imgURL[0]} />
        <S.DetailTitle>{popup.title}</S.DetailTitle>
        <S.DetailInfoBox>
          <S.DetailTextBox>
            <S.DetailInfoTitle>운영기간</S.DetailInfoTitle>
            <S.DetailInfoTitle>영업시간</S.DetailInfoTitle>
            <S.DetailInfoTitle>주소</S.DetailInfoTitle>
          </S.DetailTextBox>
          <S.DetailTextBox>
            <S.DetailInfoText>
              {popup.open} - {popup.close}
            </S.DetailInfoText>
            <S.DetailInfoText>
              {popup.openingTime[0]} - {popup.closeTime[0]}
            </S.DetailInfoText>
            <S.DetailInfoText>{popup.address}</S.DetailInfoText>
          </S.DetailTextBox>
        </S.DetailInfoBox>
        <div onClick={() => navigate(`/detail/${popup.id}`, { state: popup })}>
          디테일 페이지로 이동
        </div>
      </S.DetailInfoWrap>
      <S.CategoryBtn
        type="submit"
        onClick={() => categoryChangeHandler('음식점')}
      >
        음식점
      </S.CategoryBtn>
      <S.CategoryBtn
        type="submit"
        onClick={() => categoryChangeHandler('카페')}
      >
        카페
      </S.CategoryBtn>
      <FoodList setMyLocation={setMyLocation} setInfo={setInfo} />
    </S.DetailBoxWrap>
  );
};

export default DetailBox;
