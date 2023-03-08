import styled from 'styled-components';
import LoadingImg from '../../assets/Logo/Loading.svg';

const LoadingAnimation = () => {
  return (
    <Wrap>
      <img src={LoadingImg} />
    </Wrap>
  );
};

export default LoadingAnimation;

const Wrap = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
