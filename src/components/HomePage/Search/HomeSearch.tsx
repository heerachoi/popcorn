// library
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// data
import { getPopupData } from '../../../services/api';
// library
import { ko } from 'date-fns/esm/locale';
// hooks
import useLocationModal from '../../../hooks/useLocationModal';
// types
import { Store } from '../../../types/data/storeInterface';
//style
import * as S from './style';

const HomeSearch = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery('popup', getPopupData);

  // 팝업 스토어 필터된 리스트
  let searchList: Store[] = [];
  let durationList: Store[] = [];

  // keyEnter
  const [enterKeyPressed, setEnterKeyPressed] = useState<boolean>(false);
  // 검색어
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [saveSearchList, setSaveSearchList] = useState<Store[]>(data);
  // Date Picker
  const [dateSelected, setDateSelected] = useState<any>('');
  const [saveDatePickerList, setSaveDatePickerList] = useState<Store[]>(data);
  // 팝업 기간
  const [popupDurationFilter, setPopupDurationFilter] =
    useState<string>('전체');
  const [savePopupDurationList, setSavePopupDurationList] =
    useState<Store[]>(data);

  // 카테고리 Modal
  const { isShowing, toggle } = useLocationModal();

  // 검색어 필터
  // 눌린 키가 enter인지 체크
  const checkKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setEnterKeyPressed(true);
      searchFilterHandler();
      navigate(
        `/search?search=${searchTerm}&date=${dateSelected}&duration=${popupDurationFilter}`,
      );
    } else {
      setEnterKeyPressed(false);
    }
  };

  // 검색 필터
  const searchFilterHandler = () => {
    data?.forEach((store: Store) => {
      if (
        store.title === searchTerm ||
        store.address === searchTerm ||
        store.location === searchTerm ||
        store.item === searchTerm ||
        store.category === searchTerm
      ) {
        searchList.push(store);
      }
    });
    if (searchTerm.length === 0) {
      setSaveSearchList(data);
    } else {
      setSaveSearchList(searchList);
    }
  };
  const [pickedDate, setPickedDate] = useState<number>();

  // DatePicker 날짜 숫자로 바꿔준다
  const dateSelectedFilterHandler = () => {
    // 날짜 구조 변경 - Tue Feb 14 2023 00:00:00 GMT+0900 (한국 표준시) => month 숫자로 변경
    const monthInWords = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    if (dateSelected != null) {
      // Month
      const getStrigDate = String(dateSelected);
      const spaceSplit = getStrigDate.split(' ');
      let monthInNumber = String(monthInWords.indexOf(spaceSplit[1]) + 1);
      if (Number(monthInNumber) < 10) {
        monthInNumber = '0' + String(monthInNumber);
      }
      setPickedDate(Number(spaceSplit[3] + monthInNumber + spaceSplit[2]));
      // return spaceSplit[3] + monthInNumber + spaceSplit[2];
    }
  };

  // 윤년 계산
  const calculateLeapYear = (year: number) => {
    if (year % 400 === 0) {
      // 윤년
      return true;
    } else if (year % 100 === 0) {
      // 평년
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  };

  // 모달창 열렸을시 스크롤 방지
  useEffect(() => {
    if (isShowing) {
      const body = document.body;
      body.style.overflow = 'hidden';
      return () => {
        body.style.overflow = 'auto';
      };
    }
  }, [isShowing]);

  // Date Picker
  useEffect(() => {
    dateSelectedFilterHandler();
  }, [dateSelected]);

  return (
    <>
      <S.SearchContainer>
        <S.SearchInputContainer>
          <S.SearchIcon />
          <S.SearchInput
            placeholder="키워드를 입력해주세요."
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyPress={checkKeypress}
          />
        </S.SearchInputContainer>
        <S.DatePickerWrapper>
          <S.IconTitleContainer>
            <S.FilterTitle>진행중</S.FilterTitle>
          </S.IconTitleContainer>
          <S.DatePickerContainer
            selected={dateSelected}
            locale={ko}
            onChange={(date) => setDateSelected(date)}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            showPopperArrow={false}
            isClearable={dateSelected === '' ? false : true}
            placeholderText="날짜 선택"
            closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정
          />
        </S.DatePickerWrapper>
        <S.IconTitleContainer>
          <S.FilterTitle>팝업 기간</S.FilterTitle>
          <S.SearchEventPeriod
            onChange={(event) => setPopupDurationFilter(event.target.value)}
          >
            <option value="전체">전체</option>
            <option value="1주일 이하">1주일 이하</option>
            <option value="2주일 이하">2주일 이하</option>
            <option value="한달 이하">한달 이하</option>
            팝업 기간
          </S.SearchEventPeriod>
        </S.IconTitleContainer>
      </S.SearchContainer>
      <S.SearchButton
        onClick={(event) => {
          event.stopPropagation();
          navigate(
            `/search?search=${searchTerm}&date=${pickedDate}&duration=${popupDurationFilter}`,
          );
        }}
      >
        검색
      </S.SearchButton>
    </>
  );
};

export default HomeSearch;
