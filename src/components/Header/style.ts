import styled from 'styled-components';

export const Wrap = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #a6a6a6;
`;

export const Title = styled.button`
  cursor: pointer;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  border: none;
  background-color: rgba(255, 255, 255, 0);
`;

export const DummyBox = styled.div`
background-color: aliceblue`;

export const BtnWrap = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
`;

export const CategoryBtn = styled.button`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #323232;
  border-radius: 4px;
`;

export const MapBtn = styled(CategoryBtn)``;


// 알리 모달
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  `;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

export const ModalHolder = styled.div`
  z-index: 999;
  background-color: #fff;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`

export const ModalHeader = styled.div`
 display: flex;
  justify-content: flex-end;
`

export const LocationModalContent = styled.div`
`

export const CloseModal = styled.div`
  cursor: pointer;
  background-color: aliceblue;
`


// 위로 안쓸듯? 

export const FilterTitle = styled.h2`
`

export const FilterContainer = styled.div`
  border: 9px solid aliceblue;
  padding: 20px;
`

export const CategoryItemTitle = styled.h3`
`

export const CategoryItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-between;
`

export const CategoryItem = styled.div`
  /* width: 100%; */
  padding: 10px 20px;
  border: 9px solid aliceblue;
  margin-bottom: 10px;
  
`