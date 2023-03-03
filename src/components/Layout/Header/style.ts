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
  &.NavOn {
    background-color: #323232;
    top: 68px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    right: 0px;
    gap: 50px;
    width: 100%;
    height: 100vh;
    z-index: 999;
    margin-left: 50px;
  }
  &.NavOff {
    right: -300px;
  }
  @media screen and (max-width: 840px) {
    display: none;    
  }
`;

export const CategoryBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: -8px;
  border: none;
  background-color: transparent;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  @media screen and (max-width: 840px) {
    color: #fff;   
    top: 30px;
    /* width: 120px; */
    &:first-child{
      top: -25px;
    }
  }
`;

export const MapBtn = styled(CategoryBtn)`
  
  @media screen and (max-width: 840px) {
    color: #fff; 
  }`;
