import { useNavigate } from 'react-router-dom';
import data from '../../../db.json';
import {
  StyleListWrap,
  RecentList,
  PopupTitle,
  PopupDate,
  PopupAddress,
} from './style';

const HomePageList: any = () => {
  const navigate = useNavigate();
  const openDate = '2023.01.09';
  const popupList = data.Store.filter((list) => list.open === '2023.01.09');
  console.log(popupList);

  // newDate?? 3일전 filter를 돌리는데 오늘로부터 이틀전 newdate를 가져오면 오늘날짜를 가져옴
  // map안에 if를 돌려서 ??
  // map에 return if 조건

  return (
    <>
      <RecentList>최근 오픈했어요</RecentList>
      {popupList.map((popup) => {
        return (
          <>
            <StyleListWrap key={popup.id} onClick={() => navigate('/detail')}>
              <PopupTitle>{popup.title}</PopupTitle>
              <PopupDate>
                {popup.open} ~ {popup.close}
              </PopupDate>
              <PopupAddress>{popup.address}</PopupAddress>
            </StyleListWrap>
          </>
        );
      })}
    </>
  );
};

export default HomePageList;
