import styled from 'styled-components';

export const Wrap = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.button`
  cursor: pointer;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  border: none;
  background-color: transparent;
`;

export const DummyBox = styled.div``;

export const BtnWrap = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-around;
`;

export const CategoryBtn = styled.button`
  cursor: pointer;
  font-size: 20px;
  position: relative;
  /* left: 8px; */
  top: -8px;
  border: none;
  background-color: transparent;
`;

export const MapBtn = styled(CategoryBtn)``;
