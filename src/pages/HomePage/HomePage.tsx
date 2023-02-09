import Banner from '../../components/HomePage/Banner/Banner';
import HomePageList from '../../components/HomePage/HomePageList/HomePageList';
import SignUp from '../../components/Signup/SignUp';

const HomePage: any = () => {
  return (
    <>
      <SignUp />
      <Banner />
      <HomePageList />
    </>
  );
};

export default HomePage;
