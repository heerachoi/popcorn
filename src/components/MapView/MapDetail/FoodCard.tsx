import { Link } from 'react-router-dom';
import { FoodData, LocationType } from '../../../types/map';
import * as S from './style';

interface Props {
  food: FoodData;
  setMyLocation: React.Dispatch<React.SetStateAction<LocationType>>;
  setInfo: React.Dispatch<React.SetStateAction<FoodData | undefined>>;
  info?: FoodData;
}

const FoodCard = ({ food, setMyLocation, setInfo, info }: Props) => {
  const foodCenterChangeHandler = () => {
    setMyLocation({ Ma: food.position.lat, La: food.position.lng });
    setInfo(food);
  };

  return (
    <S.Wrap info={info} food={food} onClick={foodCenterChangeHandler}>
      <S.DetailImage
        src={
          food.imgURL
            ? food?.imgURL
            : 'https://firebasestorage.googleapis.com/v0/b/popcorn1-4b47e.appspot.com/o/NotFoundImg.png?alt=media&token=af4548f5-25fc-4b85-9d78-82b16c932a08'
        }
        alt="사진"
      />
      <S.DetailWrap>
        <S.DetailTitleSpan>{food?.title}</S.DetailTitleSpan>
        <S.DetailDescriptionWrap>
          <S.DetailDescription>{food?.address}</S.DetailDescription>
          <S.DetailDescription
            to={food.placeURL}
            style={{ width: 70, textDecoration: 'none' }}
            as={Link}
            target="_blank"
          >
            자세히 보기
          </S.DetailDescription>
        </S.DetailDescriptionWrap>
      </S.DetailWrap>
    </S.Wrap>
  );
};

export default FoodCard;
