import styled from 'styled-components';

export const CustomerCenterWrap = styled.div``;

export const CustomerCenterTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 0;
`;

export const TitleText = styled.h1`
  
`

export const CustomerCenterContainer = styled.div`
  /* box-sizing: border-box; */
  max-width: 1040px;
  width: 100%;
  height: 620px;
  margin: 0 auto;
`;

export const TabMenu = styled.ul`
  padding: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  
`;

export const MenuTitleTabBtn = styled.button`
  background-color: #f6f6f6;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  display: block;
  border: 1px solid #e0e0e0;
  color: black;
  /* text-shadow: 0 1px 0 rgba(255, 255, 255, 0.75); */
  padding: 6px 18px;
  margin: 0 5px -1px 0;
  
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-decoration: none;

  cursor: pointer;

  &:focus,
  &.active {
    background-color: navy;
    color: white;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: beige; */
`;
