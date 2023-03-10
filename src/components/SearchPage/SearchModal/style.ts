import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';
import { CategoryItemProps } from '../../../types/modal/modalInterface';


export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.black};
  opacity: .8;
  overflow:hidden;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  outline: 0;
`

export const ModalHolder = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 4.5rem auto;
  border-radius: 3px;
  max-width: 700px;
  padding: 2rem;
  background-color: ${COLORS.gray8};
  border: 1px solid ${COLORS.gray7};
`

// Modal 
export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const LocationModalContent = styled.div`
`

export const CloseModal = styled.div`
  cursor: pointer;
  
`
export const FilterTitle = styled.p`
  display: flex;
  justify-content: center;
  margin-top: -24px; 
  margin-bottom: 39px;
  font-weight: 800;
  font-size: 32px;
  color: ${COLORS.gray1};
`

export const FilterContainer = styled.div`
  padding: 20px 30px 30px;
  margin-bottom: 52px;
`

export const CategoryItemTitle = styled.h3`
`

export const CategoryItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  gap: 20px;
`

export const CategoryButton = styled.div<CategoryItemProps>`
  display: flex;
  align-items: center;
  padding: 4px 16px 3px;
  gap: 8px;
  font-weight: 700;
  color: ${COLORS.white};
  font-size: 16px;
  border-radius: 20px;
  height: 40px;
  background-color: ${props => props.active ? `${COLORS.orange4}`:`${COLORS.gray3}` };
  cursor : pointer;
`

export const CloseButton = styled.button`
  border: none;
  font-size: 30px;
  background-color: transparent;
  color: ${COLORS.gray5};
  cursor : pointer ;
  &:hover {
    color: ${COLORS.black};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const CancelButton = styled.button`
  width: 160px;
  height: 40px;
  border: 1px solid ${COLORS.gray6};
  border-radius: 8px;
  font-size: 16px;
  background-color: ${COLORS.white};
  color: ${COLORS.gray5};
  cursor : pointer ;
  padding: 8px;
  &:hover {
   background-color:${COLORS.gray7};
  }
`

export const SubmitButton = styled(CancelButton)`
  border: 1px solid ${COLORS.gray5};
  color: ${COLORS.white};
  background: ${COLORS.gray6};
   &:hover {
   background-color:${COLORS.gray2};
   border: 1px solid ${COLORS.gray1};
  }
`