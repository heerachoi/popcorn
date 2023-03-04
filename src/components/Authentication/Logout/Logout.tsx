import { signOut } from 'firebase/auth';
import { auth } from '../../../services/firebase';
import { useRecoilState } from 'recoil';
import { modalStatus } from '../../../atoms';
import { useNavigate } from 'react-router-dom';
import CustomModal from '../../../shared/CustomModal';
import * as S from './style';

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
      <S.TextBackground>
        <S.SignUpBtn onClick={modalStatusChangeHandler}>로그아웃</S.SignUpBtn>
      </S.TextBackground>
    </>
  );
};

export default Logout;
