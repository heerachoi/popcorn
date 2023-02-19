import { useRef, useState } from 'react';
import data from '../../../data/customerCenter.json';
import * as S from './style';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Faq: any = () => {
  const faqList = data.FAQ;
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
 
  };

  const parentRefHeight = parentRef.current?.style.height ?? 'opx';

  return (
    <S.FaqWrap>
      {faqList.map((qa) => {
        return (
          <div>
            <S.Container>
              <h4>Q. {qa.Q}</h4>
              <S.DropDownBtn onClick={clickHandler}>
                {parentRefHeight === '0px' ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowUp />
                )}
              </S.DropDownBtn>
            </S.Container>
            <S.AnswerContainer ref={parentRef}>
              <div ref={childRef}>A.{qa.A}</div>
            </S.AnswerContainer>
          </div>
        );
      })}
    </S.FaqWrap>
  );
};
export default Faq;
