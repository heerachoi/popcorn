import styled from 'styled-components';

export const ModalContainer = styled.div`
  /* width: 1000px;
  box-sizing: border-box;
  padding: 40px;
  background-color: #000;
  border: 2px solid black;
  z-index: 9999; */
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
  background-color: aliceblue;
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

interface CategoryItemProps {
  active: boolean;
}
export const CategoryButton = styled.div<CategoryItemProps>`
  /* width: 100%; */
  padding: 10px 20px;
  border: 1px solid #9AF8FF;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.active ? '#E4FDFF':'tranparent'  };
  cursor : pointer ;
`