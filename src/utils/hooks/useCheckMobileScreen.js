import { useState, useEffect } from "react";

const useCheckMobileScreen = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleCheckSize = () => {
      setIsMobileScreen(window.innerWidth < 640);
    };

    handleCheckSize();

    window.addEventListener("resize", handleCheckSize);

    return () => window.removeEventListener("resize", handleCheckSize);
  }, []);

  return isMobileScreen;
};

export default useCheckMobileScreen;
