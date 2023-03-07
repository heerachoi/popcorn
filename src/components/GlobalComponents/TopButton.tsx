import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import {
//   PositionContainer,
//   TopBtn,
// } from "../../../styledComponenet/mainContent";

const TopButton = () => {
  // 버튼 상태
  const [BtnStatus, setBtnStatus] = useState(false);

  // Y축 스크롤 위치에 따라 Show || Hide 함수
  const onShowTopButton = () => {
    if (window.scrollY > 400) setBtnStatus(true);
    else setBtnStatus(false);
  };

  // 클릭시 맨 위로 가는 이벤트
  const onClickTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', onShowTopButton);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', onShowTopButton);
    };
  });

  return (
    <PositionContainer>
      {BtnStatus ? <TopBtn onClick={onClickTopHandler}>🔝</TopBtn> : null}
    </PositionContainer>
  );
};

export default TopButton;

// TopBtn.jsx

export const PositionContainer = styled.div`
  position: fixed;
  width: 95%;
  bottom: 95px;
  z-index: 1000;
`;

export const TopBtn = styled.button`
  position: fixed;
  right: 0;
  margin-right: 30px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: transparent;
  font-size: 40px;
  opacity: 0.3;
  cursor: pointer;
`;
