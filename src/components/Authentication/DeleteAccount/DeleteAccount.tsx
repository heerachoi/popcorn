import { deleteUser } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../services/firebase';
import styled from 'styled-components';
import { modalStatus } from '../../../atoms';
import { useRecoilState, useResetRecoilState } from 'recoil';
import CustomModal from '../../../shared/CustomModal';
import axios from 'axios';
import { JSON_API } from '../../../services/api';
import COLORS from '../../../assets/CSS/colors';

const DeleteAccount = () => {
  const [isModal, setIsModal] = useRecoilState(modalStatus);
  const modalStatusReset = useResetRecoilState(modalStatus);
  const navigate = useNavigate();
  const user = auth.currentUser;

  // 회원탈퇴 할 때 json-server에서 삭제해야하기 때문에 함수를 만듬
  const deleteDBUser = async () => {
    if (user) await axios.delete(`${JSON_API}/users/${user.uid}`);
    try {
      modalStatusChangeHandler('signoutComplete'); // 회원탈퇴 완료 모달   ❌ 실행안됨
    } catch (error) {
      console.log('알 수 없는 오류 발생');
    }
  };

  // 회원탈퇴 이벤트
  const deleteAccountClickHandler = async () => {
    if (user) {
      modalStatusReset();
      await deleteUser(user);
      try {
        deleteDBUser();
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  };
  const modalStatusChangeHandler = (error: string) => {
    setIsModal({ ...isModal, [error]: !isModal.error });
  };

  return (
    <>
      {isModal.signout && (
        <CustomModal
          title="회원탈퇴"
          text="회원탈퇴를 하면 정보를 되돌릴 수 없습니다. 정말로 하시겠습니까?"
          cancel="취소"
          submit="회원탈퇴"
          fnc={deleteAccountClickHandler}
        />
      )}
      {/* ❌ 실행 안됨 */}
      {isModal.signoutComplete && (
        <CustomModal
          title="알림"
          text="지금까지 팝콘을 이용해주셔서 감사합니다."
          cancel="취소"
          submit="확인"
          fnc={modalStatusChangeHandler}
        />
      )}
      <div>
        <DeleteAccountBtn onClick={() => modalStatusChangeHandler('signout')}>
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
