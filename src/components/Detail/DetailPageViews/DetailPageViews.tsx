interface Props {
  detailData: any;
}

const DetailPageViews = ({ detailData }: Props) => {
  console.log('detailData', detailData);

  const teenagerPercent = (detailData.view[10] / detailData.view['all']) * 100;
  const twentyPercent = (detailData.view[20] / detailData.view['all']) * 100;
  const thirtyPercent = (detailData.view[30] / detailData.view['all']) * 100;
  const fortyPercent = (detailData.view['40+'] / detailData.view['all']) * 100;
  const unknownAgePercent =
    (detailData.view['연령모름'] / detailData.view['all']) * 100;
  const menPercent = (detailData.view['men'] / detailData.view['all']) * 100;
  const womenPercent =
    (detailData.view['women'] / detailData.view['all']) * 100;
  const unknownGenderPercent =
    (detailData.view['성별모름'] / detailData.view['all']) * 100;

  return (
    <div>
      <div>전체 조회수 {detailData.view['all']}</div>
      <div>10 {teenagerPercent}%</div>
      <div>20 {twentyPercent}%</div>
      <div>30 {thirtyPercent}%</div>
      <div>40+ {fortyPercent}%</div>
      <div>연령모름 {unknownAgePercent}%</div>
      <div>남자 {menPercent}%</div>
      <div>여자 {womenPercent}%</div>
      <div>성별모름 {unknownGenderPercent}%</div>
    </div>
  );
};

export default DetailPageViews;
