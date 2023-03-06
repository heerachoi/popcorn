import * as S from './style';
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
    <S.GrapfWrap>
      <S.GrapTitleBackground>
        <S.GrapTitleText>방문자 통계</S.GrapTitleText>
      </S.GrapTitleBackground>
      <S.GrapfBox>
        <S.ApexChartContainer
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
        <S.ApexChartContainer
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
      </S.GrapfBox>
    </S.GrapfWrap>
  );
};

export default DetailPageViews;
