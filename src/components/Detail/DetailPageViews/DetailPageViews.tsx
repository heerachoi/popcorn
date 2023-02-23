import ApexChart from 'react-apexcharts';
import styled from 'styled-components';

interface Props {
  detailData: any;
}

const DetailPageViews = ({ detailData }: Props) => {
  // 각 나이, 성별
  const teenagerPercent = detailData.view[10];
  const twentyPercent = detailData.view[20];
  const thirtyPercent = detailData.view[30];
  const fortyPercent = detailData.view['40+'];
  const unknownAgePercent = detailData.view['연령모름'];
  const menPercent = detailData.view['men'];
  const womenPercent = detailData.view['women'];
  const unknownGenderPercent = detailData.view['성별모름'];

  return (
    // 그래프 라이브러리
    <GrapfWrap>
      <GrapfBox>
        <ApexChart
          // 그래프 크기
          style={{
            width: 400,
            height: 400,
          }}
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
        <ApexChart
          style={{
            width: 400,
            height: 400,
          }}
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

const GrapfWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

export const GrapfBox = styled.div`
  margin: 10px 0;
  width: 1000px;
  height: 300px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;
