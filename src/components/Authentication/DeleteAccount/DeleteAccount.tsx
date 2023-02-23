import { deleteUser } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../services/firebase';
import styled from 'styled-components';
import { modalStatus } from '../../../atoms';
import { useRecoilState, useResetRecoilState } from 'recoil';
import CustomModal from '../../../shared/CustomModal';
import axios from 'axios';

const DeleteAccount = () => {
  const [isModal, setIsModal] = useRecoilState(modalStatus);
  const modalStatusReset = useResetRecoilState(modalStatus);
  const navigate = useNavigate();
  const user = auth.currentUser;

  // 회원탈퇴 할 때 json-server에서 삭제해야하기 때문에 함수를 만듬
  const deleteDBUser = async () => {
    if (user) await axios.delete(`http://localhost:4000/users/${user.uid}`);
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

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  position: absolute;
  width: 33%;
  height: 48px;
  left: 53%;
  top: 971px;

  /* Grayscale/Gray1 */

  border: 1px solid #9b9b9b;
  border-radius: 8px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  /* Grayscale/Gray1 */

  color: #ffffff;
  background-color: #bdbdbd;
`;
