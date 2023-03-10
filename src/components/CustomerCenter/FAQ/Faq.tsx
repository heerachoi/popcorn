// library
import { useState } from 'react';
import { useQuery } from 'react-query';
// API
import { getFaq } from '../../../services/api';
// style
import * as S from './style';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import LoadingAnimation from '../../GlobalComponents/LoadingAnimation';

interface Faq {
  id: string;
  Q: string;
  A: string;
}

const Faq = () => {
  const [isClicked, setIsClicked] = useState<number | null>(null);
  const { isLoading, isError, data, error } = useQuery('FAQ', getFaq);

  if (isLoading) {
    return <LoadingAnimation />;
  }
  if (isError) {
    return <p>Error!!!</p>;
  }
  const clickHandler = (i: number) => {
    if (isClicked === i) {
      return setIsClicked(null);
    }
    setIsClicked(i);
  };

  return (
    <S.FaqWrap>
      {data.map((qa: Faq, i: number) => {
        return (
          <S.Container key={qa.id}>
            <S.TitleBox onClick={() => clickHandler(i)}>
              <S.TitleText>Q. {qa.Q}</S.TitleText>
              {isClicked === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
