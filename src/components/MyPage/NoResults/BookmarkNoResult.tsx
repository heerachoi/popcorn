// style
import * as S from './style';
import NoResultLogo from '../../../assets/Img/Feel=Heart, Color=green.svg';

const BookmarkNoResult = () => {
  return (
    <S.ResultWarp>
      <S.ResultContainer>
        <S.ResultImg src={NoResultLogo} />
        <S.ResultText>마음에 드는 스토어를 북마크해 보세요!</S.ResultText>
      </S.ResultContainer>
    </S.ResultWarp>
  );
};

export default BookmarkNoResult;
