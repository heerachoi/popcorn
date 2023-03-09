// library
import { useRecoilValue } from 'recoil';
import { mapFoodData } from '../../../atoms';
// types
import { FoodData, LocationType } from '../../../types/map';
// component
import FoodCard from './FoodCard';
// style
import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

interface Props {
  setMyLocation: React.Dispatch<React.SetStateAction<LocationType>>;
  setInfo: React.Dispatch<React.SetStateAction<FoodData | undefined>>;
  info?: FoodData;
}

const FoodList = ({ setMyLocation, setInfo, info }: Props) => {
  const foodData = useRecoilValue(mapFoodData);

  return (
    <Wrap>
      {foodData?.map((food: any) => (
        <FoodCard
          key={food.id}
          food={food}
          setMyLocation={setMyLocation}
          setInfo={setInfo}
          info={info}
        />
      ))}
    </Wrap>
  );
};

export default FoodList;

const Wrap = styled.div`
  width: 88%;
  margin-right: 12px;
  padding: 0 12px 0 24px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    /* 스크롤이 움직이는 영역  */
    background: none;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    /*  스크롤  */
    background-color: ${COLORS.gray5};
    border-radius: 30px;
  }
`;
