import { useNavigate } from 'react-router-dom';
import Banner from '../../components/HomePage/Banner/Banner';
import HomePageList from '../../components/HomePage/HomePageList/HomePageList';
import TestPopupList from '../../components/HomePage/TestPopupList';

const HomePage: any = () => {
  const navigate = useNavigate();

  return (
    <>
      <Banner />
      {/* <HomePageList /> */}
      <TestPopupList />
      <button onClick={() => navigate('/signup')}>HomePage</button>
    </>
  );
};

export default HomePage;
