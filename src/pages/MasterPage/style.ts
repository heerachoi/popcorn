import styled from 'styled-components';

export const MasterPageWrap = styled.div`
  /* max-width: 1040px;
  width: 100%;
  margin: 0 auto; */
`;

export const ReportListContainer = styled.div`
  box-sizing: border-box;
  max-width: 1040px;
  width: 100%;
  height: 730px;
  margin: 0 auto;
  border: 1px solid #9b9b9b;
  padding: 0 51px;
  border-radius: 8px;
  margin-top: 48px;
`;

export const TabMenu = styled.ul`
  padding: 0;
  margin: 0%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  /* border-bottom: 1px solid gray; */
`;
export const MenuTitleBox = styled.div``;
export const MenuTitleTabBtn = styled.button`
  background-color: transparent;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  display: block;
  border: none;
  color: black;
  text-decoration: none;

  cursor: pointer;

  &:focus {
    border-bottom: 2px solid #f2901d;
  }
`;

export const ContentBox = styled.div`
  margin-top: 10px;
`;
export const NewPostWriteBtnBox = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WriteBtn = styled.button`
  width: 180px;
  height: 50px;
  color: #f2901d;
  border-radius: 10px;
  background-color: #fff9d2;
  border: 2px solid #ffeb62;
  font-size: 18px;
  font-weight: 800;

  &:hover {
    cursor: pointer;
  }
`;
