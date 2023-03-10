// library
import { useRecoilState } from 'recoil';
import { isActiveMenu } from '../../../atoms';
// component
import BookMarkList from '../BookMarkList/BookMarkList';
import MyReportList from '../MyReportList/MyReportList';
// style
import * as S from './style';

const MyPageTab = () => {
  const [activeIndex, setActiveIndex] = useRecoilState(isActiveMenu);

  const myTabArr = [
    {
      id: 0,
      tabTitle: '북마크',
      tabContent: <BookMarkList />,
    },
    {
      id: 1,
      tabTitle: '내가 쓴 제보',
      tabContent: <MyReportList />,
    },
  ];

  const MyTabClick = (i: number) => {
    setActiveIndex(i);
  };
  return (
    <>
      <S.MyBookmarkReportWrap>
        <S.MyBookmarkReportBox>
          <S.MyBookmarkReportTabMenu>
            {myTabArr.map((t, i) => {
              return (
                <S.MyTitleTabBtn
                  key={t.id}
                  className={activeIndex === i ? 'active' : ''}
                  onClick={() => MyTabClick(i)}
                >
                  {t.tabTitle}
                </S.MyTitleTabBtn>
              );
            })}
          </S.MyBookmarkReportTabMenu>
          <S.MyContentBox>{myTabArr[activeIndex].tabContent}</S.MyContentBox>
        </S.MyBookmarkReportBox>
      </S.MyBookmarkReportWrap>
    </>
  );
};

export default MyPageTab;
