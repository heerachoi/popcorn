import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  mapCategoryValue,
  mapFoodData,
  mapSearchValue,
  popupList,
} from '../../../atoms';
// import { mapCategorySelector } from '../../../atoms';
import MapDataCard from './MapDataCard';

const MapDataList = ({ popupData, condition, setMyLocation }: any) => {
  // const recoilPopupData = useRecoilValue(mapCategorySelector);
  // setRecoilPopupData(popupData);
  // console.log('recoilPopupData', recoilPopupData);
  const category = useRecoilValue(mapCategoryValue);
  const foodData = useRecoilValue(mapFoodData);
  const search = useRecoilValue(mapSearchValue);
  console.log('popupData', popupData);
  // console.log('search', search);
  // console.log('category', category);

  const [popuplist, setPopupList] = useRecoilState(popupList);
  const filter = popupData.filter(
    (popup: any) =>
      popup?.address.includes(search) || popup?.title.includes(search),
  );
  console.log('filter', filter);

  useEffect(() => {
    setPopupList(filter);
  }, [search]);

  console.log(popuplist, 'fekfjl');

  return (
    <Wrap>
      {category === ' ' &&
        popupData?.map((popup: any) => (
          <MapDataCard
            key={popup.id}
            popup={popup}
            setMyLocation={setMyLocation}
          />
        ))}
      {category !== ' ' &&
        foodData.map((food: any) => (
          <MapDataCard
            key={food.id}
            food={food}
            setMyLocation={setMyLocation}
          />
        ))}
    </Wrap>
  );
};

export default MapDataList;

const Wrap = styled.div`
  width: 500px;
  height: 500px;
  overflow: scroll;
`;
