import { signOut } from 'firebase/auth';
import { auth } from '../../../services/firebase';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignUpBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: -8px;
  border: none;
  background-color: transparent;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const TextBackground = styled.div`
  width: 110px;
  height: 20px;
  background-color: #ffeb62;
  /* position: absolute; */
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
  &:hover {
    background-color: #ffb321;
  }
`;

const Logout = () => {
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

  return (
    <TextBackground>
      <SignUpBtn onClick={SignOutClickHandler}>로그아웃</SignUpBtn>
    </TextBackground>
  );
};

export default Logout;
