import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  marker: any;
  setInfo: any;
}

const MapModal = ({ marker, setInfo }: Props) => {
  const navigate = useNavigate();

  return (
    <MapInfoBox>
      <ModalHeader>
        <ModalHeaderTitle
          onClick={() => navigate(`/detail/${marker.id}`, { state: marker })}
        >
          {marker.title}
        </ModalHeaderTitle>
        {/* <CloseIcon onClick={() => setInfo(null)}>닫기</CloseIcon> */}
      </ModalHeader>
      {/* <ModalMain>
        <ModalMainImg src={marker.imgURL} alt="사진" />
        <ModalMainWrap>
          <ModalMainTextWrap>
            <ModalMainTitle>
              {marker.phone
                ? marker.phone
                : marker.explain.slice(0, 20) + '...'}
            </ModalMainTitle>
            <ModalMainText>{marker.address}</ModalMainText>
          </ModalMainTextWrap>
          {marker.placeURL ? (
            <Link to={marker.placeURL}>
              <ModalMainBtn>디테일 페이지로 이동</ModalMainBtn>
            </Link>
          ) : (
            <ModalMainBtn
              onClick={() =>
                navigate(`/detail/${marker.id}`, { state: marker })
              }
            >
              디테일 페이지로 이동
            </ModalMainBtn>
          )}
        </ModalMainWrap>
      </ModalMain> */}
    </MapInfoBox>
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

const MapInfoBox = styled.div`
  width: 300px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 20px;
`;

const ModalHeaderTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const CloseIcon = styled.span`
  font-size: 13px;
  color: gray;
`;

const ModalMain = styled.div`
  display: flex;
  /* flex-wrap: nowrap; */
  gap: 20px;
  padding: 10px 20px;
  width: 100px;
`;
const ModalMainImg = styled.img`
  width: 50px;
  height: 50px;
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
  font-size: 13px;
  font-weight: 600;
`;
const ModalMainText = styled.span`
  font-size: 13px;
  font-weight: 400;
`;
const ModalMainBtn = styled.button`
  border: none;
  cursor: pointer;
`;
