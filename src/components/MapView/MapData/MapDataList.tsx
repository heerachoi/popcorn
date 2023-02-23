import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  mapCategoryValue,
  mapFoodData,
  mapSearchValue,
  popupList,
} from '../../../atoms';
import MapDataCard from './MapDataCard';
import NotFound from './NotFound';

const MapDataList = ({ popupData, condition, setMyLocation }: any) => {
  const category = useRecoilValue(mapCategoryValue);
  const foodData = useRecoilValue(mapFoodData);
  const search = useRecoilValue(mapSearchValue);

  const [popuplist, setPopupList] = useRecoilState(popupList);
  const filter = popupData.filter(
    (popup: any) =>
      popup?.address.includes(search) || popup?.title.includes(search),
  );

  useEffect(() => {
    setPopupList(filter);
  }, [search]);

  // 검색할 때 팝업리스트가 없으면 return 해서 지도가 옮겨지지 않게 하고 검색결과가 없다고 알려준다.

  return (
    <Wrap>
      {popuplist.length === 0 ? (
        <NotFound />
      ) : (
        category === ' ' &&
        popuplist?.map((popup: any) => (
          <MapDataCard
            key={popup.id}
            popup={popup}
            setMyLocation={setMyLocation}
          />
        ))
      )}
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
