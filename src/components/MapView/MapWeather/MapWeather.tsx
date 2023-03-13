// library
import { useEffect } from 'react';
import { useQuery } from 'react-query';
// API
const API_KEY = process.env.REACT_APP_WEAHER_KEY;
// data
import {
  getDetailAirPollutionData,
  getDetailWeatherData,
} from '../../../services/api';
// types
import {
  LocationType,
  AirPollutionChangeTheText,
  weatherKoText,
} from '../../../types/map';
// style
import * as S from './style';
interface Props {
  myLocation: LocationType;
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

  const weatherKo: weatherKoText = {
    Clouds: '흐림',
    Clear: '맑음',
    Atmosphere: '바람',
    Snow: '눈',
    Rain: '비',
    Drizzle: '이슬비',
    Thunderstorm: '뇌우',    
  };

  // 미세먼지가 숫자로 표시되어 문자로 변환하기 위한 상수
  const airPollutionChangeTheText: AirPollutionChangeTheText = {
    1: '매우 좋음',
    2: '좋음',
    3: '보통',
    4: '나쁨',
    5: '매우 나쁨',
  };

  return (
    <S.Wrap>
      <S.WeatherWrap>
        <S.WeatherText>
          {weatherKo[weatherData?.weather[0]?.main]}
          <S.WeatherSpan>|</S.WeatherSpan>
        </S.WeatherText>
        <S.WeatherText>
          {weatherData?.main?.temp}&deg;C <S.WeatherSpan>|</S.WeatherSpan>
        </S.WeatherText>
        <S.WeatherText>
          미세먼지
          {airPollutionChangeTheText[airPollutionData?.list[0]?.main?.aqi]}
        </S.WeatherText>
      </S.WeatherWrap>
    </S.Wrap>
  );
};

export default MapWeather;
