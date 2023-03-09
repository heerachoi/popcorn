import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';
import COLORS from '../../../../assets/CSS/colors';

export const ModalContainer = styled.div`
  position: absolute;
  top: 57px;
  left: 44%;
  z-index: 999;
  width: 100vw;
  height: 100vh;
`;

export const ModalWrapper = styled.div`
  
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  border: none;
`;

export const ModalHolder = styled.div`
  background-color: ${COLORS.yellow1};
  border-radius: 3px;
  max-width: 300px;
  padding: 1rem;
`;

export const NotificationContent = styled.p``;
export const CloseButton = styled(CgClose)`
  border: none;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
