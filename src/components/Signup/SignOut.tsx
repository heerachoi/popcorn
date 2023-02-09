import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  // 로그아웃 이벤트
  const SignOutClickHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      confirmAlert({
        title: '로그아웃',
        message: '정말 로그아웃 하시겠습니까?',
        buttons: [
          {
            label: '확인',
            onClick: () => {
              signOut(auth);
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
  };

  return (
    <form onSubmit={SignOutClickHandler}>
      <button>로그아웃</button>
    </form>
  );
};

export default SignOut;
