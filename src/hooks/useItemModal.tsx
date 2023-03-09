// library
import { useState } from 'react';

const useItemModal = () => {
  const [isItemModalShowing, setIsItemModalShowing] = useState(false);

  const itemToggle = () => {
    setIsItemModalShowing(!isItemModalShowing);
  }

  const modalCategory = (category:string) => {
    return category;
  }

  return {
    isItemModalShowing,
    itemToggle,
    modalCategory,
  }
};

export default useItemModal;