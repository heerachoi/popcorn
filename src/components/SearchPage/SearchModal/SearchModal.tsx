import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as S from './style';

// Interface
import { ButtonValue } from '../../../types/modal/modalInterface';
//Recoil
import { atom, useSetRecoilState } from 'recoil';
// Component
import { ModalButtonData } from '../../../utils/ModalButtonData/ModalButtonData';
import { ItemModalButtonData } from '../../../utils/ModalButtonData/ItemModalButtonData';
import { OtherModalButtonData } from '../../../utils/ModalButtonData/OtherModalButtonData';
// React Icons
import {CgClose} from 'react-icons/cg';
// util
import { checkForAllButton } from '../../../utils/Buttons';

const Modal = ({ isShowing, hide, value }: { isShowing: boolean, hide: () => void, value: string }) => {
  let buttonValues:ButtonValue[] = [];
  // 카테 고리별 눌러졌을때 불들어오게  
  if (value === '위치') {
    buttonValues = [
    { id: 1, label: '전체', active: false },
    { id: 2, label: '서울', active: false },
    { id: 3, label: '인천광역시', active: false },
    { id: 4, label: '울산광역시', active: false },
    { id: 5, label: '대전광역시', active: false },
    { id: 6, label: '광주광역시', active: false },
    { id: 7, label: '대구광역시', active: false },
    { id: 8, label: '부산광역시', active: false },
    { id: 9, label: '경상도', active: false },
    { id: 10, label: '충청도', active: false },
    { id: 11, label: '전라도', active: false },
    { id: 12, label: '강원도', active: false },
    { id: 13, label: '제주도', active: false },
  ];
} else if (value === '제품') {
   buttonValues = [
    { id: 1, label: '전체', active: false },
    { id: 2, label: '패션', active: false },
    { id: 3, label: '식음료', active: false },
    { id: 4, label: '캐릭터', active: false },
    { id: 5, label: '소품', active: false },
    { id: 6, label: '주류', active: false },
    { id: 7, label: '기타', active: false },
  ];
} else if (value === '기타') {
   buttonValues = [
    { id: 1, label: '전체', active: false },
    { id: 2, label: '10', active: false },
    { id: 3, label: '20', active: false },
    { id: 4, label: '30', active: false },
    { id: 5, label: '40+', active: false },
    { id: 6, label: 'women', active: false },
    { id: 7, label: 'men', active: false },
    { id: 8, label: '연령모름', active: false },
    { id: 9, label: '성별모름', active: false },
  ],[
    { id: 1, label: '전체', active: false },
    { id: 2, label: '백화점', active: false },
    { id: 3, label: '상권', active: false },
  ];
} 

  // 모달창 내부 값 설정
  const [buttons, setButtons] = useState<ButtonValue[]>(buttonValues);

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
        if (button.id === 1) {
          return {
            ...button,
            active: false
          }
        }
        else if (button.id === id) {
          return {
            ...button,
            active: !button.active
          };
        } 
        checkForAllButton(buttonValues);
        return button;
      })
      setButtons(updateFilter)
  }
}

const setLocationButtonData = useSetRecoilState(ModalButtonData);
const setItemButtonData = useSetRecoilState(ItemModalButtonData);
const setOtherButtonData = useSetRecoilState(OtherModalButtonData);

const closeModal = () => {
  const selectedButtons = buttons.filter((button) => button.active);
  if (value === '위치') {
    setLocationButtonData(selectedButtons);
  } else if(value === '제품') {
    setItemButtonData(selectedButtons);
  } else if (value === '기타') {
    setOtherButtonData(selectedButtons);
  }
  hide();
};

 return isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <S.ModalContainer/>
    <S.ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
      <S.ModalHolder>
        <S.ModalHeader>
          <S.CloseButton type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
           <span aria-hidden="true"><CgClose/></span>
          </S.CloseButton>
        </S.ModalHeader>
        <S.FilterTitle>
          {value} 카테고리
        </S.FilterTitle>
        <S.FilterContainer>        
          <S.CategoryItemContainer>
            {buttons.map(button =>(<S.CategoryButton key={button.id} active={button.active} onClick={() => buttonClickHandler(button.id)} >{button.label}</S.CategoryButton>))}
          </S.CategoryItemContainer>
        </S.FilterContainer>
        <S.ButtonContainer>
          <S.CancelButton onClick={closeModal}>취소하기</S.CancelButton>
          <S.SubmitButton onClick={closeModal}>적용하기</S.SubmitButton>
        </S.ButtonContainer>
      </S.ModalHolder>
    </S.ModalWrapper>
  </React.Fragment>, document.body
) : null;}

export default Modal;

