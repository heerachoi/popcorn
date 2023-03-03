import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../../atoms';
import { getBookMark } from '../../../../services/api';
import * as S from './style';

interface Props {
  isShowing: boolean;
  hide: () => void;
}

const AlertModal = ({ isShowing, hide }: Props) => {
  const user = useRecoilValue(userInfo);
  const { data, isLoading } = useQuery('BookMarkList', getBookMark);

  if (isLoading) {
    console.log('로딩중');
    return <p>Loading...</p>;
  }
  const bookmarkList = data?.filter((bookmark: any) => {
    return user.userInfomation.uid === bookmark?.userId;
  });

  console.log('bookmarkList', bookmarkList);

  const nowTime = new Date();
  console.log(nowTime);

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
