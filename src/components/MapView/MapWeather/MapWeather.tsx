import styled from 'styled-components';

const MapWeather = () => {
  return (
    <Wrap>
      <WeatherWrap>
        <WeatherText>날씨 : 맑음</WeatherText>
        <WeatherText>기온 : 0도</WeatherText>
        <WeatherText>미세먼지 : 좋음</WeatherText>
      </WeatherWrap>
    </Wrap>
  );
};

export default MapWeather;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const WeatherWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;
const WeatherText = styled.span``;
