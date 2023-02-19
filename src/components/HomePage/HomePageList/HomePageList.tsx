import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../../data/popupStore.json';
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

  // yyyymmdd 포맷으로 오늘 날짜를 받아오는 함수
  const currentDate = new Date();
  const year = String(currentDate.getFullYear());
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const today = parseInt(year + month + day);

  const popupList = data.Store.filter((list) => {
    return (
      parseInt(list.open.split('.').join('')) >= today - 5 &&
      today >= parseInt(list.open.split('.').join(''))
    );
  }, console.log(data.Store));

  // popupList = 전체 데이터
  // 오늘 오픈한 것만 필터링 여기서 해야함
  const closingSoonList = data.Store.filter((list) => {
    return (
      // 곧 마감하는 조건 입력하기
      parseInt(list.close.split('.').join('')) >= today &&
      today + 5 >= parseInt(list.close.split('.').join(''))
    );
  }, console.log(data.Store));

  return (
    <>
      <RecentList>최근 오픈했어요</RecentList>

      {popupList.map((popup) => {
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

      {closingSoonList.map((popup) => {
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
    </>
  );
};

export default HomePageList;
