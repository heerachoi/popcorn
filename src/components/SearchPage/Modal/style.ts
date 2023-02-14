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


// 위로 안쓸듯? 

export const FilterTitle = styled.h2`
`

export const FilterContainer = styled.div`
  border: 9px solid aliceblue;
  padding: 20px;
`

export const CategoryItemTitle = styled.h3`
`

export const CategoryItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-between;
`

export const CategoryItem = styled.div`
  /* width: 100%; */
  padding: 10px 20px;
  border: 9px solid aliceblue;
  margin-bottom: 10px;
  
`