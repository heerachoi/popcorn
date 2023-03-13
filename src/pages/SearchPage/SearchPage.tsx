import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
// Data
import { getPopupData } from '../../services/api';
// Interface
import { Store } from '../../types/data/storeInterface';
// Library
import { ko } from 'date-fns/esm/locale';
// library
import { useRecoilValue } from 'recoil';
import StoreCalendar from '../../components/StoreCalendar/StoreCalendar';
import { useNavigate } from 'react-router-dom';
// Hooks
import useLocationModal from '../../hooks/useLocationModal';
import useItemModal from '../../hooks/useItemModal';
import useOtherModal from '../../hooks/useOtherModal';
// component
import ColorBox from '../../components/StoreCalendar/ColorBox';
import Modal from '../../components/SearchPage/SearchModal/SearchModal';
import { ModalButtonData } from '../../utils/ModalButtonData/ModalButtonData';
import { ItemModalButtonData } from '../../utils/ModalButtonData/ItemModalButtonData';
import { OtherModalButtonData } from '../../utils/ModalButtonData/OtherModalButtonData';
import NotFound from '../../components/GlobalComponents/NotFound';
import TopButton from '../../components/GlobalComponents/TopButton';
//style
import * as S from './style';
import { ImSearch } from 'react-icons/im';
import { BsFillCalendarFill } from 'react-icons/bs';
import { SearchKey } from '../../atoms';

