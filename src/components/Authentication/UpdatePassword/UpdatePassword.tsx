import { border } from '@mui/system';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../services/firebase';
import * as S from './style';
const UpdatePassword = () => {
  const initPasswordInput = {
    password: '',
    updatePassword: '',
    updatePasswordCheck: '',
  };

  const initHelperPasswordInput = {
    updatePassword: '',
    updatePasswordCheck: '',
  };

  const [check, setCheck] = useState(false);
  const [passwordInput, setPasswordInput] = useState(initPasswordInput);
  const [helperPasswordInput, setHelperPasswordInput] = useState(
    initHelperPasswordInput,
  );

  const user = auth?.currentUser;
  const email = auth?.currentUser?.email;

  //////// 현재 비밀번호를 확인하는 함수 ////////
  const firstPasswordCheck = async () => {
    const credential = EmailAuthProvider.credential(
      email!,
      passwordInput.password,
    );
    await reauthenticateWithCredential(user!, credential!)
      .then(() => {
        alert('인증이 완료되었습니다.');
        setCheck(true);
      })
      .catch((error) => {
        if (error.message.includes('wrong-password')) {
          alert('비밀번호가 틀립니다. 확인 후 다시 입력해 주세요.');
        }
      });
  };

  const checkHelperText = () => {
    const isUpdatePassword = helperPasswordInput.updatePassword !== '';
    const isUpdatePasswordCheck =
      helperPasswordInput.updatePasswordCheck !== '';
    return isUpdatePassword || isUpdatePasswordCheck;
  };

  //////// 비밀번호를 변경하는 함수 ////////
  const passwordCheckHandler = () => {
    if (checkHelperText()) {
      return alert('입력 정보를 확인해 주세요.');
    }
    if (
      check &&
      passwordInput.updatePassword === passwordInput.updatePasswordCheck &&
      passwordInput.updatePassword !== '' &&
      passwordInput.updatePasswordCheck !== ''
    ) {
      updatePassword(user!, passwordInput.updatePassword).then(() =>
        setCheck(false),
      );
    } else if (!check) {
      alert('현재 비밀번호 인증을 해주시길 바랍니다.');
    } else {
      alert('입력한 비밀번호가 다릅니다. 다시 확인 후 입력해 주세요.');
    }
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPasswordInput({
      ...passwordInput,
      [event.target.name]: event.target.value,
    });
  };

  //////// 유효성 검사 ////////
  const validatePasswordHandler = (
    event: React.FocusEvent<HTMLInputElement>,
  ) => {
    var regexPw =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regexPw.test(event.target.value)) {
      setHelperPasswordInput({
        ...helperPasswordInput,
        updatePassword:
          '비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.',
      });
    } else {
      setHelperPasswordInput({
        ...helperPasswordInput,
        updatePassword: initHelperPasswordInput.updatePassword,
      });
    }
  };

  const validatePasswordCheckHandler = () => {
    if (passwordInput.updatePassword !== passwordInput.updatePasswordCheck) {
      setHelperPasswordInput({
        ...helperPasswordInput,
        updatePasswordCheck: '비밀번호는가 다릅니다. 확인해주세요.',
      });
    } else {
      setHelperPasswordInput({
        ...helperPasswordInput,
        updatePasswordCheck: initHelperPasswordInput.updatePasswordCheck,
      });
    }
  };

  return (
    <div>
      <S.EnterInputPasswordWrapper>
        <S.EnterInputPasswordText>현재 비밀번호</S.EnterInputPasswordText>
        <S.EnterInputPassword
          value={passwordInput.password}
          type="password"
          name="password"
          onChange={passwordChangeHandler}
          placeholder={'현재 비밀번호를 입력하세요'}
        />
        <button
          onClick={firstPasswordCheck}
          style={{
            backgroundColor: 'transparent',
            cursor: 'pointer',
            border: '1px solid black',
          }}
        >
          비밀번호 확인
        </button>
      </S.EnterInputPasswordWrapper>
      <S.EnterInputChangePasswordWrapper>
        <S.EnterInputChangePasswordText>
          비밀번호 (대문자, 소문자+숫자+특수문자 8자 이상)
        </S.EnterInputChangePasswordText>
        <S.EnterInputChangePasswordInput
          value={passwordInput.updatePassword}
          type="password"
          name="updatePassword"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          placeholder={'새 비밀번호를 입력하세요'}
        />
        <div>{helperPasswordInput.updatePassword}</div>
      </S.EnterInputChangePasswordWrapper>

      <S.EnterInputCheckPasswordWrapper>
        <S.EnterInputCheckPasswordText>
          비밀번호 확인
        </S.EnterInputCheckPasswordText>
        <S.EnterInputCheckPasswordInput
          value={passwordInput.updatePasswordCheck}
          type="password"
          name="updatePasswordCheck"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordCheckHandler}
          placeholder={'새 비밀번호를 한번 더 확인하세요'}
        />
        <div>{helperPasswordInput.updatePasswordCheck}</div>
        <button
          onClick={passwordCheckHandler}
          style={{
            backgroundColor: 'transparent',
            cursor: 'pointer',
            border: '1px solid black',
          }}
        >
          비밀번호 변경
        </button>
      </S.EnterInputCheckPasswordWrapper>
    </div>
  );
};

export default UpdatePassword;
