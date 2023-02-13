import styled from 'styled-components';
import Map from './Map/Map';
import MapCategory from './MapCategory/MapCategory';
import MapDataList from './MapData/MapDataList';
import MapSearch from './MapSearch/MapSearch';
import MapWeather from './MapWeather/MapWeather';

const MapView = () => {
  return (
    <Wrap>
      <div>
        <MapCategory />
        <MapSearch />
        <MapDataList />
      </div>
      <div>
        <MapWeather />
        <Map />
      </div>
    </Wrap>
  );
};

export default MapView;

const Wrap = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;
