import * as S from './style';
import BookMarkList from '../BookMarkList/BookMarkList';
import { useState } from 'react';
import MyReportList from '../MyReportList/MyReportList';

interface Props {
  detailData?: any;
}
const MyPageTab = ({ detailData }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const MyTabClick = (i: any) => {
    return setActiveIndex(i);
  };

  const myTabArr = [
    {
      tabTitle: (
        <S.MyTitleTabBtn
          onClick={() => MyTabClick(0)}
          className={activeIndex === 0 ? 'active' : ''}
        >
          <p>북마크</p>
        </S.MyTitleTabBtn>
      ),
      tabContent: <BookMarkList />,
    },
    {
      tabTitle: (
        <S.MyTitleTabBtn
          onClick={() => MyTabClick(1)}
          className={activeIndex === 1 ? 'active' : ''}
        >
          <p>내가 쓴 제보</p>
        </S.MyTitleTabBtn>
      ),
      tabContent: <MyReportList />,
    },
  ];


  return (
    <>
      <S.MyBookmarkReportWrap>
        <S.MyBookmarkReportContainer>
          <S.MyBookmarkReportBox>
            <S.MyBookmarkReportTabMenu>
              {myTabArr.map((t) => {
                return t.tabTitle;
              })}
            </S.MyBookmarkReportTabMenu>
            <S.MyContentBox>
              {/* activeIndex에 해당하는 내용 보여줌 */}
              {myTabArr[activeIndex].tabContent}
            </S.MyContentBox>
          </S.MyBookmarkReportBox>
        </S.MyBookmarkReportContainer>
      </S.MyBookmarkReportWrap>
    </>
  );
};

export default MyPageTab;
