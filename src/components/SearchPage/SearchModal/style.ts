import styled from 'styled-components';
import { CategoryItemProps } from '../../../types/modal/modalInterface';


export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

export const ModalHolder = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
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

export const FilterTitle = styled.h2`
  padding-bottom: 20px;
`

export const FilterContainer = styled.div`
  border: 2px solid #9AF8FF;
  padding: 20px 30px 30px;
  box-sizing: border-box;

`

export const CategoryItemTitle = styled.h3`
`

export const CategoryItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  gap: 20px;
  /* justify-content: space-between; */
`

export const CategoryButton = styled.div<CategoryItemProps>`
  /* width: 100%; */
  padding: 10px 20px;
  border: 1px solid #9AF8FF;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.active ? '#E4FDFF':'tranparent'  };
  cursor : pointer ;
`

export const CloseButton = styled.button`
  border: none;
  font-size: 30px;
  background-color: transparent;
  cursor : pointer ;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const CancelButton = styled.button`
  width: 200px;
  height: 60px;
  border: 1px solid #323232;
  border-radius: 8px;
  font-size: 16px;
  background-color: transparent;
  cursor : pointer ;
  &:hover {
   background-color: #323232;
   color: #fff;
  }
`

export const SubmitButton = styled(CancelButton)`
`