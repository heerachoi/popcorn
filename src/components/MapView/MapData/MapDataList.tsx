import styled from 'styled-components';
import MapDataCard from './MapDataCard';

const MapDataList = ({ popupData }: any) => {
  return (
    <Wrap>
      <MapDataCard />
    </Wrap>
  );
};

export default MapDataList;

const Wrap = styled.div`
  width: 500px;
  height: 500px;
  overflow: scroll;
`;
