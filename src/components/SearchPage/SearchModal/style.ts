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
  opacity: .8;
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
  margin: .5rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
  background-color: aliceblue;
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
  display: flex;
  justify-content: center;
  margin-top: -0.8rem;  
`

export const FilterContainer = styled.div`
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
  display: flex;
  align-items: center;
  padding: 4px 16px 3px;
  gap: 8px;
  font-weight: 700;
  color: #fff;
  font-size: 16px;
  border-radius: 20px;
  background-color: ${props => props.active ? '#FFB321':'#676767'  };
  cursor : pointer ;
`

export const CloseButton = styled.button`
  border: none;
  font-size: 30px;
  background-color: transparent;
  color: #9B9B9B;
  cursor : pointer ;
  &:hover {
    color: #000;
  }
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
  box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 8px;

position: absolute;
width: 160px;
height: 40px;
left: calc(50% - 160px/2 + 88px);
bottom: 48px;

/* Grayscale/Gray4 */

background: #BDBDBD;
/* Grayscale/Gray3 */

border: 1px solid #9B9B9B;
border-radius: 8px;
`