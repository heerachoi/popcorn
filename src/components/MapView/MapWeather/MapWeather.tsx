import styled from 'styled-components';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useLocation } from 'react-router-dom';
import {
  getDetailAirPollutionData,
  getDetailWeatherData,
} from '../../../services/api';
import { useEffect, useState } from 'react';

const API_KEY = '45fabc77306799b105d9b9f9d05ad05a';

interface airPollutionChangeTheText {
  [key: string]: string | number;
}
interface Props {
  myLocation: any;
}

const MapWeather = ({ myLocation }: Props) => {
  const queryProps = {
    lat: myLocation?.Ma || 0,
    lon: myLocation?.La || 0,
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
        <WeatherText>날씨 : {weatherData?.weather[0]?.main}</WeatherText>
        <WeatherText>기온 : {weatherData?.main?.temp}도</WeatherText>
        <WeatherText>
          미세먼지 :{' '}
          {airPollutionChangeTheText[airPollutionData?.list[0]?.main?.aqi]}
        </WeatherText>
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
