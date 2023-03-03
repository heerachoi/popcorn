import React from 'react';
import * as S from './style';

const ContactUs = () => {
  return (
    <S.contactUsWarp>
      <S.cardBox>
        <S.background>
          <S.Img src={require('../../../assets/Img/smallLike.png')} />
        </S.background>
        <S.TextBox>
            <p>Front End</p>
        </S.TextBox>
      </S.cardBox>
      <S.cardBox>
        <S.background>
          <S.Img src={require('../../../assets/Img/smallLike.png')} />
        </S.background>
        <div>
            <p>Front End</p>
        </div>
      </S.cardBox>
      
    </S.contactUsWarp>
  );
};

export default ContactUs;
