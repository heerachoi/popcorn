import React, { useEffect, useState,} from 'react';
import datas from '../../../data/popupStore.json';
import { ko } from 'date-fns/esm/locale';
import Modal from '../Modal/Modal'
import useModal from '../../../hooks/useModal';
import StoreCalendar from '../StoreCalendar/StoreCalendar';
import {ImLocation, ImSearch} from 'react-icons/im';
import {BsCalendarRange} from 'react-icons/bs'
import {RiProductHuntLine} from 'react-icons/ri';
import {BiCalendar, BiCategoryAlt} from 'react-icons/bi'
import {
  DatePickerContainer,
  SearchPageContainer,
  FilterContainer,
  SearchItemContainer,
  SearchTagContainer,
  SearchEventPeriod,
  DepartmentStoreCategory,
  ItemCategory,
  FilterTitle,
  SearchInput,
  FilterTypes,
  SelectDate,
  StoreContainer,
  PosterImg,
  StoreTitle,
  EventPeriod,
  EtcCategory,
  FilterResult,
  ToggleCalendar,
  LocationCategory,
  DatePickerWrapper,
  CalendarContainer,
  FilterResultAndCalendarContainer,
  FilterItemHolder,
} from './style';
import 'react-datepicker/dist/react-datepicker.css';
interface Store {
  id: string;
  view: string;
  title: string;
  address: string;
  si: string;
  gu: string;
  dong: string;
  open: string;
  close: string;
  location: string;
  item: string;
  openingTime: string[];
  closeTime: string[];
  explain: string;
  sns: string;
  web: string;
  imgURL: string[];
  lat: string;
  lon: string;
}

