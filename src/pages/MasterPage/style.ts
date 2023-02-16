import styled from 'styled-components';

export const MasterPageWrap = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
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
  border-radius: 10px;
  background-color: transparent;
  border: 2px solid gray;
  font-size: 18px;
  font-weight: 800;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;
export const ReportListContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  height: 700px;
  margin: 0 auto;
  /* background-color: beige; */
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 5px;
  border-radius: 8px;
  margin-top: 48px;
`;

export const TabMenu = styled.ul`
  padding: 0;
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
  padding: 6px 18px;
  margin: 0 5px -1px 0;

  text-decoration: none;

  cursor: pointer;

  &:hover {
    border-bottom: 2px solid navy;
  }
`;

export const ContentBox = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */

  /* background-color: beige; */
`;
