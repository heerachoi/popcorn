import styled from 'styled-components';

const MapDataCard = () => {
  return (
    <>
      <Wrap>
        <div>
          <DetailWrap>
            <DetailTitle>디올성수</DetailTitle>
            <DetailDescription>의류판매</DetailDescription>
          </DetailWrap>
          <DetailAddressWrap>
            <DetailAddress>
              서울 강서구 공항대로 81길 김포국제공항롯데몰 롯데시네마
              주차장(A-1구역)
            </DetailAddress>
          </DetailAddressWrap>
        </div>
        <div>
          <DetailImg
            src="https://firebasestorage.googleapis.com/v0/b/popcorn1-4b47e.appspot.com/o/Kauts%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-02-07%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.41.36.png?alt=media&token=a5580ae1-4662-4658-94ec-4bb152ce1fa0"
            alt="사진"
          />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <DetailWrap>
            <DetailTitle>디올성수</DetailTitle>
            <DetailDescription>의류판매</DetailDescription>
          </DetailWrap>
          <DetailAddressWrap>
            <DetailAddress>
              서울 강서구 공항대로 81길 김포국제공항롯데몰 롯데시네마
              주차장(A-1구역)
            </DetailAddress>
          </DetailAddressWrap>
        </div>
        <div>
          <DetailImg
            src="https://firebasestorage.googleapis.com/v0/b/popcorn1-4b47e.appspot.com/o/Kauts%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-02-07%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.41.36.png?alt=media&token=a5580ae1-4662-4658-94ec-4bb152ce1fa0"
            alt="사진"
          />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <DetailWrap>
            <DetailTitle>디올성수</DetailTitle>
            <DetailDescription>의류판매</DetailDescription>
          </DetailWrap>
          <DetailAddressWrap>
            <DetailAddress>
              서울 강서구 공항대로 81길 김포국제공항롯데몰 롯데시네마
              주차장(A-1구역)
            </DetailAddress>
          </DetailAddressWrap>
        </div>
        <div>
          <DetailImg
            src="https://firebasestorage.googleapis.com/v0/b/popcorn1-4b47e.appspot.com/o/Kauts%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-02-07%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.41.36.png?alt=media&token=a5580ae1-4662-4658-94ec-4bb152ce1fa0"
            alt="사진"
          />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <DetailWrap>
            <DetailTitle>디올성수</DetailTitle>
            <DetailDescription>의류판매</DetailDescription>
          </DetailWrap>
          <DetailAddressWrap>
            <DetailAddress>
              서울 강서구 공항대로 81길 김포국제공항롯데몰 롯데시네마
              주차장(A-1구역)
            </DetailAddress>
          </DetailAddressWrap>
        </div>
        <div>
          <DetailImg
            src="https://firebasestorage.googleapis.com/v0/b/popcorn1-4b47e.appspot.com/o/Kauts%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-02-07%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.41.36.png?alt=media&token=a5580ae1-4662-4658-94ec-4bb152ce1fa0"
            alt="사진"
          />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <DetailWrap>
            <DetailTitle>디올성수</DetailTitle>
            <DetailDescription>의류판매</DetailDescription>
          </DetailWrap>
          <DetailAddressWrap>
            <DetailAddress>
              서울 강서구 공항대로 81길 김포국제공항롯데몰 롯데시네마
              주차장(A-1구역)
            </DetailAddress>
          </DetailAddressWrap>
        </div>
        <div>
          <DetailImg
            src="https://firebasestorage.googleapis.com/v0/b/popcorn1-4b47e.appspot.com/o/Kauts%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-02-07%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.41.36.png?alt=media&token=a5580ae1-4662-4658-94ec-4bb152ce1fa0"
            alt="사진"
          />
        </div>
      </Wrap>
    </>
  );
};

export default MapDataCard;

const Wrap = styled.div`
  height: 120px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailWrap = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const DetailTitle = styled.span`
  font-size: 25px;
  font-weight: 600;
`;
const DetailDescription = styled.span`
  opacity: 0.5;
`;

const DetailAddressWrap = styled.div`
  width: 300px;
  margin-top: 30px;
`;
const DetailAddress = styled.span``;

const DetailImg = styled.img`
  width: 100px;
  height: 100px;
`;