//React.FC<Store>
const Search:React.FC = () => {
  // 팝업 스토어 필터된 리스트 상태관리
  const [storeList, setStoreList] = useState<Store[]>(datas.Store);
  console.log('outside storeList', storeList)
  // 팝업 스토어 필터된 리스트
  let filterList:Store[] = [];
  let searchList:Store[] = [];
  let durationList:Store[] =[];
  // keyEnter
  const [enterKeyPressed, setEnterKeyPressed] = useState<any>(false);
 // 검색어
  const [searchTerm, setSearchTerm] = useState<any>('');
  const [saveSearchList, setSaveSearchList] = useState<Store[]>(datas.Store);
  // Date Picker
  const [dateSelected, setDateSelected] = useState<any>();
  const [saveDatePickerList, setSaveDatePickerList] = useState<Store[]>(datas.Store);
  console.log('dateSelected',dateSelected)
  // 팝업 기간
  const [popupDurationFilter, setPopupDurationFilter] = useState<any>('');
  const [savePopupDurationList, setSavePopupDurationList] = useState<Store[]>(datas.Store);
  // 팝업 유형
  const [departmentStoreFilter, setDepartmentStoreFilter] = useState<any>('');
  const [saveDepartmentList, setSaveDepartmentList] = useState<Store[]>(datas.Store);
  // 지역 필터
  const [locationFilter, setLocationFilter] = useState<any>('');
  const [saveLocationList, setSaveLocationtList] = useState<Store[]>(datas.Store);
  // 지역 모달창 노출 여부 state
  // const [showLocationModal, setShowLocationModal] = useState<boolean>(false);

  //  제품 필터
  const [productFilter, setProductFilter] = useState<any>('');
  const [saveItemList, setSaveItemList] = useState<Store[]>(datas.Store);
  // 기타 필터
  const [otherFilter, setOtherFilter] = useState<any>('');
  const [saveOtherList, setSaveOtherList] = useState<Store[]>(datas.Store);


  // 검색어 필터
  // 눌린 키가 enter인지 체크
  const checkKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      setEnterKeyPressed(true);
      searchFilterHandler();
    } else {
      setEnterKeyPressed(false);
    }
  };

  const searchFilterHandler = () => {
    datas.Store.forEach((store:Store) => 
      {
        if (store.title === searchTerm || store.address === searchTerm || store.si === searchTerm|| store.gu === searchTerm|| store.dong === searchTerm|| store.location === searchTerm|| store.item === searchTerm) {
          searchList.push(store);
        } 
      }
    )
    setSaveSearchList(searchList);
    startFilter();
  }


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
  const calculateLeapYear = (year:number) => {
    if (year % 400 === 0) {
      // 육년
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
  const datePickerFilterHandler:any = () => {
    // DatePicker의 날짜 숫자형식으로 가져온다
    const pickedDate = Number(dateSelectedFilterHandler());
    // nan일경우 모두 포함
    console.log('pickedDate', pickedDate);
    let datePickerList:Store[] =[];
    if (!Number.isNaN(pickedDate)) {
      datas.Store.map((store:Store) => {
        let startDate = parseInt(store.open.split('.').join(''));
        let closeDate = parseInt(store.close.split('.').join(''));
        if (startDate <= pickedDate && closeDate >= pickedDate) {
          // 팝업 스토어 진행기간에 들어있다
          datePickerList.push(store);
        }
      })
      setSaveDatePickerList(datePickerList);
    }
    startFilter();
  }


  // 팝업 기간
  const durationHandler = () => {
    datas.Store.forEach((store:Store) => {
      let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let countDays = 0;
      let openDateList = store.open.split('.');
      let openYear = parseInt(openDateList[0]);
      let openMonth = parseInt(openDateList[1]);
      let openDate = parseInt(openDateList[2])

      // 윤년 확인
      if (calculateLeapYear(openYear)) {
        monthDay[1] = 29;
      }
      let closeDateSplit = store.close.split('.');
      let closeDate = parseInt(closeDateSplit[1]);
      countDays =  closeDate + (monthDay[openMonth-1] - openDate);
      if (popupDurationFilter === '1주일 이하' && countDays <= 7) {
        durationList.push(store);
      } else if (popupDurationFilter === '2주일 이하' && countDays <= 14) {
        durationList.push(store);
      } else if (popupDurationFilter === '한달 이하' && countDays <= 31) {
        durationList.push(store);
      }
    })
    setSavePopupDurationList(durationList);
    startFilter();
  }

  // 지역 필터
  const locationFilterHandler = () => {
    if (enterKeyPressed === true) {
      storeList.filter((store:Store) => {
        if (store.location === searchTerm) {
          filterList.push(store);
        }
      });
    }    
  }

  // 검색 
  useEffect(() => {
    searchFilterHandler();
  }, [
    searchTerm,
  ]);

  // Date Picker
  useEffect(() => {
    datePickerFilterHandler(dateSelected);
  }, [
    dateSelected,
  ]);

  // 기간
  useEffect(() => {
    durationHandler();
  }, [
    popupDurationFilter,
  ]);

  // 지역, 날짜, 기타 사항 필터
  const startFilter = () => {
    let result:Store[] = [];
      console.log('검색리스트: ', saveSearchList);

      result = saveSearchList.filter((store:Store)=> {
        return savePopupDurationList.includes(store);
      })
      result = result.filter((store)=>{
        return saveDatePickerList.includes(store);
      })    
      setStoreList(result);
  };

const {isShowing, toggle} = useModal();
console.log('isShowing', isShowing);
  return (
    <SearchPageContainer>
      <FilterContainer>
        <SearchItemContainer>
          <ImSearch/>
          <SearchTagContainer>
            <FilterTitle>키워드</FilterTitle>
            <SearchInput
              type="text"
              value={searchTerm}
              placeholder="키워드를 입력해주세요."
              onChange={(event) => setSearchTerm(event.target.value)}
              onKeyPress={checkKeypress}
            />
          </SearchTagContainer>
        </SearchItemContainer>
        <SearchItemContainer>
          <BiCalendar/>
          <SearchTagContainer>
            <FilterTitle>진행중인 팝업스토어</FilterTitle>
            <DatePickerWrapper>
            {/* 팝업스토어 시작 날짜 선택 */}
            <DatePickerContainer
              selected={dateSelected}
              locale={ko}
              onChange={(date) => setDateSelected(date)}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              showPopperArrow={false}
              isClearable={true}
              placeholderText="진행중인 팝업스토어"
              closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정
            />
          </DatePickerWrapper>
          </SearchTagContainer>
        </SearchItemContainer>
        <SearchItemContainer>
          <BsCalendarRange/>
          <SearchTagContainer>
            <FilterTitle>팝업 기간</FilterTitle>
            <SearchEventPeriod onChange={(event) => setPopupDurationFilter(event.target.value)}>
              <option value="">전체</option>
              <option value="1주일 이하">1주일 이하</option>
              <option value="2주일 이하">2주일 이하</option>
              <option value="한달 이하">한달 이하</option>
              팝업 기간
            </SearchEventPeriod>
          </SearchTagContainer>
        </SearchItemContainer>
        <SearchItemContainer>
          <ImLocation/>
          <SearchTagContainer>
           <FilterTitle className="button-default" onClick={toggle}>위치 카테고리</FilterTitle>
            <Modal
              isShowing={isShowing}
              hide={toggle}
            />
            <FilterItemHolder>전체</FilterItemHolder>
          </SearchTagContainer>
        </SearchItemContainer>
        <SearchItemContainer>
          <RiProductHuntLine/>
          <SearchTagContainer>
            <FilterTitle className="button-default" onClick={toggle}>제품 카테고리</FilterTitle>
            <Modal
              isShowing={isShowing}
              hide={toggle}
            />
            <FilterItemHolder>전체</FilterItemHolder>
          </SearchTagContainer>
        </SearchItemContainer>
        <SearchItemContainer>
          <BiCategoryAlt/>
          <SearchTagContainer>
            <FilterTitle className="button-default" onClick={toggle}>기타 카테고리</FilterTitle>
            <Modal 
              isShowing={isShowing} 
              hide={toggle}
            />
            <FilterItemHolder>전체</FilterItemHolder>
          </SearchTagContainer>
        </SearchItemContainer>
      <FilterTypes />
      <SelectDate />
      </FilterContainer>
      <FilterResultAndCalendarContainer>
      <FilterResult>
        {storeList.map((store: any, index: any) => {
          return (
            <StoreContainer key={index}>
              <PosterImg src={store.imgURL[0]} />
              <StoreTitle>{store.title}</StoreTitle>
              <EventPeriod>
                {store.open} - {store.close}
              </EventPeriod>
            </StoreContainer>
          );
        })}
      </FilterResult>
      <CalendarContainer>
        <StoreCalendar/>
      </CalendarContainer>
      </FilterResultAndCalendarContainer>
    </SearchPageContainer>
  );
};


export default Search;