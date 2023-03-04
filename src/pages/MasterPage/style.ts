import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';
export const MasterPageWrap = styled.div``;

export const ReportListContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  height: 750px;
  margin: 0 auto;
  border: 1px solid ${COLORS.gray5};
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
  border-bottom: 2px solid ${COLORS.gray5}; ;
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
  color: ${COLORS.black};
  text-decoration: none;
  margin-top: 8px;
  padding-bottom: 15px;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #00c113;
    color: #00c113;
  }

  &:focus {
    border-bottom: 2px solid #00c113;
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
  color: #00c113;
  border-radius: 8px;
  background-color: #e7ffd8;
  border: 1px solid #88e25d;
  font-size: 18px;
  font-weight: 800;

  &:hover {
    cursor: pointer;
    background-color: #00c113;
    color: ${COLORS.white};
  }
`;
