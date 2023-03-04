import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const Wrap = styled.div`
  position: relative;
  height: 13%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.orange5};
`;

export const VscIconWrap = styled.div`
  position: absolute;
  left: 80px;
  top: 21%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const KeywordText = styled.span`
  color: ${COLORS.green};
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
  margin-top: 2px;
`;
export const SearchInput = styled.input`
  padding: 0 0 0 150px;
  width: 250px;
  height: 40px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  background: ${COLORS.white};
  border: 1px solid #88e25d;
  border-radius: 30px;
`;
