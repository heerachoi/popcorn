import { ButtonValue } from "../types/modal/modalInterface";

/**
 * 버튼이 한개라도 false이면 버튼 전테를 false로 만든다.
 * @param buttonValues 버튼목록
 */
export const checkForAllButton = (buttonValues:ButtonValue[]) =>
  {
    let count = 0;
    buttonValues.map(button => {
      if (button.active === false && button.id !== 1) {
        count++;
      }
    })  
    if (count == 0 ) {
      buttonValues[0].active = false;
      return buttonValues;
    } 
  }
