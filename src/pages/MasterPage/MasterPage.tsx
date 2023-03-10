// library
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isActiveMenu } from '../../atoms';
// component
import NewStoreReportList from '../../components/MasterPage/NewStoreReportList';
import ErrReportList from '../../components/MasterPage/ErrReportList';

// style
import * as S from './style';

const MasterPage = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useRecoilState(isActiveMenu);

  const tabMenuArr = [
    {
      id: 0,
      tabTitle: '정보 오류&수정 제보 목록',
      content: <ErrReportList />,
    },
    {
      id: 1,
      tabTitle: '신규 팝업스토어 신청 목록',
      content: <NewStoreReportList />,
    },
  ];

  const tabMenuClickHandler = (idx: number) => {
    setActiveIndex(idx);
  };
  return (
    <>
      <S.MasterPageWrap>
        <S.ReportListContainer>
          <S.TabMenu>
            {tabMenuArr.map((item: any, idx: number) => {
            console.log('item',item);
              return (
                
                <S.MenuTitleBox key={item.id}>
                  <S.MenuTitleTabBtn
                    className={activeIndex === idx ? 'active' : ''}
                    onClick={() => tabMenuClickHandler(idx)}
                  >
                    {item.tabTitle}
                  </S.MenuTitleTabBtn>
                </S.MenuTitleBox>
              );
            })}
          </S.TabMenu>
          <S.ContentBox>{tabMenuArr[activeIndex].content}</S.ContentBox>
        </S.ReportListContainer>
      </S.MasterPageWrap>
      <S.NewPostWriteBtnBox>
        <S.WriteBtn onClick={() => navigate('/masterpost')}>
          새 게시물 쓰기
        </S.WriteBtn>
      </S.NewPostWriteBtnBox>
    </>
  );
};

export default MasterPage;
