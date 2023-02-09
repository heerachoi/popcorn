import { useEffect, useState } from 'react';
import datas from '../../../db.json';
import {
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
} from './style';

const Search: any = () => {
  const [storeList, setStoreList] = useState<any>([]);
  const filterList: any[] = [];
  const [searchTerm, setSearchTerm] = useState('');

  // 지역, 날짜, 기타 사항 필터
  const startFilter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    // 지역 필터
    if (event.key === 'Enter') {
      datas.Store.filter((item) => {
        if (item.location === searchTerm) {
          setStoreList([...storeList, item]);
          filterList.push(item);
        }
      });
    }
    // 날짜 필터

    // 아잍템 필터

    setStoreList(filterList);
  };

  useEffect(() => {}, []);

  return (
    <SearchContainer>
      <SearchContainerTop>
        <SearchInput
          type="text"
          value={searchTerm}
          placeholder="키워드를 입력해주세요. (예. 서울, 액세서리)"
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyPress={startFilter}
        />
        <StartingDate>시작날짜</StartingDate>
        <SearchEventPeriod>팝업 기간</SearchEventPeriod>
        {/* <SearchButton type="submit" onClick={startFilter}>검색</SearchButton> */}
      </SearchContainerTop>
      <SearchContainerBottom>
        <DepartmentStoreCategory>팝업 유형</DepartmentStoreCategory>
        <ItemCategory>제품 카테고리</ItemCategory>
        <EtcCategory>기타 카테고리</EtcCategory>
      </SearchContainerBottom>
      <FilterTypes />
      <SelectDate />
      <FilterResult>
        {storeList.map((store: any, index: any) => {
          return (
            <StoreContainer key={index}>
              <PosterImg src={store.mainImg[0]} />
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
