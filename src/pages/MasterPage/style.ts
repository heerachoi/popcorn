import styled from 'styled-components';

export const MasterPageWrap = styled.div``;

export const ReportListContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  height: 750px;
  margin: 0 auto;
  border: 1px solid #9b9b9b;
  padding: 0 45px;
  border-radius: 8px;
  margin-top: 48px;
  background-color: #f5f5f5;
`;

export const TabMenu = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 10px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  border-bottom: 2px solid #9B9B9B;
`;
export const MenuTitleBox = styled.div``;
export const MenuTitleTabBtn = styled.button`
  width: 520px;
  background-color: transparent;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  display: block;
  border: none;
  color: black;
  text-decoration: none;
  margin-top: 8px;
  padding-bottom: 15px;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #f2901d;
    color: #f2901d;
  }

  &:focus {
    border-bottom: 2px solid #f2901d;
  }
`;

export const ContentBox = styled.div`
  margin-top: 26px;
`;

export const NewPostWriteBtnBox = styled.div`
  margin-top: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WriteBtn = styled.button`
  width: 408px;
  height: 60px;
  color: #f2901d;
  border-radius: 8px;
  background-color: #fff9d2;
  border: 1px solid #ffeb62;
  font-size: 18px;
  font-weight: 800;

  &:hover {
    cursor: pointer;
    background-color: #f2901d;
    color: #fff9d2;
  }
`;
