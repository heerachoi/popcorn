import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { mapCategoryValue, mapSearchValue } from '../../../atoms';
import FoodList from './FoodList';

interface Props {
  setMarkerHandler: (search: any, category: any) => void;
  setMyLocation: any;
}

const DetailBox = ({ setMarkerHandler, setMyLocation }: Props) => {
  const setcategory = useSetRecoilState(mapCategoryValue);
  const search = useRecoilValue(mapSearchValue);

  const categoryChangeHandler = async (category: string) => {
    setcategory(category);
    // 1. 클릭하면 setSearch가 되기 전에 setMarkerHandler에서 search값이 들어갔다. 인자로 넘겨주니 해결되었다.
    // 2. 팝업스토어 카테고리 클릭하면 위치 NaN됨 if문으로 팝업스토어 일때는 search 값으로만 검색되게 하였다.
    if (category === '팝업스토어') setMarkerHandler(search, category);
    else setMarkerHandler(`${search} ${category}`, category);
  };

  return (
    <DetailBoxWrap>
      <CategoryBtn
        type="submit"
        onClick={() => categoryChangeHandler('음식점')}
      >
        음식점
      </CategoryBtn>
      <CategoryBtn type="submit" onClick={() => categoryChangeHandler('카페')}>
        카페
      </CategoryBtn>
      <FoodList setMyLocation={setMyLocation} />
    </DetailBoxWrap>
  );
};

export default DetailBox;

const DetailBoxWrap = styled.div``;

const CategoryBtn = styled.button`
  border: none;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;