import { Link } from 'react-router-dom';
import * as S from './style';

const FoodCard = ({ food, setMyLocation, setInfo }: any) => {
  const foodCenterChangeHandler = () => {
    setMyLocation({ Ma: food.position.lat, La: food.position.lng });
    setInfo(food);
  };

  return (
    <S.Wrap onClick={foodCenterChangeHandler}>
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
          <Link to={food.placeURL} style={{ textDecoration: 'none' }}>
            <S.DetailDescription>자세히 보기</S.DetailDescription>
          </Link>
        </S.DetailDescriptionWrap>
      </S.DetailWrap>
    </S.Wrap>
  );
};

export default FoodCard;
