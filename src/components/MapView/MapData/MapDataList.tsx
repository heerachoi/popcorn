import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { mapCategoryValue, mapFoodData, mapSearchValue } from '../../../atoms';
// import { mapCategorySelector } from '../../../atoms';
import MapDataCard from './MapDataCard';

const MapDataList = ({ popupData }: any) => {
  // const recoilPopupData = useRecoilValue(mapCategorySelector);
  // setRecoilPopupData(popupData);
  // console.log('recoilPopupData', recoilPopupData);
  const category = useRecoilValue(mapCategoryValue);
  const foodData = useRecoilValue(mapFoodData);
  const search = useRecoilValue(mapSearchValue);
  // console.log('search', search);
  // console.log('category', category);
  return (
    <Wrap>
      {category === ' ' &&
        popupData?.map((popup: any) => (
          <MapDataCard key={popup.id} popup={popup} />
        ))}
      {category !== ' ' &&
        foodData.map((food: any) => <MapDataCard key={food.id} food={food} />)}
    </Wrap>
  );
};

export default MapDataList;

const Wrap = styled.div`
  width: 500px;
  height: 500px;
  overflow: scroll;
`;
