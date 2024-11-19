import { useState, useEffect } from "react";

const useCheckScreen = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isXLargeScreen, setIsXLargeScreen] = useState(false);
  const [is2XLargeScreen, setIs2XLargeScreen] = useState(false);

  useEffect(() => {
    const handleCheckSize = () => {
      setIsMobileScreen(window.innerWidth < 640);
      setIsSmallScreen(window.innerWidth >= 640);
      setIsMediumScreen(window.innerWidth >= 768);
      setIsLargeScreen(window.innerWidth >= 1024);
      setIsXLargeScreen(window.innerWidth >= 1280);
      setIs2XLargeScreen(window.innerWidth >= 1536);
    };

    handleCheckSize();

    window.addEventListener("resize", handleCheckSize);

    return () => window.removeEventListener("resize", handleCheckSize);
  }, []);

  return {
    isMobileScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isXLargeScreen,
    is2XLargeScreen,
  };
};

export default useCheckScreen;
