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

  const [check, setCheck] = useState(false); // 현재 비밀번호를 check 하는 state
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
    await reauthenticateWithCredential(user!, credential!) // 사용자 재인증
      .then(() => {
        alert('인증이 완료되었습니다.');
        setCheck(true); // check가 false면 비밀번호 변경해도 현재 비밀번호를 인증하라는 알림이 뜸
      })
      .catch((error) => {
        if (error.message.includes('wrong-password')) {
          alert('비밀번호가 틀립니다. 확인 후 다시 입력해 주세요.'); // 유저의 비밀번호가 다를 때 뜨는 에러
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
        // 비밀번호 변경완료
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
    let regexPw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regexPw.test(event.target.value)) {
      setHelperPasswordInput({
        ...helperPasswordInput,
        updatePassword:
          '*비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.',
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
        updatePasswordCheck: '*비밀번호는가 다릅니다. 확인해주세요.',
      });
    } else {
      setHelperPasswordInput({
        ...helperPasswordInput,
        updatePasswordCheck: initHelperPasswordInput.updatePasswordCheck,
      });
    }
  };

  return (
    <>
      <S.EnterInputPasswordWrapper>
        <S.EnterInputPasswordText>현재 비밀번호</S.EnterInputPasswordText>
        <S.InputAndButtonContainer>
          <S.InputWithCheckButton
            value={passwordInput.password}
            type="password"
            name="password"
            onChange={passwordChangeHandler}
            placeholder={'현재 비밀번호를 입력하세요'}
          />
          <S.CheckButton
            onClick={firstPasswordCheck}
          >
            확인
          </S.CheckButton>
        </S.InputAndButtonContainer>
      </S.EnterInputPasswordWrapper>
      <S.EnterInputChangePasswordWrapper>
        <S.EnterInputChangePasswordText>
          비밀번호 <span style={{fontSize:'13px'}}>(대문자,소문자+숫자+특수문자 8자 이상)</span>
        </S.EnterInputChangePasswordText>
        <S.EnterInputChangePasswordInput
          value={passwordInput.updatePassword}
          type="password"
          name="updatePassword"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          placeholder={'새 비밀번호를 입력하세요'}
        />
        <S.WarningText>{helperPasswordInput.updatePassword}</S.WarningText>
      </S.EnterInputChangePasswordWrapper>

      <S.EnterInputCheckPasswordWrapper>
        <S.EnterInputCheckPasswordText>
          비밀번호 확인
        </S.EnterInputCheckPasswordText>
        <S.EnterInputChangePasswordInput
          value={passwordInput.updatePasswordCheck}
          type="password"
          name="updatePasswordCheck"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordCheckHandler}
          placeholder={'새 비밀번호를 한번 더 확인하세요'}
        />
        <S.WarningText>{helperPasswordInput.updatePasswordCheck}</S.WarningText>
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
    </>
  );
};

export default UpdatePassword;