const Search: React.FC = () => {
  // 1. url에서 카테고리 정보를 받아
  // 검색
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery('popup', getPopupData, {
    staleTime: 500000,
  });
  // 팝업 스토어 필터된 리스트 상태관리
  const [storeList, setStoreList] = useState<Store[]>(data);
  const searchKey = useRecoilValue(SearchKey);

  // 팝업 스토어 필터된 리스트
  let searchList: Store[] = [];
  let durationList: Store[] = [];
  let locationList: Store[] = [];
  let itemList: Store[] = [];
  let otherList: Store[] = [];

  // 검색어
  const [searchTerm, setSearchTerm] = useState<any>('');
  const [saveSearchList, setSaveSearchList] = useState<Store[]>(data);
  // Date Picker
  const [dateSelected, setDateSelected] = useState<any>();
  const [saveDatePickerList, setSaveDatePickerList] = useState<Store[]>(data);
  // 팝업 기간
  const [popupDurationFilter, setPopupDurationFilter] = useState<any>('전체');
  const [savePopupDurationList, setSavePopupDurationList] =
    useState<Store[]>(data);
  // 지역 필터
  const [saveLocationList, setSaveLocationtList] = useState<Store[]>(data);
  //  제품 필터
  const [saveItemList, setSaveItemList] = useState<Store[]>(data);
  // 기타 필터
  const [saveOtherList, setSaveOtherList] = useState<Store[]>(data);

  // 카테고리 Modal
  const { isShowing, toggle } = useLocationModal();
  const { isItemModalShowing, itemToggle } = useItemModal();
  const { isOtherModalShowing, otherToggle } = useOtherModal();
  const [pickedDate, setPickedDate] = useState<number>();
  const [datePickerPlaceHolder, setDatePickerPlaceHolder] =
    useState<string>('날짜 선택');
  useEffect(() => {
    searchFilterHandler();
  }, [searchTerm]);

  useEffect(() => {
    if (!data) {
      setStoreList(data);
    }
  }, [data]);

  // 검색 필터
  const searchFilterHandler = () => {
    data?.forEach((store: Store) => {
      if (
        store.title.includes(searchTerm) ||
        store.address.includes(searchTerm) === searchTerm ||
        store.location.includes(searchTerm) ||
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
      searchList = [];
    }
    startFilter();
  };

  // Date Picker
  useEffect(() => {
    dateSelectedFilterHandler();
  }, [dateSelected]);

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
  const datePickerFilterHandler = () => {
    // DatePicker의 날짜 숫자형식으로 가져온다
    // nan일경우 모두 포함
    let datePickerList: Store[] = [];
    if (pickedDate !== undefined) {
      data.map((store: Store) => {
        let startDate = parseInt(store.open.split('.').join(''));
        let closeDate = parseInt(store.close.split('.').join(''));
        if (startDate <= pickedDate && closeDate >= pickedDate) {
          // 팝업 스토어 진행기간에 들어있다
          datePickerList.push(store);
        }
      });
      setSaveDatePickerList(datePickerList);
    } else {
      setSaveDatePickerList(data);
    }
  };

  // 팝업 기간
  // 전체일 경우 팝업스토어 목록 전체를 SavePopupDurationList에 저장
  const durationHandler = () => {
    if (popupDurationFilter === '전체') {
      setSavePopupDurationList(data);
    } else {
      data.forEach((store: Store) => {
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
  const locationFilterHandler = () => {
    if (locationFilterList[0].label === '전체') {
      setSaveLocationtList(data);
    } else {
      for (let i = 0; i < locationFilterList.length; i++) {
        data.filter((store: Store) => {
          if (store.location === locationFilterList[i].label) {
            locationList.push(store);
          }
        });
      }
      setSaveLocationtList(locationList);
      locationList = [];
    }
  };

  //제품 필터
  const itemFilterList = useRecoilValue(ItemModalButtonData);
  const itemFilterHandler = () => {
    if (itemFilterList[0].label === '전체') {
      setSaveItemList(data);
    } else {
      for (let i = 0; i < itemFilterList.length; i++) {
        data.filter((store: Store) => {
          if (store.item === itemFilterList[i].label) {
            itemList.push(store);
          }
        });
      }
      setSaveItemList(itemList);
      itemList = [];
    }
  };

  //기타 필터
  const otherFilterList = useRecoilValue(OtherModalButtonData);
  const otherFilterHandler = () => {
    // otherFilterList에 있는 값들 중에
    // store view안에 otherFilterList에 선택된 애들이 10,20일경우
    // 10,20이 0 이상인 경우 출력
    if (otherFilterList[0].label === '전체') {
      setSaveOtherList(data);
    } else {
      data?.map((store: Store) => {
        otherFilterList.map((other) => {
          // store.view[10]은 알아서 뽑아낸다 -> 0이 아닐때
          let viewValue: string = other.label;
          if (store.view[viewValue] > 0) {
            // view가 0이상일때
            // 현제 otherList에 없다면 추가
            const checkDuplication = otherList.find(
              (current) => current.id === store.id,
            );
            if (checkDuplication === undefined) {
              otherList.push(store);
            }
          }
        });
      });
      setSaveOtherList(otherList);
      otherList = [];
    }
  };

  // ModalButtonData에서 찾아서 active True
  // locationFilterList에 추가하면
  // locationFilterHandler 실행되고
  // 필터 리스트 리프레시

  const getURLInfo = () => {
    //현제 URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const dateParam = urlParams.get('date');
    const duration = urlParams.get('duration');

    // Check if the parameters are in sessionStorage
    if (sessionStorage.getItem('searchParam') !== null) {
      setSearchTerm(sessionStorage.getItem('searchParam'));
    }

    if (sessionStorage.getItem('dateParam') !== null) {
      setPickedDate(Number(sessionStorage.getItem('dateParam')));
    }

    if (sessionStorage.getItem('duration') !== null) {
      setPopupDurationFilter(sessionStorage.getItem('duration'));
    }

    if (searchParam != undefined || searchParam != null) {
      const decodedSearch = decodeURIComponent(searchParam);
      sessionStorage.setItem('searchParam', decodedSearch);
      setSearchTerm(decodedSearch);
    } else {
      setSaveSearchList(data);
    }

    if (dateParam !== null) {
      if (dateParam !== undefined) {
        let decodedDate = decodeURIComponent(dateParam);
        sessionStorage.setItem('dateParam', decodedDate);
        if (decodedDate === 'NaN') {
          decodedDate = '날짜 선택';
        } else {
          setPickedDate(Number(decodedDate));
        }
        setDatePickerPlaceHolder(decodedDate);
      }
    }
    if (duration !== null) {
      const decodedDuration = decodeURIComponent(duration);
      sessionStorage.setItem('durationParam', decodedDuration);

      setPopupDurationFilter(decodedDuration);
    }
  };

  // url
  useEffect(() => {
    getURLInfo();
  }, [window.location.pathname, window.location.search]);

  // 검색
  useEffect(() => {
    searchFilterHandler();
  }, [searchTerm, saveSearchList]);

  // 위치
  useEffect(() => {
    if (locationFilterList.length != 0) {
      locationFilterHandler();
    }
  }, [locationFilterList]);

  // Date Picker
  useEffect(() => {
    datePickerFilterHandler();
  }, [dateSelected]);

  // 기간
  useEffect(() => {
    durationHandler();
  }, [popupDurationFilter]);

  // 제품
  useEffect(() => {
    if (itemFilterList.length != 0) {
      itemFilterHandler();
    }
  }, [itemFilterList]);

  // 기타
  useEffect(() => {
    if (otherFilterList.length != 0) {
      otherFilterHandler();
    }
  }, [otherFilterList]);

  // list를 확인해줘야 필터링 리스트에 바로 적용된다.
  useEffect(() => {
    startFilter();
  }, [
    saveSearchList,
    saveDatePickerList,
    savePopupDurationList,
    saveLocationList,
    saveItemList,
    saveOtherList,
  ]);

  // 지역, 날짜, 기타 사항 필터
  const startFilter = () => {
    if (
      savePopupDurationList === undefined &&
      saveLocationList === undefined &&
      saveItemList === undefined
    ) {
      setStoreList(data);
    } else {
      let result: Store[] = [];
      // 1. 검색 & 기간 필터
      if (savePopupDurationList === undefined) {
        result = data;
      } else {
        result = saveSearchList?.filter((store: Store) =>
          savePopupDurationList.includes(store),
        );
      }
      // 2. #1에서 나온 목록에서 위치 필터
      let result2: Store[] = [];
      if (saveLocationList === undefined) {
        result2 = result;
      } else {
        result?.map((store: Store, index) => {
          for (let i = 0; i < saveLocationList.length; i++) {
            if (saveLocationList[i].id === store.id) {
              result2.push(store);
            }
          }
        });
      }
      // 3. #2에서 나온 목록에서 위치 필터
      let result3: Store[] = [];
      if (result2 === undefined) {
        result2 = data;
      } else {
        result2.map((store: Store) => {
          for (let i = 0; i < saveDatePickerList.length; i++) {
            if (saveDatePickerList[i].id === store.id) {
              result3.push(store);
            }
          }
        });
      }
      // 4. #3에서 나온 목록에서 제품 필터
      let result4: Store[] = [];

      result3.map((store: Store, index) => {
        for (let i = 0; i < saveItemList.length; i++) {
          if (saveItemList[i].id === store.id) {
            result4.push(store);
          }
        }
      });
      // 5. #4에서 나온 목록에서 제품 필터
      let result5: Store[] = [];
      result4.map((store: Store, index) => {
        for (let i = 0; i < saveOtherList.length; i++) {
          if (saveOtherList[i].id === store.id) {
            result5.push(store);
          }
        }
      });
      setStoreList(result5);
    }
  };

  // 모달 클릭 값
  const modalClickHandler = (event: any) => {
    toggle(event);
  };

  // 모달창 열렸을시 스크롤 방지
  useEffect(() => {
    if (isShowing || isItemModalShowing || isOtherModalShowing) {
      const body = document.body;
      body.style.overflow = 'hidden';
      return () => {
        body.style.overflow = 'auto';
      };
    }
  }, [isShowing, isItemModalShowing, isOtherModalShowing]);

  return (
    <S.SearchPageContainer>
      <S.FilterContainer>
        <S.SearchInputContainer>
          <ImSearch />
          <S.KeyWordInputTitle>키워드</S.KeyWordInputTitle>
          <S.SearchInput
            value={searchTerm}
            placeholder="키워드를 입력해주세요."
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </S.SearchInputContainer>
        <S.DateSearchContainer>
          <S.SearchItemContainer>
            <S.FilterWithIcon>
              <S.IconTitleContainer>
                <BsFillCalendarFill />
                <S.FilterTitle>진행중</S.FilterTitle>
              </S.IconTitleContainer>
              <S.DatePickerWrapper>
                <S.DatePickerContainer
                  selected={dateSelected ? new Date(dateSelected) : null}
                  locale={ko}
                  onChange={(date) => setDateSelected(date)}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  showPopperArrow={false}
                  isClearable={true}
                  placeholderText={
                    datePickerPlaceHolder.length !== 0 ||
                    datePickerPlaceHolder !== 'NaN'
                      ? datePickerPlaceHolder
                      : '날짜 선택'
                  }
                  closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정
                />
              </S.DatePickerWrapper>
            </S.FilterWithIcon>
          </S.SearchItemContainer>
          <S.SearchItemContainer>
            <S.FilterWithIcon>
              <BsFillCalendarFill />
              <S.FilterTitle>팝업 기간</S.FilterTitle>
              <S.SearchEventPeriod
                value={popupDurationFilter}
                onChange={(event) => setPopupDurationFilter(event.target.value)}
              >
                <option value="전체">전체</option>
                <option value="1주일 이하">1주일 이하</option>
                <option value="2주일 이하">2주일 이하</option>
                <option value="한달 이하">한달 이하</option>
                팝업 기간
              </S.SearchEventPeriod>
            </S.FilterWithIcon>
          </S.SearchItemContainer>
        </S.DateSearchContainer>

        <S.CategorySearchContainer>
          <S.SearchItemContainer>
            <S.LocationFilterTitle>
              <S.FilterTitle
                className="button-default"
                onClick={modalClickHandler}
              >
                위치
              </S.FilterTitle>
              <Modal isShowing={isShowing} hide={toggle} value={'위치'} />
            </S.LocationFilterTitle>
          </S.SearchItemContainer>
          <S.SearchItemContainer>
            <S.SearchTagContainer>
              <S.FilterTitle className="button-default" onClick={itemToggle}>
                제품 카테고리
              </S.FilterTitle>
              <Modal
                isShowing={isItemModalShowing}
                hide={itemToggle}
                value={'제품'}
              />
            </S.SearchTagContainer>
          </S.SearchItemContainer>
          <S.SearchItemContainer>
            <S.SearchTagContainer>
              <S.FilterTitle className="button-default" onClick={otherToggle}>
                기타 카테고리
              </S.FilterTitle>
              <Modal
                isShowing={isOtherModalShowing}
                hide={otherToggle}
                value={'기타'}
              />
            </S.SearchTagContainer>
          </S.SearchItemContainer>
        </S.CategorySearchContainer>
      </S.FilterContainer>
      <S.FilterResultAndCalendarContainer>
        <S.FilterResult>
          {storeList === undefined || storeList.length === 0 ? (
            <NotFound />
          ) : (
            storeList?.map((popup: Store) => {
              return (
                <S.StoreContainer
                  key={popup.id}
                  onClick={() =>
                    navigate(`/detail/${popup.id}`, { state: popup })
                  }
                >
                  <S.PosterImg src={popup.imgURL[0]} />
                  <S.StoreInformation>
                    <S.InformationContainer>
                      <S.StoreTitle>{popup.title}</S.StoreTitle>
                      <S.EventPeriod>
                        {popup.open} - {popup.close}
                      </S.EventPeriod>
                    </S.InformationContainer>
                    <S.CategoryContainer>
                      <S.Category
                        onClick={(event) => {
                          event.stopPropagation();
                          navigate(`/search?search=${popup.location}`);
                        }}
                      >
                        {popup.location}
                      </S.Category>
                      <S.Category
                        onClick={(event) => {
                          event.stopPropagation();
                          navigate(`/search?search=${popup.category}`);
                        }}
                      >
                        {popup.category}
                      </S.Category>
                      <S.Category
                        onClick={(event) => {
                          event.stopPropagation();
                          // setSearchTerm(event.target.value);
                        }}
                      >
                        {popup.item}
                      </S.Category>
                    </S.CategoryContainer>
                  </S.StoreInformation>
                </S.StoreContainer>
              );
            })
          )}
        </S.FilterResult>
        <S.CalendarContainer>
          <ColorBox />
          {storeList !== undefined ? (
            <StoreCalendar storeList={storeList} />
          ) : null}
        </S.CalendarContainer>
      </S.FilterResultAndCalendarContainer>
      <TopButton />
    </S.SearchPageContainer>
  );
};

export default Search;
