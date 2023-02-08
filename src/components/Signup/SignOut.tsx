import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase';

const SignOut = () => {
  // 로그아웃 이벤트
  const SignOutClickHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      signOut(auth);
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
