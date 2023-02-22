import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { isActiveMenu } from '../../atoms';
import InfoError from '../../components/StoreReport/InfoError';
import NewStoreReport from '../../components/StoreReport/NewStoreReport';
import * as S from './style';
import { globalBtn, modalStatus } from '../../atoms';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import CustomModal from '../../shared/CustomModal';

const ReportPage = () => {
  const [activeIndex, setActiveIndex] = useRecoilState(isActiveMenu);
  const setGlobalButton = useSetRecoilState(globalBtn);
  const [isModal, setIsModal] = useRecoilState(modalStatus);
  const modalStatusReset = useResetRecoilState(modalStatus);
  const [tabNumber, setTabNumber] = useState(0);

  const tabMenu = [
    {
      id: 0,
      title: '신규 스토어 제보',
      content: <NewStoreReport />,
    },
    {
      id: 1,
      title: '정보 오류&수정 제보',
      content: <InfoError />,
    },
  ];

  const tabSelectHandler = () => {
    setGlobalButton(false);
    modalStatusReset();
    setActiveIndex(tabNumber);
  };

  // 모달
  const modalStatusChangeHandler = (i: number) => {
    setTabNumber(i);
    setIsModal({ ...isModal, newStoreReport: !isModal.newStoreReport });
  };

  return (
    <S.ReportWrap>
      <S.ReportContainer>
        <S.TabTitle>
          {tabMenu.map((item, i) => {
            return (
              <S.TitleBox>
                <S.TitleBtn
                  className={activeIndex === i ? 'active' : ''}
                  onClick={() => modalStatusChangeHandler(i)}
                >
                  {item.title}
                </S.TitleBtn>
              </S.TitleBox>
            );
          })}
        </S.TabTitle>
        <S.Content>{tabMenu[activeIndex].content}</S.Content>
      </S.ReportContainer>
      {isModal.newStoreReport && (
        <CustomModal
          title="이동하시겠습니까?"
          text="작성했던 내용이 사라집니다. 정말로 이동하시겠습니까?"
          cancel="취소"
          submit="확인"
          fnc={tabSelectHandler}
        />
      )}
    </S.ReportWrap>
  );
};

export default ReportPage;
