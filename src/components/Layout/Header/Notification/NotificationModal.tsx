// library
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../../atoms';
// API
import { getBookMark } from '../../../../services/api';
// style
import * as S from './style';

interface Props {
  isShowing: boolean;
  hide: () => void;
}

const AlertModal = ({ isShowing, hide }: Props) => {
  const user = useRecoilValue(userInfo);
  const { data, isLoading } = useQuery('BookMarkList', getBookMark);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isShowing && (
        <S.ModalContainer>
          <S.ModalHolder>
            <S.ModalHeader>
              <S.CloseButton onClick={hide} />
            </S.ModalHeader>
            <S.NotificationContent>
              'RubberDuck'이 3일 뒤에 오픈합니다.
            </S.NotificationContent>
            <S.NotificationContent>
              'RubberDuck'이 4일 뒤에 오픈합니다.
            </S.NotificationContent>
          </S.ModalHolder>
        </S.ModalContainer>
      )}
    </>
  );
};

export default AlertModal;
