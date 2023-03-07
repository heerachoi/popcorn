import { signOut } from 'firebase/auth';
import { auth } from '../../../services/firebase';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import CustomModal from '../../../shared/CustomModal';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { kakaoAccessToken, modalStatus, userInfoState } from '../../../atoms';

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
          onClick={SignOutClickHandler}
        />
      )}
      <S.TextBackground>
        <S.SignUpBtn onClick={modalStatusChangeHandler}>로그아웃</S.SignUpBtn>
      </S.TextBackground>
    </>
  );
};

export default Logout;
