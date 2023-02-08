import { Link } from 'react-router-dom';
import data from '../../../db.json';
import {
  StyleListWrap,
  RecentListBtn,
  PopupTitle,
  PopupDate,
  PopupAddress,
} from './style';

const HomePageList: any = () => {
  const openDate = '2023.01.09';
  const popupList = data.Store.filter((list) => list.open === '2023.01.09');
  console.log(popupList);

  return (
    <>
      <RecentListBtn>최근 오픈했어요</RecentListBtn>
      {popupList.map((popup) => {
        return (
          <>
            <StyleListWrap key={popup.id}>
              <Link to="/"></Link>
              <PopupTitle>{popup.title} </PopupTitle>
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
