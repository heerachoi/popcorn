import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer,ModalWrapper, ModalHolder,ModalHeader, FilterTitle,FilterContainer,CategoryItemTitle,CategoryItemContainer,CategoryButton,CloseModal } from './style';
import { atom, useSetRecoilState } from 'recoil';
import { ModalButtonData } from '../../../data/ModalButtonData/ModalButtonData';
interface CategoryItemProps {
  active: boolean;
}

const Modal = ({ isShowing, hide }: { isShowing: boolean, hide: () => void }) => {
  // 카테 고리별 눌러졌을때 불들어오게  
  // true 인 애들로 filter
  // true인 목록순서로, 전체에서 하나씩 차례로 걸로준다. 최종 남은 아이들이 있다면 
  // 뽁은 목록 search에 보내주기
 
  const [buttons, setButtons] = useState([
    { id: 1, label: '전체', active: false },
    { id: 2, label: '서울특별시', active: false },
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
      if (count > 0 ) {
        buttons[0].active = false;
        setButtons(buttons);
      } 
  }

  // 만약 전체가 true 일 경우 모두 true로 set
  // 전체 버튼이 아닌 다른 버튼이 click 될때 false로 되면 전체도 false
  const buttonClickHandler = (id:number) => {
    // console.log('id', id +" " + buttons[id-1].active);
    if (id === 1 && buttons[0].active === false) {
       const updateFilter = buttons.map(button => {
        return {
          ...button,
          active: true
        };
    })
    setButtons(updateFilter);
    }
    else {
      if (buttons[0].active === true) {
        buttons[0].active = false;
      }
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
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
           <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeader>
        <FilterTitle>
          추가 필터 옵션
        </FilterTitle>
        <FilterContainer>
          <CategoryItemTitle> 지역 선택 </CategoryItemTitle>
        
          <CategoryItemContainer>
            {buttons.map(button =>(<CategoryButton key={button.id} active={button.active} onClick={() => buttonClickHandler(button.id)} >{button.label}</CategoryButton>))}
          </CategoryItemContainer>
        </FilterContainer>
        <div onClick={handleSubmit}>확인</div>
      </ModalHolder>
    </ModalWrapper>
  </React.Fragment>, document.body
) : null;}

export default Modal;