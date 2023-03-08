import { VscSearch } from 'react-icons/vsc';
import { useRecoilState } from 'recoil';
import { mapSearchValue } from '../../../atoms';
import * as S from './style';
import COLORS from '../../../assets/CSS/colors';
import MapWeather from '../MapWeather/MapWeather';
import { LocationType } from '../../../types/map';

interface Props {
  onSearchSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  myLocation: LocationType;
}

const MapSearch = ({ onSearchSubmitHandler, myLocation }: Props) => {
  const [search, setSearch] = useRecoilState(mapSearchValue);

  const searchValueChangeHandler = (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <S.Wrap>
      <form name="팝업스토어" onSubmit={onSearchSubmitHandler}>
        <S.VscIconWrap>
          <VscSearch size={20} color={COLORS.green}></VscSearch>
          <S.KeywordText>키워드</S.KeywordText>
        </S.VscIconWrap>
        <S.SearchInput
          onChange={searchValueChangeHandler}
          type="text"
          value={search}
          placeholder="주소, 팝업스토어 검색"
        />
      </form>
      <MapWeather myLocation={myLocation} />
    </S.Wrap>
  );
};

export default MapSearch;
