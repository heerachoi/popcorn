import styled from 'styled-components';
import { VscSearch } from 'react-icons/vsc';

const MapSearch = () => {
  return (
    <Wrap>
      <VscIconWrap>
        <VscSearch size={28}></VscSearch>
      </VscIconWrap>
      <SearchInput />
    </Wrap>
  );
};

export default MapSearch;

const Wrap = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VscIconWrap = styled.div`
  position: absolute;
  left: 70px;
  top: 35%;
`;
const SearchInput = styled.input`
  padding: 0 80px;
  width: 250px;
  height: 50px;
  border: 2px solid #205295;
  border-radius: 7px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
`;
