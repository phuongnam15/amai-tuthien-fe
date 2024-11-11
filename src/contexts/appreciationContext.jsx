import { createContext, useContext, useState } from "react";

const AppreciationContext = createContext();

export const useAppreciation = () => useContext(AppreciationContext);

export const AppreciationProvider = ({ children }) => {
  const [isShowAppreciation, setIsShowAppreciation] = useState(false);
  const [isShowAppreciationMobile, setIsShowAppreciationMobile] =
    useState(false);
  const [appreciationType, setAppreciationType] = useState("");

  return (
    <AppreciationContext.Provider
      value={{
        isShowAppreciation,
        setIsShowAppreciation,
        appreciationType,
        setAppreciationType,
        isShowAppreciationMobile,
        setIsShowAppreciationMobile,
      }}
    >
      {children}
    </AppreciationContext.Provider>
  );
};
