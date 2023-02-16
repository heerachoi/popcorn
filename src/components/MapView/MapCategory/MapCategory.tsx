import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { mapCategoryValue, mapSearchValue } from '../../../atoms';

interface Props {
  setMarkerHandler: (search: any) => void;
  onSearchSubmitHandler: any;
}

const MapCategory = ({ setMarkerHandler, onSearchSubmitHandler }: Props) => {
  const setcategory = useSetRecoilState(mapCategoryValue);
  const setSearch = useSetRecoilState(mapSearchValue);
  const search = useRecoilValue(mapSearchValue);

  const categoryChangeHandler = async (category: string) => {
    setcategory(category);
    // 클릭하면 setSearch가 되기 전에 setMarkerHandler에서 search값이 들어갔다.
    // 인자로 넘겨주니 해결되었다.
    // setSearch((prev) =>
    //   category !== '팝업스토어' ? prev + ' ' + category : prev.slice(-2, 0),
    // );
    console.log('category', category);
    console.log('search가 set되야됨', search);
    console.log('1초후에 실행됨');
    setMarkerHandler(`${search} ${category}`);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <Wrap>
      {/* <form onSubmit={onSubmit}> */}
      <CategoryBtn type="submit" onClick={() => categoryChangeHandler(' ')}>
        팝업스토어
      </CategoryBtn>
      <CategoryBtn
        type="submit"
        onClick={() => categoryChangeHandler('음식점')}
      >
        음식점
      </CategoryBtn>
      <CategoryBtn type="submit" onClick={() => categoryChangeHandler('카페')}>
        카페
      </CategoryBtn>
      {/* </form> */}
    </Wrap>
  );
};

export default MapCategory;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
`;

const CategoryBtn = styled.button`
  border: none;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;
