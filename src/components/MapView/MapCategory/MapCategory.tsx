import styled from 'styled-components';

const MapCategory = () => {
  return (
    <Wrap>
      <CategoryBtn>팝업스토어</CategoryBtn>
      <CategoryBtn>음식점</CategoryBtn>
      <CategoryBtn>카페</CategoryBtn>
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
