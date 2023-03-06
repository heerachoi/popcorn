import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';

interface Props {
  mapModal: boolean;
}

export const Wrap = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
`;

export const MapWrap = styled.div`
  width: 100%;
  height: 100%;
  margin-left: ${(props: Props) => (props.mapModal ? '300px' : '0px')};
`;

export const DetailBoxWrap = styled.div`
  height: 100%;
  position: relative;
`;

export const CloseDetailBox = styled.div`
  position: absolute;
  top: 45%;
  left: 400px;
  z-index: 999;
  width: 35px;
  height: 80px;
  background-color: ${COLORS.white};
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CloseButtonImg = styled.img`
  width: 20px;
  height: 20px;
`;
