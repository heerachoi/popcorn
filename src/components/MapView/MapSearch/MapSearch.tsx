import styled from 'styled-components';
import { VscSearch } from 'react-icons/vsc';
import { useRecoilState, useRecoilValue } from 'recoil';
import { mapCategoryValue, mapSearchValue } from '../../../atoms';
import COLORS from '../../../assets/CSS/colors';
import MapWeather from '../MapWeather/MapWeather';

interface LocationType {
  Ma: number;
  La: number;
}
interface Props {
  onSearchSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  myLocation: LocationType;
}

const MapSearch = ({ onSearchSubmitHandler, myLocation }: Props) => {
  const [search, setSearch] = useRecoilState(mapSearchValue);
  const [category, setCategory] = useRecoilState(mapCategoryValue);

  const searchValueChangeHandler = (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    setSearch(event.currentTarget.value);
    // setCategory('팝업스토어');
  };

  return (
    <Wrap>
      <form name="팝업스토어" onSubmit={onSearchSubmitHandler}>
        <VscIconWrap>
          <VscSearch size={20} color={COLORS.green}></VscSearch>
          <KeywordText>키워드</KeywordText>
        </VscIconWrap>
        <SearchInput
          onChange={searchValueChangeHandler}
          type="text"
          value={search}
          placeholder="주소, 팝업스토어 검색"
        />
      </form>
      <MapWeather myLocation={myLocation} />
    </Wrap>
  );
};

export default MapSearch;

const Wrap = styled.div`
  position: relative;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.orange5};
`;

const VscIconWrap = styled.div`
  position: absolute;
  left: 80px;
  top: 21%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const KeywordText = styled.span`
  color: ${COLORS.green};
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
  margin-top: 2px;
`;
const SearchInput = styled.input`
  padding: 0 0 0 150px;
  width: 250px;
  height: 40px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  background: #ffffff;
  border: 1px solid #88e25d;
  border-radius: 30px;
`;
