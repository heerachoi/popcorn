export const FormatDate = () => {
  return <div></div>;
};

/**
 * yyyymmdd 포맷으로 오늘 날짜를 받아오는 함수
 * @param today 오늘 날짜
 */
export const getTodayDate = () => {
    const currentDate = new Date();
    const year = String(currentDate.getFullYear());
    const month= String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const today = parseInt(year + month + day);
    return today
  }