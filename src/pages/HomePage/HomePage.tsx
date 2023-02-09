import { useNavigate } from 'react-router-dom';

const HomePage: any = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/signup')}>HomePage</button>
    </>
  );
};

export default HomePage;
