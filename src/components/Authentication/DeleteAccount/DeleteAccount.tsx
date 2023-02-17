import { deleteUser } from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../services/firebase';
import styled from 'styled-components';

const DeleteAccount = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  // 회원탈퇴 할 때 데이터베이스에서 삭제해야하기 때문에 함수를 만듦
  const deleteDocUser = async (id: any) => {
    try {
      await deleteDoc(doc(db, 'users', id));
    } catch (error) {
      alert(error);
    }
  };

  // 회원탈퇴 이벤트
  const deleteAccountClickHandler = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (user) {
      try {
        confirmAlert({
          title: '회원탈퇴',
          message:
            '회원탈퇴를 하면 정보를 되돌릴 수 없습니다. 정말로 하시겠습니까?',
          buttons: [
            {
              label: '확인',
              onClick: () => {
                deleteUser(user);
                deleteDocUser(user.uid);
                navigate('/');
              },
            },
            {
              label: '취소',
              onClick: () => {},
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={deleteAccountClickHandler}>
      <DeleteAccountBtn>회원탈퇴</DeleteAccountBtn>
    </form>
  );
};

export default DeleteAccount;

const DeleteAccountBtn = styled.button`
  margin: 5vh 15vh 1vh 15vh;
  width: 10%;
  height: 48px;
  left: 372px;
  top: 1157px;
  border: 1px solid #323232;
  border-radius: 8px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  background-color: transparent;
`;
