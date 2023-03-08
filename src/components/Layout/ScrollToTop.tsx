import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // 브라우저가 렌더링을 완료한 후에 실행
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  /* 아래 코드는 홈페이지로 넘어갈 땐 적용 안됨 */
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return null;
};

export default ScrollToTop;
