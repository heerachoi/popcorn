import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { mapFoodData } from '../../../atoms';
import FoodCard from './FoodCard';

const FoodList = ({ setMyLocation, setInfo }: any) => {
  const foodData = useRecoilValue(mapFoodData);

  return (
    <Wrap>
      {foodData?.map((food: any) => (
        <FoodCard
          key={food.id}
          food={food}
          setMyLocation={setMyLocation}
          setInfo={setInfo}
        />
      ))}
    </Wrap>
  );
};

export default FoodList;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
`;
