import * as S from './style';
import BookMarkList from '../BookMarkList/BookMarkList';
import { useState } from 'react';
import MyReportList from '../MyReportList/MyReportList';
import { useRecoilState } from 'recoil';
import { isActiveMenu } from '../../../atoms';

interface Props {
  detailData?: any;
}
const MyPageTab = ({ detailData }: Props) => {
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

  const MyTabClick = (i: any) => {
    setActiveIndex(i);
  };
  return (
    <>
      <S.MyBookmarkReportWrap>
        <S.MyBookmarkReportContainer>
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
        </S.MyBookmarkReportContainer>
      </S.MyBookmarkReportWrap>
    </>
  );
};

export default MyPageTab;
