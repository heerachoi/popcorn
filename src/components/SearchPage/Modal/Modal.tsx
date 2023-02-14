import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer,ModalWrapper, ModalHolder,ModalHeader, FilterTitle,FilterContainer,CategoryItemTitle,CategoryItemContainer,CategoryItem } from './style';

const Modal = ({ isShowing, hide }: { isShowing: boolean, hide: () => void }) => isShowing ? ReactDOM.createPortal(
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
          <CategoryItemTitle> 백화점 선택 </CategoryItemTitle>
          <CategoryItemContainer>
            <CategoryItem>전체</CategoryItem>
            <CategoryItem>롯데백화점</CategoryItem>
            <CategoryItem>NC백화점</CategoryItem>
            <CategoryItem>신세계백화점</CategoryItem>
            <CategoryItem>갤러리아백화점</CategoryItem>
            <CategoryItem>현대백화점</CategoryItem>
          </CategoryItemContainer>
        </FilterContainer>
      </ModalHolder>
    </ModalWrapper>
  </React.Fragment>, document.body
) : null;

export default Modal;