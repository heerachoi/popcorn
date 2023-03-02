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

const MapDataList = ({
  popupData,
  setMyLocation,
  setMarkerHandler,
  setPopupInfo,
}: any) => {
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

  return (
    <Wrap>
      {popuplist.length === 0 ? (
        <NotFound />
      ) : (
        popupData?.map((popup: any) => (
          <MapDataCard
            key={popup.id}
            popup={popup}
            setMyLocation={setMyLocation}
            setMarkerHandler={setMarkerHandler}
            setPopupInfo={setPopupInfo}
          />
        ))
      )}
    </Wrap>
  );
};

export default MapDataList;

const Wrap = styled.div`
  width: 450px;
  height: 87%;
  overflow: scroll;
  overflow-x: hidden;
`;
