import React from 'react'
import useModal from '../../hooks/useModal';
import ReactDOM from 'react-dom';
import {ModalWrapper, ModalContainer, ModalHolder, ModalHeader, FilterTitle} from './style';

const AlertModal = ({ isShowing, hide }: { isShowing: boolean, hide: () => void }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <ModalContainer>
      <ModalHolder>
        <ModalHeader>
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
           <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeader>
        <FilterTitle>
          북마크 하신 'RubberDuck'이 3일 뒤에 오픈합니다.
        </FilterTitle>
      </ModalHolder>
    </ModalContainer>
  </React.Fragment>, document.body
) : null;

export default AlertModal;




