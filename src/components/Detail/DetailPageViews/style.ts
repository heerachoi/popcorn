import styled from 'styled-components';
import ApexChart from 'react-apexcharts';
import COLORS from '../../../assets/CSS/colors';

export const ApexChartContainer = styled(ApexChart)`
  width: 300px;
  height: 300px;
`;

export const GrapfWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const GrapfBox = styled.div`
  margin-top: 50px;
  width: 1000px;
  height: 300px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 575px) {
    margin: 110px 0;
    flex-direction: column;
  }
`;

export const GrapTitleBackground = styled.div`
  width: 145px;
  height: 18px;
  background-color: ${COLORS.yellow1};
  position: absolute;
  box-sizing: border-box;
  border-radius: 12px;
  text-align: center;
`;
export const GrapTitleText = styled.p`
  position: relative;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-top: -10px;
`;
