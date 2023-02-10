import axios from 'axios';

export const getDetailData = async () => {
  const { data } = await axios.get('http://localhost:3010/Store');
  return data;
};
