import React from 'react';
import Faq from '../../components/CustomerCenter/FAQ/Faq';
import InfoError from '../../components/CustomerCenter/StoreReport/InfoError';
import NewStoreReport from '../../components/CustomerCenter/StoreReport/NewStoreReport';
import * as S from './style';

const CustomerCenterPage: any = () => {
  return (
    <S.CustomerCenterWrap>
      <S.CustomerCenterTitle>
        <h1>고객센터</h1>
      </S.CustomerCenterTitle>
      <S.CustomerCenterContainer>
        <div>
          <p>공지사항</p>
        </div>
      </S.CustomerCenterContainer>
      {/* <InfoError /> */}
      {/* <Faq /> */}
      {/* <NewStoreReport /> */}
    </S.CustomerCenterWrap>
  );
};

export default CustomerCenterPage;
