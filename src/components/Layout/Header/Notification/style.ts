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
  /* background-color: aliceblue; */
`;

export const ModalWrapper = styled.div`
  /* z-index: 1050;
  width: 100%;
  height: 100%; */
  /* overflow-x: hidden; */
  /* overflow-y: auto; */
  /* outline: 0; */
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  border: none;
`;

export const ModalHolder = styled.div`
  /* z-index: 999; */
  background-color: ${COLORS.orange3};
  /* position: relative; */
  /* margin: 1.5rem auto; */
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
