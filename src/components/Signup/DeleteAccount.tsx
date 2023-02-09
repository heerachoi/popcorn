import { deleteUser } from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { auth, db } from '../../firebase';

const DeleteAccount = () => {
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
        deleteUser(user);
        deleteDocUser(user.uid);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={deleteAccountClickHandler}>
      <button>회원탈퇴</button>
    </form>
  );
};

export default DeleteAccount;
