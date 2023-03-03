import styled from 'styled-components';

const NotFound = () => {
  return (
    <ResultWarp>
      <ResultContainer>
        <ResultImg src={require('../assets/Img/Feel=Sad, Color=green.png')} />
        <ResultText>입력한 검색 내용이 없습니다!</ResultText>
      </ResultContainer>
    </ResultWarp>
  );
};

export default NotFound;

export const ResultWarp = styled.div``;

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

export const ResultText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;

export const ResultImg = styled.img``;
