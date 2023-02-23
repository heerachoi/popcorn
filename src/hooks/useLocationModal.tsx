import { useState } from 'react';

const useLocationModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [modalValue, setModalValue] = useState<string>("");
  const toggle = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsShowing(!isShowing);
    if (event) {
      const value = event.currentTarget.textContent;      
      const categoryValue = value!.split(" ")[0];
      setModalValue(categoryValue || "");
    }
  }
  return {
    isShowing,
    toggle,
    modalValue,
  }
};

export default useLocationModal;