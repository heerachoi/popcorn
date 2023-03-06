import * as S from './style';

interface Props {
  marker: any;
  setInfo: any;
}

const MapModal = ({ marker, setInfo }: Props) => {
  return (
    <S.MapInfoBox>
      <S.ModalHeader>
        <S.ModalHeaderTitle>{marker.title}</S.ModalHeaderTitle>
        {/* <CloseIcon onClick={() => setInfo(null)}>닫기</CloseIcon> */}
      </S.ModalHeader>
    </S.MapInfoBox>
  );
};

export default MapModal;
