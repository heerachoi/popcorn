import { useState } from 'react';
import data from '../../../data/customerCenter.json';
import * as S from './style';

const Faq: any = () => {
  const faqList = data.FAQ;

  const [isClick, setIsClick] = useState<boolean>(false);

  const toggleClickHandler = () => {
    setIsClick(!isClick);
  };

  return (
    <S.FaqWrap>
      {faqList.map((qa) => {
        return (
          <S.QaBox key={qa.id}>
            <S.Qtitle>
              <h4>Q : {qa.Q}</h4>
              <S.ToggleBtn onClick={toggleClickHandler}>
                {isClick ? '▲' : '▼'}
              </S.ToggleBtn>
            </S.Qtitle>

            {isClick && (
              <S.Qtitle>
                <p>A : {qa.A}</p>
              </S.Qtitle>
            )}
          </S.QaBox>
        );
      })}
    </S.FaqWrap>
  );
};

export default Faq;
