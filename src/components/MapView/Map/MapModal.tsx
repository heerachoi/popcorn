// types
import { Store } from '../../../types/data/storeInterface';
import { FoodData } from '../../../types/map';
// style
import * as S from './style';

interface Props {
  marker: FoodData | Store;
  setInfo: React.Dispatch<React.SetStateAction<FoodData | undefined>>;
}

const MapModal = ({ marker, setInfo }: Props) => {
  return (
    <S.MapInfoBox>
      <S.ModalHeader>
        <S.ModalHeaderTitle>{marker.title}</S.ModalHeaderTitle>
      </S.ModalHeader>
    </S.MapInfoBox>
  );
};

export default MapModal;
