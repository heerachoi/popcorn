import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { atom, useSetRecoilState } from 'recoil';
import { ModalButtonData } from '../../../data/ModalButtonData/ModalButtonData';
import {CgClose} from 'react-icons/cg'
import { CategoryItemProps } from '../../../types/modal/modalInterface';

const categoryMoodal = ({ isShowing, hide, value }: { isShowing: boolean, hide: () => void, value: string}) => {
  // 카테 고리별 눌러졌을때 불들어오게  
  // true 인 애들로 filter
  // true인 목록순서로, 전체에서 하나씩 차례로 걸로준다. 최종 남은 아이들이 있다면 
  // 뽁은 목록 search에 보내주기
 
  const [buttons, setButtons] = useState([
    { id: 1, label: '전체', active: false },
    { id: 2, label: '10', active: false },
    { id: 3, label: '20', active: false },
    { id: 4, label: '30', active: false },
    { id: 5, label: '40+', active: false },
    { id: 6, label: '여성', active: false },
    { id: 7, label: '남성', active: false },
  ]);

    const [departmentButtons, setDepartmentButtons] = useState([
    { id: 1, label: '전체', active: false },
    { id: 2, label: '백화점', active: false },
    { id: 3, label: '상권', active: false },
  ]);
  
  // 버튼이 한개라도 false이면 전체도 false 상태가 된다.
  const checkForAllButton = () =>
  {
      let count = 0;
      buttons.map(button => {
        if (button.active === false && button.id !== 1) {
          count++;
        }
      })  
      console.log(count)
      if (count == 0 ) {
        buttons[0].active = false;
        setButtons(buttons);
      } 
  }

  // 만약 전체가 true 일 경우 모두 true로 set
  // 전체 버튼이 아닌 다른 버튼이 click 될때 false로 되면 전체도 false
  const buttonClickHandler = (id:number) => {
    if (id === 1 && buttons[0].active === false) {
       const updateFilter = buttons.map(button => {
        return {
          ...button,
          active: true
        };
    })
    setButtons(updateFilter);
    } else if (id === 1 && buttons[0].active === true) {
       const updateFilter = buttons.map(button => {
        return {
          ...button,
          active: false
        };
    })
    setButtons(updateFilter);
    }
    else {
      
      const updateFilter = buttons.map(button => {
        if (button.id === id) {
          return {
            ...button,
            active: !button.active
          };
        } 
        checkForAllButton();
        return button;
      })
      setButtons(updateFilter)
  }
}

const setLocationButtonData = useSetRecoilState(ModalButtonData);

const handleSubmit = () => {
    const selectedButtons = buttons.filter((button) => button.active);
    setLocationButtonData(selectedButtons);
    hide();
  };

 return isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <ModalContainer/>
    <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
      <ModalHolder>
        <ModalHeader>
          <CloseButton type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
           <span aria-hidden="true"><CgClose/></span>
          </CloseButton>
        </ModalHeader>
        <FilterTitle>
          지역 선택
        </FilterTitle>
        <FilterContainer>        
          <CategoryItemContainer>
            {buttons.map(button =>(<CategoryButton key={button.id} active={button.active} onClick={() => buttonClickHandler(button.id)} >{button.label}</CategoryButton>))}
          </CategoryItemContainer>
        </FilterContainer>
        <ButtonContainer>
          <CancelButton onClick={handleSubmit}>취소하기</CancelButton>
          <SubmitButton onClick={handleSubmit}>적용하기</SubmitButton>
        </ButtonContainer>
      </ModalHolder>
    </ModalWrapper>
  </React.Fragment>, document.body
) : null;}

export default categoryMoodal;


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

const ModalHolder = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 700px;
  padding: 2rem;
`

// Modal 
const ModalHeader = styled.div`
 display: flex;
  justify-content: flex-end;
`

const LocationModalContent = styled.div`
`

const CloseModal = styled.div`
  cursor: pointer;
`

const FilterTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: -20px;
`

const FilterContainer = styled.div`
  /* border: 1px solid #A6A6A6; */
  border-radius: 8px;
  padding: 20px 30px 30px;
  box-sizing: border-box;
`

const CategoryItemTitle = styled.h3`
`

const CategoryItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  gap: 20px;
  /* justify-content: space-between; */
`

const CategoryButton = styled.div<CategoryItemProps>`
  /* width: 100%; */
  padding: 10px 20px;
  border: 1px solid #A6A6A6;
  border-radius: 20px;
  margin-bottom: 10px;
  background-color: ${props => props.active ? '#A6A6A6': 'tranparent' };
  cursor : pointer ;
`

const CloseButton = styled.button`
  border: none;
  font-size: 30px;
  background-color: transparent;
  cursor : pointer ;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const CancelButton = styled.button`
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
const SubmitButton = styled(CancelButton)`
`




