import React, { useEffect, useState } from 'react';
import * as S from './style';
import axios from "axios";

// Data
import datas from '../../data/popupStore.json';
// Interface
import { Store } from '../../types/data/storeInterface';
// Library
import { ko } from 'date-fns/esm/locale';
// React-icons
import { ImLocation, ImSearch } from 'react-icons/im';
import { BsFillCalendarFill } from 'react-icons/bs';
import { RiProductHuntLine } from 'react-icons/ri';
import { BiCalendar, BiCategoryAlt } from 'react-icons/bi';
// Recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
// Hooks
import useLocationModal from '../../hooks/useLocationModal';
import useItemModal from '../../hooks/useItemModal';
import useOtherModal from '../../hooks/useOtherModal';
// Component
import Modal from '../../components/SearchPage/SearchModal/SearchModal';
import { ModalButtonData } from '../../data/ModalButtonData/ModalButtonData';
import StoreCalendar from '../../components/StoreCalendar/StoreCalendar';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Search: React.FC = () => {
  const navigate = useNavigate();



  // 팝업 스토어 필터된 리스트 상태관리
  const [storeList, setStoreList] = useState<Store[]>(datas.Store);
  // 팝업 스토어 필터된 리스트
  let searchList: Store[] = [];
  let durationList: Store[] = [];
  let locationList: Store[] = [];
  // keyEnter
  const [enterKeyPressed, setEnterKeyPressed] = useState<any>(false);
  // 검색어
  const [searchTerm, setSearchTerm] = useState<any>('');
  console.log('searchTerm', searchTerm);
  const [saveSearchList, setSaveSearchList] = useState<Store[]>(datas.Store);
  // Date Picker
  const [dateSelected, setDateSelected] = useState<any>();
  const [saveDatePickerList, setSaveDatePickerList] = useState<Store[]>(
    datas.Store,
  );
  // 팝업 기간
  const [popupDurationFilter, setPopupDurationFilter] = useState<any>('전체');
  const [savePopupDurationList, setSavePopupDurationList] = useState<Store[]>(
    datas.Store,
  );
  // 팝업 유형
  const [saveDepartmentList, setSaveDepartmentList] = useState<Store[]>(
    datas.Store,
  );
  // 지역 필터
  const [saveLocationList, setSaveLocationtList] = useState<Store[]>(
    datas.Store,
  );
  //  제품 필터
  const [saveItemList, setSaveItemList] = useState<Store[]>(datas.Store);
  // 기타 필터
  const [saveOtherList, setSaveOtherList] = useState<Store[]>(datas.Store);
  // 모달 버튼 값
  const [modalResultList, setModalResultList] = useState<string[]>([]);

  // 카테고리 Modal
  const { isShowing, toggle } = useLocationModal();
  const { isItemModalShowing, itemToggle } = useItemModal();
  const { isOtherModalShowing, otherToggle } = useOtherModal();

  // 검색어 필터
  // 눌린 키가 enter인지 체크
  const checkKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('---------------- searchTerm',searchTerm);
    if (event.key === 'Enter') {
      setEnterKeyPressed(true);
      searchFilterHandler();
    } else {
      setEnterKeyPressed(false);
    }
  };

  // 검색 필터
  const searchFilterHandler = () => {
    datas.Store.forEach((store: Store) => {
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
      console.log('if');
      setSaveSearchList(datas.Store);
    } else {
      console.log('else');
          console.log('searchList',searchList);

      setSaveSearchList(searchList);
    }
    startFilter();
  };

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
      return spaceSplit[3] + monthInNumber + spaceSplit[2];
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

  // 데이터에서 가저온 날짜 숫자로 변경
  // 시작과 끝 사이에 고른 날짜가 있다면 return true
  // 개선 pick했을때 실행하게,
  const datePickerFilterHandler: any = () => {
    // DatePicker의 날짜 숫자형식으로 가져온다
    const pickedDate = Number(dateSelectedFilterHandler());
    // nan일경우 모두 포함
    let datePickerList: Store[] = [];
    if (!Number.isNaN(pickedDate)) {
      datas.Store.map((store: Store) => {
        let startDate = parseInt(store.open.split('.').join(''));
        let closeDate = parseInt(store.close.split('.').join(''));
        if (startDate <= pickedDate && closeDate >= pickedDate) {
          // 팝업 스토어 진행기간에 들어있다
          datePickerList.push(store);
        }
      });
      console.log(datePickerList);
      setSaveDatePickerList(datePickerList);
    } else {
      setSaveDatePickerList(datas.Store);
    }
  };

  // 팝업 기간
  // 전체일 경우 팝업스토어 목록 전체를 SavePopupDurationList에 저장
  const durationHandler = () => {
    if (popupDurationFilter === '전체') {
      setSavePopupDurationList(datas.Store);
    } else {
      datas.Store.forEach((store: Store) => {
        let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let countDays = 0;
        let openDateList = store.open.split('.');
        let openYear = parseInt(openDateList[0]);
        let openMonth = parseInt(openDateList[1]);
        let openDate = parseInt(openDateList[2]);

        // 윤년 확인
        if (calculateLeapYear(openYear)) {
          monthDay[1] = 29;
        }
        let closeDateSplit = store.close.split('.');
        let closeDate = parseInt(closeDateSplit[1]);
        countDays = closeDate + (monthDay[openMonth - 1] - openDate);

        if (popupDurationFilter === '1주일 이하' && countDays <= 7) {
          durationList.push(store);
        } else if (popupDurationFilter === '2주일 이하' && countDays <= 14) {
          durationList.push(store);
        } else if (popupDurationFilter === '한달 이하' && countDays <= 31) {
          durationList.push(store);
        }
      });
      setSavePopupDurationList(durationList);
    }
  };

  // 지역 필터
  // 위치 모달 결과 - 전체리스트에서 LocationFilter에 true인 것만 가져온다.
  const locationFilterList = useRecoilValue(ModalButtonData);
  // console.log('locationFilterList',locationFilterList);
  const locationFilterHandler = () => {
    if (locationFilterList[0].label === '전체') {
      setSaveLocationtList(datas.Store);
    } else {
      for (let i = 0; i < locationFilterList.length; i++) {
        datas.Store.filter((store) => {
          if (store.location === locationFilterList[i].label) {
            locationList.push(store);
          }
        });
      }
      setSaveLocationtList(locationList);
      locationList = [];
    }
  };



  // ModalButtonData에서 찾아서 active True
  // locationFilterList에 추가하면
  // locationFilterHandler 실행되고
  // 필터 리스트 리프레시

  const [currentURL, setCurrentURL] = useState<any>();

  const getURLInfo = () => {
    //현제 URL
    // setCurrentURL()
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam != null) {
      const decodedSearch = decodeURIComponent(searchParam); // "서울"
      console.log('decodedSearch', decodedSearch);
      setSearchTerm(decodedSearch);
    }
  };

    useEffect(() => {
    getURLInfo();
  }, [currentURL]);





  // 검색
  useEffect(() => {
    console.log('search filter started');
    searchFilterHandler();
  }, [searchTerm, saveSearchList]);

  // 위치
  useEffect(() => {
    // printModalResult();
    if (locationFilterList.length != 0) {
      locationFilterHandler();
    }
  }, [locationFilterList]);

  // Date Picker
  useEffect(() => {
    datePickerFilterHandler(dateSelected);
  }, [dateSelected]);

  // 기간
  useEffect(() => {
    durationHandler();
  }, [popupDurationFilter]);

  // list를 확인해줘야 필터링 리스트에 바로 적용된다.
  useEffect(() => {
    startFilter();
  }, [
    saveSearchList,
    saveDatePickerList,
    savePopupDurationList,
    saveDepartmentList,
    saveLocationList,
  ]);

  // 지역, 날짜, 기타 사항 필터
  const startFilter = () => {
    let result: Store[] = [];
    // 1. 검색 & 기간 필터
    console.log('search', saveSearchList);
    // console.log('savePopupDurationList', savePopupDurationList);
    result = saveSearchList.filter((store: Store) =>
      savePopupDurationList.includes(store),
    );
    // 2. #1에서 나온 목록에서 위치 필터
    let result2: Store[] = [];
    result.map((store: Store, index) => {
      for (let i = 0; i < saveLocationList.length; i++) {
        if (saveLocationList[i].id === store.id) {
          result2.push(store);
        }
      }
    });
    // 3. #2에서 나온 목록에서 위치 필터
    let result3: Store[] = [];
    result2.map((store: Store, index) => {
      for (let i = 0; i < saveDatePickerList.length; i++) {
        if (saveDatePickerList[i].id === store.id) {
          result3.push(store);
        }
      }
    });
    setStoreList(result3);
  };

  // 모달 클릭 값
  const modalClickHandler = (event: any) => {
    toggle(event);
  };
  

  return (
    <S.SearchPageContainer>
      <S.FilterContainer>
          <S.SearchInputContainer>
            <ImSearch />
            <S.InputTitle>키워드</S.InputTitle>
            <S.SearchInput
              type="text"
              value={searchTerm}
              placeholder="키워드를 입력해주세요."
              onChange={(event) => setSearchTerm(event.target.value)}
              onKeyPress={checkKeypress}
            />
          </S.SearchInputContainer>
        <S.SearchItemContainer>
          <S.SearchTagContainer>
            <BsFillCalendarFill />
            <S.FilterTitle>진행중</S.FilterTitle>
            <S.DatePickerWrapper>
              <S.DatePickerContainer
                selected={dateSelected}
                locale={ko}
                onChange={(date) => setDateSelected(date)}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                showPopperArrow={false}
                isClearable={true}
                placeholderText="날짜 선택"
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정
              />
            </S.DatePickerWrapper>
          </S.SearchTagContainer>
        </S.SearchItemContainer>
        <S.SearchItemContainer>
          <S.SearchTagContainer>
            <BsFillCalendarFill />
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
          </S.SearchTagContainer>
        </S.SearchItemContainer>
        <S.SearchItemContainer>
          {/* <ImLocation /> */}
          <S.SearchTagContainer>
            <S.FilterTitle
              className="button-default"
              onClick={modalClickHandler}
            >
              위치
            </S.FilterTitle>
            <Modal isShowing={isShowing} hide={toggle} value={'위치'} />
            {/* <S.FilterItemHolder>전체</S.FilterItemHolder> */}
          </S.SearchTagContainer>
        </S.SearchItemContainer>
        <S.SearchItemContainer>
          {/* <RiProductHuntLine /> */}
          <S.SearchTagContainer>
            <S.FilterTitle className="button-default" onClick={itemToggle}>
              제품 카테고리
            </S.FilterTitle>
            <Modal
              isShowing={isItemModalShowing}
              hide={itemToggle}
              value={'제품'}
            />
            {/* <S.FilterItemHolder>전체</S.FilterItemHolder> */}
          </S.SearchTagContainer>
        </S.SearchItemContainer>
        <S.SearchItemContainer>
          {/* <BiCategoryAlt /> */}
          <S.SearchTagContainer>
            <S.FilterTitle className="button-default" onClick={otherToggle}>
              기타 카테고리
            </S.FilterTitle>
            <Modal
              isShowing={isOtherModalShowing}
              hide={otherToggle}
              value={'기타'}
            />
            {/* <S.FilterItemHolder>전체</S.FilterItemHolder> */}
          </S.SearchTagContainer>
        </S.SearchItemContainer>
        <S.FilterTypes />
        <S.SelectDate />
      </S.FilterContainer>
      <S.FilterResultAndCalendarContainer>
        <S.FilterResult>
          {storeList.map((popup: Store) => {
            return (
              <S.StoreContainer key={popup.id} onClick={() => navigate(`/detail/${popup.id}`, { state: popup })}>
                <S.PosterImg src={popup.imgURL[0]} />
                <S.StoreInformation>
                  <S.InformationContainer>
                    <S.StoreTitle>{popup.title}</S.StoreTitle>
                  <S.EventPeriod>
                    {popup.open} - {popup.close}
                  </S.EventPeriod>
                  </S.InformationContainer>
                  <S.CategoryContainer>
                  <S.Category onClick={(event) => { 
                      event.stopPropagation(); 
                      navigate(`/search?search=${popup.location}`);
                    }}> 
                    {popup.location} 
                  </S.Category>
                  <S.Category onClick={(event) => {
                      event.stopPropagation();
                      navigate(`/search?search=${popup.category}`);
                    }}>{popup.category}
                  </S.Category>
                  <S.Category onClick={(event) => {
                      event.stopPropagation();
                      // setSearchTerm(event.target.value);
                    }}>{popup.item}</S.Category>
                  </S.CategoryContainer>
                </S.StoreInformation>
              </S.StoreContainer>
            );
          })}
        </S.FilterResult>
        <S.CalendarContainer>
          <StoreCalendar />
        </S.CalendarContainer>
      </S.FilterResultAndCalendarContainer>
    </S.SearchPageContainer>
  );
};

export default Search;
