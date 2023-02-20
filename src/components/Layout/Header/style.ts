import styled from 'styled-components';

export const Wrap = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.img`
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    opacity: 0;
  }
`;

export const DummyBox = styled.div``;

export const BtnWrap = styled.div`
  width: 700px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
`;

export const CategoryBtn = styled.button`
  cursor: pointer;
  position: relative;
  /* left: 8px; */
  top: -8px;
  border: none;
  background-color: transparent;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const MapBtn = styled(CategoryBtn)``;
