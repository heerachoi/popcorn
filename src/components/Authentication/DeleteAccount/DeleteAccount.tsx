// library
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { modalStatus } from '../../../atoms';
import { useRecoilState, useResetRecoilState } from 'recoil';
// firebase
import { deleteUser } from 'firebase/auth';
import { auth } from '../../../services/firebase';
// component
import CustomModal from '../../../shared/CustomModal';
// api
import { JSON_API } from '../../../services/api';
// style
import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

const DeleteAccount = () => {
  const [isModal, setIsModal] = useRecoilState(modalStatus);
  const modalStatusReset = useResetRecoilState(modalStatus);
  const navigate = useNavigate();
  const user = auth.currentUser;

  // 회원탈퇴 할 때 json-server에서 삭제해야하기 때문에 함수를 만듬
  const deleteDBUser = async () => {
    if (user) {
      await axios.delete(`${JSON_API}/users/${user.uid}`);
      openModalClickHandler('signoutComplete'); // 회원탈퇴 완료 모달   ❌ 실행안됨
    }
  };

  // 회원탈퇴 이벤트
  const deleteAccountClickHandler = async () => {
    if (user) {
      try {
        modalStatusReset();
        await deleteUser(user);
        deleteDBUser();
        navigateHome();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const navigateHome = () => {
    navigate('/');
  };

  const closeModalClickHandler = (message: string) => {
    setIsModal({ ...isModal, [message]: false });
  };

  const openModalClickHandler = (message: string) => {
    setIsModal({ ...isModal, [message]: true });
  };

  return (
    <>
      {isModal.signout && (
        <CustomModal
          title="회원탈퇴"
          text="회원탈퇴를 하면 정보를 되돌릴 수 없습니다. 정말로 하시겠습니까?"
          cancel="취소"
          submit="회원탈퇴"
          onClick={deleteAccountClickHandler}
        />
      )}
      {isModal.signoutComplete && (
        <CustomModal
          title="알림"
          text="지금까지 팝콘을 이용해주셔서 감사합니다."
          cancel="취소"
          submit="확인"
          onClick={closeModalClickHandler}
        />
      )}
      <div>
        <DeleteAccountBtn onClick={() => openModalClickHandler('signout')}>
          회원탈퇴
        </DeleteAccountBtn>
      </div>
    </>
  );
};

export default DeleteAccount;

const DeleteAccountBtn = styled.button`
  cursor: pointer;
  padding: 8px;
  width: 122px;
  height: 44px;
  border: 1px solid ${COLORS.gray5};
  border-radius: 8px;
  font-size: 16px;
  color: ${COLORS.white};
  background-color: ${COLORS.gray6};
`;
