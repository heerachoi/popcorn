import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { mapFoodData } from '../../../atoms';
import FoodCard from './FoodCard';

const FoodList = ({ setMyLocation }: any) => {
  const foodData = useRecoilValue(mapFoodData);

  console.log(foodData, 'foodData');
  return (
    <Wrap>
      {foodData?.map((food: any) => (
        <FoodCard food={food} setMyLocation={setMyLocation} />
      ))}
    </Wrap>
  );
};

export default FoodList;

const Wrap = styled.div`
  width: 500px;
  height: 500px;
  overflow: scroll;
`;
