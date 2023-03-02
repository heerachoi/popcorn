import ApexChart from 'react-apexcharts';
import styled from 'styled-components';
import { Store } from '../../../types/data/storeInterface';

interface Props {
  detailData: Store;
}

const DetailPageViews = ({ detailData }: Props) => {
  // 각 나이, 성별
  const teenagerPercent = detailData?.view[10];
  const twentyPercent = detailData?.view[20];
  const thirtyPercent = detailData?.view[30];
  const fortyPercent = detailData?.view['40+'];
  const unknownAgePercent = detailData?.view['연령모름'];
  const menPercent = detailData?.view['men'];
  const womenPercent = detailData?.view['women'];
  const unknownGenderPercent = detailData?.view['성별모름'];

  return (
    // 그래프 라이브러리
    <GrapfWrap>
      <GrapTitleBackground>
        <GrapTitleText>방문자 통계</GrapTitleText>
      </GrapTitleBackground>
      <GrapfBox>
        <ApexChartContainer
          // 그래프 모양, 타입
          type="pie"
          // 그래프에 나타내줄 값
          series={[
            teenagerPercent,
            twentyPercent,
            thirtyPercent,
            fortyPercent,
            unknownAgePercent,
          ]}
          // labels 도형 밑에 표시
          options={{
            legend: {
              position: 'bottom',
            },
            // 그래프 제목
            title: { text: '연령대', align: 'center' },
            labels: ['10대', '20대', '30대', '40대 이상', '연령모름'],
          }}
        />
        <ApexChartContainer
          type="pie"
          series={[menPercent, womenPercent, unknownGenderPercent]}
          options={{
            legend: {
              position: 'bottom',
            },
            title: { text: '성별', align: 'center' },
            labels: ['남자', '여자', '성별모름'],
          }}
        />
      </GrapfBox>
    </GrapfWrap>
  );
};

export default DetailPageViews;

const ApexChartContainer = styled(ApexChart)`
  width: 300px;
  height: 300px;
`

const GrapfWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const GrapfBox = styled.div`
  margin-top: 50px;
  width: 1000px;
  height: 300px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 575px) {
    margin: 110px 0;
    flex-direction: column;
  }
`;

export const GrapTitleBackground = styled.div`
  width: 145px;
  height: 18px;
  background-color: #ffeb62;
  position: absolute;
  box-sizing: border-box;
  border-radius: 12px;
  text-align: center;
`
export const GrapTitleText = styled.p`
   position: relative;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`