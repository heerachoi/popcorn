import * as S from './style';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../../services/firebase';
import { AiFillLeftCircle } from 'react-icons/ai';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { modalStatus } from '../../../atoms';
import CustomModal from '../../../shared/CustomModal';
import KakaoLogin from './KakaoLogin';

interface SignInInput {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { state: signUpEmail } = useLocation(); // 회원가입 할 때 email
  const [isModal, setIsModal] = useRecoilState(modalStatus);
  const modalStatusReset = useResetRecoilState(modalStatus);

  const initSignInInput = {
    email: signUpEmail,
    password: '',
  };

  const initHelperTextSignUpInput = {
    email: '',
    password: '',
  };

  const [signInInput, setSignInInput] = useState<SignInInput>(initSignInInput);
  const [helperText, setHelperText] = useState<SignInInput>(
    initHelperTextSignUpInput,
  );

  // 모달
  const modalStatusChangeHandler = (error: string) => {
    setIsModal({ ...isModal, [error]: !isModal.error });
  };
  const modalReset = () => {
    modalStatusReset();
  };

  const loginComplete = async () => {
    navigate('/');
    modalStatusReset();
  };

  const signInInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSignInInput({
      ...signInInput,
      [event.target.name]: event.target.value,
    });
  };

  // x 버튼 클릭시 input창 리셋
  const signInInputReset = (event: React.MouseEvent<HTMLDivElement>) => {
    setSignInInput({
      ...signInInput,
      [event.currentTarget.className]: '',
    });
  };

  // 로그인 이벤트
  const signInClickHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (signInInput.email === '' || signInInput.password === '')
      modalStatusChangeHandler('loginError');
    await signInWithEmailAndPassword(
      auth,
      signInInput.email,
      signInInput.password,
    )
      .then((res) => {
        console.log('res', res); // res.idtoken을 크롬 브라우저 쿠키에 set해주고, 토큰 아이디가 쿠키에 남아있으면 로그인 상태를 확인해줌
        modalStatusChangeHandler('login');
      })
      .catch((error: any) => {
        if (error.message.includes('user-not-found'))
          modalStatusChangeHandler('userNotFound');
        if (error.message.includes('wrong-password'))
          modalStatusChangeHandler('wrongPassword');
      });
  };

  const validateEmail = (event: React.FocusEvent<HTMLInputElement>) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!regExp.test(event.target.value)) {
      setHelperText({ ...helperText, email: '이메일 형식을 기입해주세요.' });
    } else {
      setHelperText({ ...helperText, email: initHelperTextSignUpInput.email });
    }
  };

  const validatePassword = (event: React.FocusEvent<HTMLInputElement>) => {
    var regexPw =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regexPw.test(event.target.value)) {
      setHelperText({
        ...helperText,
        password: '8자 이상, 대/소문자,숫자,특수문자를 포함해야 합니다.',
      });
    } else {
      setHelperText({
        ...helperText,
        password: initHelperTextSignUpInput.password,
      });
    }
  };

  return (
    <S.Wrap>
      <S.LoginImgWrap>
        <S.LoginImg
          src={require('../../../assets/Logo/Frame_59.png')}
          alt="로그인 Logo"
        />
      </S.LoginImgWrap>
      <S.TitleWrap>
        <S.TextBackground>
          <S.Title>로그인</S.Title>
        </S.TextBackground>
      </S.TitleWrap>
      <S.FormWrap onSubmit={signInClickHandler}>
        {/* 이메일 전체 지우기 버튼 */}
        {signInInput.email && (
          <div
            style={{ cursor: 'pointer' }}
            className="email"
            onClick={signInInputReset}
          >
            <S.CancleIcon size={18} />
          </div>
        )}
        <S.FormInput
          placeholder="아이디를 입력해 주세요."
          value={signInInput.email}
          name="email"
          type="text"
          onChange={signInInputChangeHandler}
          onBlur={validateEmail}
        />
        <S.HelperText>{helperText.email}</S.HelperText>
        {signInInput.password && (
          <div
            style={{ cursor: 'pointer' }}
            className="password"
            onClick={signInInputReset}
          >
            <S.CancleIcon size={18} />
          </div>
        )}
        <S.FormInput
          placeholder="비밀번호를 입력해 주세요."
          value={signInInput.password}
          name="password"
          type="password"
          onChange={signInInputChangeHandler}
          onBlur={validatePassword}
          autoFocus={signInInput.email ? true : false}
        />
        <S.HelperText>{helperText.password}</S.HelperText>
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.FormBtnWrap onClick={() => navigate('/')}>
          <AiFillLeftCircle style={{ color: '#9b9b9b' }} size={18} />
          <S.NavigateBtn style={{ cursor: 'pointer' }}>
            홈으로 이동
          </S.NavigateBtn>
        </S.FormBtnWrap>
        <S.FormSignWrap>
          <S.NavigateBtn as="span">아직 회원이 아니신가요?</S.NavigateBtn>
          <S.SignUpBtn onClick={() => navigate('/signup')}>
            회원가입
          </S.SignUpBtn>
          <KakaoLogin />
        </S.FormSignWrap>
      </S.FormWrap>
      {isModal.login && (
        <CustomModal
          title="로그인"
          text="로그인이 완료되었습니다."
          cancel="취소"
          submit="확인"
          fnc={loginComplete}
        />
      )}
      {isModal.loginError && (
        <CustomModal
          title="오류"
          text="빈 칸을 입력해 주세요."
          cancel="취소"
          submit="확인"
          fnc={modalReset}
        />
      )}
      {isModal.userNotFound && (
        <CustomModal
          title="오류"
          text="회원가입이 되지 않은 이메일입니다."
          cancel="취소"
          submit="확인"
          fnc={modalReset}
        />
      )}
      {isModal.wrongPassword && (
        <CustomModal
          title="오류"
          text="비밀번호가 틀렸습니다. 다시 확인해주세요."
          cancel="취소"
          submit="확인"
          fnc={modalReset}
        />
      )}
    </S.Wrap>
  );
};

export default Login;
