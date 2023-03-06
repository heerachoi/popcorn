import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const MapInfoBox = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: ${COLORS.white};
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 12px;
`;

export const ModalHeaderTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

export const CloseIcon = styled.span`
  font-size: 13px;
  color: ${COLORS.gray5};
`;
