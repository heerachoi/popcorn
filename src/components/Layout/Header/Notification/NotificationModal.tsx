import React from 'react'
import * as S from './style';
import ReactDOM from 'react-dom';

const AlertModal = ({ isShowing, hide }: { isShowing: boolean, hide: () => void }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <S.ModalContainer>
      <S.ModalHolder>
        <S.ModalHeader>
         <S.CloseButton onClick={hide}/>       
        </S.ModalHeader>
        <S.NotificationContent>
          'RubberDuck'이 3일 뒤에 오픈합니다.
        </S.NotificationContent>
      </S.ModalHolder>
    </S.ModalContainer>
  </React.Fragment>, document.body
) : null;

export default AlertModal;




