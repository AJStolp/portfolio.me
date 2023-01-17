import { useEffect, useState } from "react";

const useIsOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  function updateStatus() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    updateStatus();
  }, []);
  return [isOpen, setIsOpen];
};

export default useIsOpen;
