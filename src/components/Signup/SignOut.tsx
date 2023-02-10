import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignUpBtn = styled.button`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #323232;
  border-radius: 4px;
`;

const SignOut = () => {
  const navigate = useNavigate();

  // 로그아웃 이벤트
  const SignOutClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      confirmAlert({
        title: '로그아웃',
        message: '정말 로그아웃 하시겠습니까?',
        buttons: [
          {
            label: '확인',
            onClick: async () => {
              await signOut(auth);
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

  return <SignUpBtn onClick={SignOutClickHandler}>로그아웃</SignUpBtn>;
};

export default SignOut;
