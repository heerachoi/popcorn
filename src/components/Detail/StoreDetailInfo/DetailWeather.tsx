import { useQuery } from 'react-query';
// import { useLocation } from 'react-router-dom';
// import {
//   getDetailAirPollutionData,
//   getDetailWeatherData,
// } from '../../../services/api';

// const API_KEY = '45fabc77306799b105d9b9f9d05ad05a';

// interface airPollutionChangeTheText {
//   [key: string]: string | number;
// }

const DetailWeather = () => {
  //   const { state: detailData } = useLocation();
  //   const queryProps = {
  //     lat: detailData.lat,
  //     lon: detailData.lon,
  //     api: API_KEY,
  //   };

  //   // 날씨 데이터 가져오는 함수
  //   const { data: weatherData } = useQuery('weather', () =>
  //     getDetailWeatherData(queryProps),
  //   );

  //   // 미세먼지 데이터 가져오는 함수
  //   const { data: airPollutionData } = useQuery('airpollution', () =>
  //     getDetailAirPollutionData(queryProps),
  //   );

  //   // 미세먼지가 숫자로 표시되어 문자로 변환하기 위한 상수
  //   const airPollutionChangeTheText: airPollutionChangeTheText = {
  //     1: '매우 좋음',
  //     2: '좋음',
  //     3: '보통',
  //     4: '나쁨',
  //     5: '매우 나쁨',
  //   };

  return (
    <div>
      {/* <h3>날씨 : {weatherData?.weather[0].main}</h3>
      <h3>온도 : {weatherData?.main.temp}도</h3>
      <h3>
        미세먼지 :{' '}
        {airPollutionChangeTheText[airPollutionData?.list[0].main.aqi]}
      </h3> */}
    </div>
  );
};
export default DetailWeather;
