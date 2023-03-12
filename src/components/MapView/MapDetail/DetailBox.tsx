// library
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  mapCategoryValue,
  mapDetailBoxPopup,
  mapFoodSearchValue,
  mapLoading,
} from '../../../atoms';
// component
import FoodList from './FoodList';
// types
import { FoodData, LocationType } from '../../../types/map';
// style
import * as S from './style';
import Critical from '../../../assets/Img/Critical.svg';
import LoadingAnimation from '../../GlobalComponents/LoadingAnimation';

interface Props {
  setMarkerHandler: (search: string, category: string) => void;
  setMyLocation: React.Dispatch<React.SetStateAction<LocationType>>;
  setInfo: React.Dispatch<React.SetStateAction<FoodData | undefined>>;
  info?: FoodData;
}

const DetailBox = ({
  setMarkerHandler,
  setMyLocation,
  setInfo,
  info,
}: Props) => {
  const navigate = useNavigate();

  const [category, setCategory] = useRecoilState(mapCategoryValue);
  const foodSearch = useRecoilValue(mapFoodSearchValue);
  const popup = useRecoilValue(mapDetailBoxPopup);
  const [loading, setLoading] = useRecoilState(mapLoading);

  const categoryChangeHandler = async (category: string) => {
    setCategory(category);
    setLoading(true);
    setMarkerHandler(`${foodSearch} ${category}`, category);
  };

  return (
    <S.DetailBoxWrap>
      <S.DetailInfoWrap>
        <S.DetailImg src={popup.imgURL[0]} />
        <S.DetailTitleWrap>
          <S.DetailTitle>{popup.title}</S.DetailTitle>
        </S.DetailTitleWrap>
        <S.DetailInfoBox>
          <S.DetailTextBox>
            <S.DetailInfoTitle>운영기간</S.DetailInfoTitle>
            <S.DetailInfoTitle>영업시간</S.DetailInfoTitle>
            <S.DetailInfoTitle>주소</S.DetailInfoTitle>
          </S.DetailTextBox>
          <S.DetailContentBox>
            <S.DetailInfoText>
              {popup.open} - {popup.close}
            </S.DetailInfoText>
            <S.DetailInfoText>
              {popup.openingTime[1]} - {popup.closeTime[1]}
            </S.DetailInfoText>
            <S.DetailInfoText>{popup.address}</S.DetailInfoText>
          </S.DetailContentBox>
        </S.DetailInfoBox>
        <S.NavigationBox>
          <S.NavigationBtn
            onClick={() => navigate(`/detail/${popup.id}`, { state: popup })}
          >
            디테일 페이지로 이동
          </S.NavigationBtn>
          <S.BorderBottomLine />
        </S.NavigationBox>
      </S.DetailInfoWrap>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <S.CategoryWrap>
            <S.CategoryImg src={Critical} />
            <S.CategoryTitle>주변 키워드</S.CategoryTitle>
            <S.CategoryBtnBox>
              <S.CategoryFoodBtn
                category={category}
                type="submit"
                onClick={() => categoryChangeHandler('음식점')}
              >
                음식점
              </S.CategoryFoodBtn>
              <S.CategoryCafeBtn
                category={category}
                type="submit"
                onClick={() => categoryChangeHandler('카페')}
              >
                카페
              </S.CategoryCafeBtn>
            </S.CategoryBtnBox>
          </S.CategoryWrap>
          <FoodList
            setMyLocation={setMyLocation}
            setInfo={setInfo}
            info={info}
          />
        </>
      )}
    </S.DetailBoxWrap>
  );
};

export default DetailBox;
