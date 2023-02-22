import ApexChart from 'react-apexcharts';
import styled from 'styled-components';

interface Props {
  detailData: any;
}

const DetailPageViews = ({ detailData }: Props) => {
  const teenagerPercent = detailData?.view[10];
  const twentyPercent = detailData?.view[20];
  const thirtyPercent = detailData?.view[30];
  const fortyPercent = detailData?.view['40+'];
  const unknownAgePercent = detailData?.view['연령모름'];
  const menPercent = detailData?.view['men'];
  const womenPercent = detailData?.view['women'];
  const unknownGenderPercent = detailData?.view['성별모름'];

  return (
    <GrapfWrap>
      <GrapfBox>
        <ApexChart
          style={{
            width: 400,
            height: 400,
          }}
          type="pie"
          series={[
            teenagerPercent,
            twentyPercent,
            thirtyPercent,
            fortyPercent,
            unknownAgePercent,
          ]}
          options={{
            legend: {
              position: 'bottom',
            },
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
            title: { text: '연령대', align: 'center' },
            labels: ['남자', '여자', '성별모름'],
          }}
        />
      </GrapfBox>
    </GrapfWrap>
  );
};

export default DetailPageViews;
// const teenagerPercent = (detailData.view[10] / detailData.view['all']) * 100;
// const twentyPercent = (detailData.view[20] / detailData.view['all']) * 100;
// const thirtyPercent = (detailData.view[30] / detailData.view['all']) * 100;
// const fortyPercent = (detailData.view['40+'] / detailData.view['all']) * 100;
// const unknownAgePercent =
//   (detailData.view['연령모름'] / detailData.view['all']) * 100;
// const menPercent = (detailData.view['men'] / detailData.view['all']) * 100;
// const womenPercent =
//   (detailData.view['women'] / detailData.view['all']) * 100;
// const unknownGenderPercent =
//   (detailData.view['성별모름'] / detailData.view['all']) * 100;

const GrapfWrap = styled.div`
  display: flex;
  justify-content: center;
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
