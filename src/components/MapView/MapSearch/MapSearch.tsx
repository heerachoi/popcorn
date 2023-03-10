// library
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { mapSearchValue } from '../../../atoms';
// types
import MapWeather from '../MapWeather/MapWeather';
import { LocationType } from '../../../types/map';
// style
import * as S from './style';
import { VscSearch } from 'react-icons/vsc';
import COLORS from '../../../assets/CSS/colors';
interface Props {
  onSearchSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  myLocation: LocationType;
}

const MapSearch = ({ onSearchSubmitHandler, myLocation }: Props) => {
  const [search, setSearch] = useRecoilState(mapSearchValue);
  const [tmpQuery, setTmpQuery] = useState(search);
  const searchValueChangeHandler = (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    setTmpQuery(event.currentTarget.value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      return setSearch(tmpQuery);
    }, 300); //->setTimeout 설정
    return () => clearTimeout(debounce); //->clearTimeout 바로 타이머 제거
  }, [tmpQuery]); //->결국 마지막 이벤트에만 setTimeout이 실행됨

  return (
    <S.Wrap>
      <form name="팝업스토어" onSubmit={onSearchSubmitHandler}>
        <S.VscIconWrap>
          <VscSearch size={20} color={COLORS.green2}></VscSearch>
          <S.KeywordText>키워드</S.KeywordText>
        </S.VscIconWrap>
        <S.SearchInput
          onChange={searchValueChangeHandler}
          type="text"
          value={tmpQuery}
          placeholder="주소, 팝업스토어 검색"
        />
      </form>
      <MapWeather myLocation={myLocation} />
    </S.Wrap>
  );
};

export default MapSearch;
