import { signOut } from 'firebase/auth';
import { auth } from '../../../services/firebase';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomModal from '../../../shared/CustomModal';
import { useRecoilState } from 'recoil';
import { modalStatus } from '../../../atoms';

const SignUpBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: -8px;
  border: none;
  background-color: transparent;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  @media screen and (max-width: 840px) {
    color: #fff;
    /* top: 30px; */
    /* width: 120px; */
    top: -30px;
  }
`;

export const TextBackground = styled.div`
  width: 110px;
  height: 20px;
  background-color: #ffeb62;
  /* position: absolute; */
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
  &:hover {
    background-color: #ffb321;
  }
  @media screen and (max-width: 840px) {
    width: 200px;
    background-color: #323232;
  }
`;

const Logout = () => {
  const [isModal, setIsModal] = useRecoilState(modalStatus);
  const navigate = useNavigate();
  // 로그아웃 이벤트
  const SignOutClickHandler = () => {
    signOut(auth);
    navigate('/');
    setIsModal({ ...isModal, logout: !isModal.logout });
  };

  // 로그아웃 클릭시 모달창
  const modalStatusChangeHandler = () => {
    setIsModal({ ...isModal, logout: !isModal.logout });
  };

  return (
    <>
      {isModal.logout && (
        <CustomModal
          title="로그아웃"
          text="정말 로그아웃 하시겠습니까?"
          cancel="취소"
          submit="로그아웃"
          fnc={SignOutClickHandler}
        />
      )}
      <TextBackground>
        <SignUpBtn onClick={modalStatusChangeHandler}>로그아웃</SignUpBtn>
      </TextBackground>
    </>
  );
};

export default Logout;
