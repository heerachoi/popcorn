import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { mapFoodData } from '../../../atoms';
import FoodCard from './FoodCard';

const FoodList = ({ setMyLocation }: any) => {
  const foodData = useRecoilValue(mapFoodData);

  return (
    <Wrap>
      {foodData?.map((food: any) => (
        <FoodCard key={food.id} food={food} setMyLocation={setMyLocation} />
      ))}
    </Wrap>
  );
};

export default FoodList;

const Wrap = styled.div`
  width: 100%;
  height: 500px;
  overflow: scroll;
`;
