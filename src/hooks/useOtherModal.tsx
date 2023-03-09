// library
import { useState } from 'react';

const useOtherModal = () => {
  const [isOtherModalShowing, setIsOtherModalShowing] = useState(false);

  const otherToggle = () => {
    setIsOtherModalShowing(!isOtherModalShowing);
  }

  const modalCategory = (category:string) => {
    return category;
  }

  return {
    isOtherModalShowing,
    otherToggle,
    modalCategory,
  }
};

export default useOtherModal;