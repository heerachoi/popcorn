const FormatDate = () => {
  return <div></div>;
};

export default FormatDate;

export const getTodayDate = () => {
  const currentDate = new Date();
  const year = String(currentDate.getFullYear());
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const today = parseInt(year + month + day);
  return today;
}