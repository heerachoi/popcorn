import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getDetailData } from '../../api';

const StoreDetailInfo = () => {
  const { data } = useQuery('detailData', getDetailData);
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default StoreDetailInfo;
