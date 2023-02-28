import styled from 'styled-components';

const FoodCard = ({ food, setMyLocation }: any) => {
  const foodCenterChangeHandler = () => {
    setMyLocation({ Ma: food.position.lat, La: food.position.lng });
  };

  return (
    <CardWrap onClick={foodCenterChangeHandler}>
      <div>
        <DetailWrap>
          <DetailTitle>{food?.title}</DetailTitle>
          <DetailDescription>{food?.item}</DetailDescription>
        </DetailWrap>
        <DetailAddressWrap>
          <DetailAddress>{food?.address}</DetailAddress>
        </DetailAddressWrap>
      </div>
      <div>
        <DetailImg src={food?.imgURL} alt="사진" />
      </div>
    </CardWrap>
  );
};

export default FoodCard;

const CardWrap = styled.div`
  height: 120px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DetailWrap = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const DetailTitle = styled.span`
  font-size: 20px;
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
