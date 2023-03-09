import * as S from './style'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
// import data from '../../../data/popupStore.json';
import { JSON_API } from '../../../services/api';
import { getPopupData } from '../../../services/api';
import { Store } from '../../../types/data/storeInterface';


const HomePageList: any = () => {
  const navigate = useNavigate();
  const { data } = useQuery('popup', getPopupData);
  // yyyymmdd 포맷으로 오늘 날짜를 받아오는 함수
  const currentDate = new Date();
  const year = String(currentDate.getFullYear());
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const today = parseInt(year + month + day);
  const popupList = data.filter((list:Store) => {
    return (
      parseInt(list.open.split('.').join('')) >= today - 5 &&
      today >= parseInt(list.open.split('.').join(''))
    );
  });



  return (
    <>
      
    </>
  );
};

export default HomePageList;
