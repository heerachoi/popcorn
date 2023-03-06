import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';
export const MasterPageWrap = styled.div``;

export const ReportListContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  height: 750px;
  margin: 0 auto;
  border: 1px solid ${COLORS.gray7};
  padding: 0 45px;
  border-radius: 8px;
  margin-top: 48px;
  background-color: ${COLORS.gray8};
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
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  display: block;
  border: none;
  color: ${COLORS.gray5};
  background-color: transparent;
  text-decoration: none;
  margin-top: 11px;
  padding-bottom: 15px;
  cursor: pointer;

  &.active {
    border-bottom: 4px solid ${COLORS.green1};
    color: ${COLORS.green1};
  }

  &:focus {
    border-bottom: 4px solid ${COLORS.green1};
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
  color: ${COLORS.green1};
  border-radius: 8px;
  background-color: #e7ffd8;
  border: 1px solid #88e25d;
  font-size: 18px;
  font-weight: 800;

  &:hover {
    cursor: pointer;
    background-color: ${COLORS.green1};
    color: ${COLORS.white};
  }
`;
