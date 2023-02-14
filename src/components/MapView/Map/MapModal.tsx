import styled from 'styled-components';

const MapModal = () => {
  return (
    <Wrap>
      <ModalHeader>
        <ModalHeaderTitle>디올성수</ModalHeaderTitle>
        <ModalHeaderDescription>10km</ModalHeaderDescription>
      </ModalHeader>
      <ModalMain>
        <ModalMainImg
          src="https://firebasestorage.googleapis.com/v0/b/popcorn1-4b47e.appspot.com/o/Kauts%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-02-07%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.41.36.png?alt=media&token=a5580ae1-4662-4658-94ec-4bb152ce1fa0"
          alt="사진"
        />
        <ModalMainWrap>
          <ModalMainTextWrap>
            <ModalMainTitle>날짜</ModalMainTitle>
            <ModalMainText>주소</ModalMainText>
          </ModalMainTextWrap>
          <ModalMainBtn>디테일 페이지로 이동</ModalMainBtn>
        </ModalMainWrap>
      </ModalMain>
    </Wrap>
  );
};

export default MapModal;

const Wrap = styled.div`
  width: 500px;
  height: 200px;
  position: fixed;
  top: 60%;
  left: 57%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 999;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 20px;
`;

const ModalHeaderTitle = styled.span`
  font-size: 25px;
  font-weight: 600;
`;

const ModalHeaderDescription = styled.span``;

const ModalMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px 20px;
`;
const ModalMainImg = styled.img`
  width: 100px;
  height: 100px;
`;
const ModalMainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalMainTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalMainTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const ModalMainText = styled.span`
  font-size: 18;
  font-weight: 400;
`;
const ModalMainBtn = styled.button`
  border: none;
  cursor: pointer;
`;
