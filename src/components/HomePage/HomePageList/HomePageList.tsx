import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getPopupData } from '../../../services/api';
import { Store } from '../../../types/data/storeInterface';
import {
  StyleListWrap,
  RecentList,
  PopupTitle,
  PopupDate,
  PopupAddress,
  ClosingSoonList,
} from './style';

const HomePageList: any = () => {
  const navigate = useNavigate();
  const { data } = useQuery('popup', getPopupData);

  // yyyymmdd 포맷으로 오늘 날짜를 받아오는 함수
  const currentDate = new Date();
  const year = String(currentDate.getFullYear());
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const today = parseInt(year + month + day);
  const popupList = data.Store.filter((list:Store) => {
    return (
      parseInt(list.open.split('.').join('')) >= today - 5 &&
      today >= parseInt(list.open.split('.').join(''))
    );
  });
  return (
    <>
      <RecentList>최근 오픈했어요</RecentList>
      {popupList.map((popup:Store) => {
        return (
          <>
            <StyleListWrap
              key={popup.id}
              onClick={() => navigate(`/detail/${popup.id}`, { state: popup })}
            >
              <PopupTitle>{popup.title}</PopupTitle>
              <PopupDate>
                {popup.open} ~ {popup.close}
              </PopupDate>
              <PopupAddress>{popup.address}</PopupAddress>
            </StyleListWrap>
          </>
        );
      })}
      <ClosingSoonList>곧 마감해요</ClosingSoonList>
    </>
  );
};

export default HomePageList;
