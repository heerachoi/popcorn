import { useEffect, useState } from 'react';
import datas from '../../../data/popupStore.json';
import { ko } from 'date-fns/esm/locale';
import {
  DatePickerContainer,
  SearchContainer,
  SearchContainerTop,
  SearchEventPeriod,
  SearchContainerBottom,
  DepartmentStoreCategory,
  ItemCategory,
  SearchInput,
  FilterTypes,
  StartingDate,
  SelectDate,
  StoreContainer,
  PosterImg,
  StoreTitle,
  EventPeriod,
  EtcCategory,
  FilterResult,
  CalendarContainer,
  ToggleCalendar,
} from './style';
import 'react-datepicker/dist/react-datepicker.css';
const Search: any = () => {
  // 팝업 스토어 필터된 리스트 상태관리
  const [storeList, setStoreList] = useState<any>([]);
  // 팝업 스토어 필터된 리스트
  const filterList: any[] = [];
  // 검색어
  const [searchTerm, setSearchTerm] = useState('');
  // keyEnter
  const [enterKeyPressed, setEnterKeyPressed] = useState(false);
  // 시작 날짜 필터 달력
  const [filterStartDate, setFilterStartDate] = useState('');
  const [dateSelected, setDateSelected] = useState<any>('');
  // 팝업 기간
  const [filterEventDuration, setFilterEventDuration] = useState('');
  // 팝업 유형
  const [departmentStoreCategory, setDepartmentStoreCategory] = useState([]);

  // 눌린 키가 enter인지 체크
  const checkKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      setEnterKeyPressed(true);
    }
  };

  useEffect(() => {
    startFilter();
    //각자 가져오기
  }, [
    enterKeyPressed,
    filterStartDate,
    filterEventDuration,
    filterEventDuration,
    departmentStoreCategory,
    dateSelected,
  ]);

  // 지역, 날짜, 기타 사항 필터
  const startFilter = () => {
    const datePicker = String(dateSelectedHandler());

    // 지역 필터
    if (
      enterKeyPressed === true ||
      datePicker.length !== 0 ||
      filterEventDuration.length !== 0 ||
      filterEventDuration.length !== 0 ||
      departmentStoreCategory.length !== 0
    ) {
      datas.Store.filter((item) => {
        if (item.location === searchTerm || item.open === datePicker) {
          filterList.push(item);
          setStoreList([...storeList, item]);
        }
      });
    }
    // 날짜 필터

    // 제품 필터

    // 기타 필터

    setEnterKeyPressed(false);
    setStoreList(filterList);
  };

  const dateSelectedHandler = () => {
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
    // 현제 달력 날짜 값 구한뒤, 가게 날짜에서 오늘 숫자와 같은거
  };

  return (
    <SearchContainer>
      <SearchContainerTop>
        <SearchInput
          type="text"
          value={searchTerm}
          placeholder="키워드를 입력해주세요. (예. 서울, 액세서리)"
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyPress={checkKeypress}
        />
        <CalendarContainer>
          {/* 팝업스토어 시작 날짜 선택 */}
          <DatePickerContainer
            selected={dateSelected}
            locale={ko}
            onChange={(date) => setDateSelected(date)}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            showPopperArrow={false}
            isClearable={true}
            placeholderText="선택 하세요"
            closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정
          />
        </CalendarContainer>
        <SearchEventPeriod>
          <option value="전체">전체</option>
          <option value="1주일 이하">1주일 이하</option>
          <option value="2주일 이하">2주일 이하</option>
          <option value="1달 이하">1달 이하</option>
          팝업 기간
        </SearchEventPeriod>
      </SearchContainerTop>
      <SearchContainerBottom>
        <DepartmentStoreCategory>
          <option value="모두선택">모두선택</option>
          <option value="백화점 팝업">백화점 팝업</option>
          <option value="지역상권 공간">지역상권 공간</option>
        </DepartmentStoreCategory>
        <ItemCategory>제품 카테고리</ItemCategory>
        <EtcCategory>기타 카테고리</EtcCategory>
      </SearchContainerBottom>
      <FilterTypes />
      <SelectDate />
      <FilterResult>
        {storeList.map((store: any, index: any) => {
          return (
            <StoreContainer key={index}>
              <PosterImg src={store.imgURL[0]} />
              <StoreTitle>{store.title}</StoreTitle>
              <EventPeriod>
                {store.open} - {store.close}{' '}
              </EventPeriod>
            </StoreContainer>
          );
        })}
      </FilterResult>
    </SearchContainer>
  );
};

export default Search;
