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
import NotFound from '../../GlobalComponents/NotFound';
import COLORS from '../../../assets/CSS/colors';
import { Store } from '../../../types/data/storeInterface';
import { LocationType } from '../../../types/map';

interface Props {
  popupData: Store[];
  setMyLocation: React.Dispatch<React.SetStateAction<LocationType>>;
  setMarkerHandler: (search: string, category: string) => void;
  setPopupInfo: React.Dispatch<React.SetStateAction<Store | undefined>>;
  popupInfo?: Store;
}

const MapDataList = ({
  popupData,
  setMyLocation,
  setMarkerHandler,
  setPopupInfo,
  popupInfo,
}: Props) => {
  const search = useRecoilValue(mapSearchValue);
  const [popuplist, setPopupList] = useRecoilState(popupList);

  const filter = popupData.filter(
    (popup: Store) =>
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
        popupData?.map((popup: Store) => (
          <MapDataCard
            key={popup.id}
            popup={popup}
            setMyLocation={setMyLocation}
            setMarkerHandler={setMarkerHandler}
            setPopupInfo={setPopupInfo}
            popupInfo={popupInfo}
          />
        ))
      )}
    </Wrap>
  );
};

export default MapDataList;

const Wrap = styled.div`
  width: 450px;
  height: 100%;
  margin-right: 12px;
  margin-top: 24px;
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
