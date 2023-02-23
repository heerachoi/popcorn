import { useEffect, useRef, useState } from 'react';
import data from '../../../data/customerCenter.json';
import * as S from './style';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Faq: any = () => {
  const faqList = data.FAQ;
  const [isClicked, setIsClicked] = useState(null);

  const clickHandler = (i: any) => {
    if (isClicked === i) {
      return setIsClicked(null);
    }
    setIsClicked(i);
  };

  return (
    <S.FaqWrap>
      {faqList.map((qa, i) => {
        return (
          <S.Container key={qa.id}>
            <S.TitleBox onClick={() => clickHandler(i)}>
              <span>Q. {qa.Q}</span>
              {isClicked === i ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </S.TitleBox>
            <S.AnswerBox className={isClicked === i ? 'show' : ''}>
              <S.AnswerText>A. {qa.A}</S.AnswerText>
            </S.AnswerBox>
          </S.Container>
        );
      })}
    </S.FaqWrap>
  );
};
export default Faq;
