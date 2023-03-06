import { signOut } from 'firebase/auth';
import { auth } from '../../../services/firebase';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomModal from '../../../shared/CustomModal';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { kakaoAccessToken, modalStatus, userInfoState } from '../../../atoms';

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
  const [accessToken, setAccessToken] = useRecoilState(kakaoAccessToken);
  const reset = useResetRecoilState(userInfoState);
  const navigate = useNavigate();
  // 로그아웃 이벤트 + 카카오 로그아웃
  const SignOutClickHandler = async () => {
    const isLogout = await fetch('https://kapi.kakao.com/v1/user/logout', {
      headers: {
        //accessToken을 만료시킨다
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    }).then((res) => res.json());
    setAccessToken('');
    localStorage.removeItem('token_for_kakaotalk');
    signOut(auth);
    setIsModal({ ...isModal, logout: !isModal.logout });
    navigate('/');
    reset();
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
        {/* 헤더에 있는 로그아웃 버튼 */}
        <SignUpBtn onClick={modalStatusChangeHandler}>로그아웃</SignUpBtn>
      </TextBackground>
    </>
  );
};

export default Logout;
