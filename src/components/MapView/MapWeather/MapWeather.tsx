import styled from 'styled-components';
import { useQuery } from 'react-query';
import {
  getDetailAirPollutionData,
  getDetailWeatherData,
} from '../../../services/api';
import { useEffect } from 'react';

const API_KEY = process.env.REACT_APP_WEAHER_KEY;

interface airPollutionChangeTheText {
  [key: string]: string | number;
}
interface Props {
  myLocation: any;
}

const MapWeather = ({ myLocation }: Props) => {
  const queryProps = {
    lat: myLocation.Ma,
    lon: myLocation.La,
    api: API_KEY,
  };

  // 날씨 데이터 가져오는 함수

  const { data: weatherData, refetch: weatherRefetch } = useQuery(
    'weather',
    () => getDetailWeatherData(queryProps),
  );

  // 미세먼지 데이터 가져오는 함수
  const { data: airPollutionData, refetch: airPollutionRefetch } = useQuery(
    'airpollution',
    () => getDetailAirPollutionData(queryProps),
  );

  useEffect(() => {
    weatherRefetch();
    airPollutionRefetch();
  }, [myLocation]);

  // 미세먼지가 숫자로 표시되어 문자로 변환하기 위한 상수
  const airPollutionChangeTheText: airPollutionChangeTheText = {
    1: '매우 좋음',
    2: '좋음',
    3: '보통',
    4: '나쁨',
    5: '매우 나쁨',
  };

  return (
    <Wrap>
      <WeatherWrap>
        <WeatherText>{weatherData?.weather[0]?.main} |</WeatherText>
        <WeatherText>{weatherData?.main?.temp}&deg;C |</WeatherText>
        <WeatherText>
          미세먼지{' '}
          {airPollutionChangeTheText[airPollutionData?.list[0]?.main?.aqi]}
        </WeatherText>
      </WeatherWrap>
    </Wrap>
  );
};

export default MapWeather;

const Wrap = styled.div`
  margin-top: 20px;
`;
const WeatherWrap = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-end;
`;

const WeatherText = styled.span`
  margin-right: 5px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
