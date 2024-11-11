import { createContext, useContext, useState } from "react";
import DonationModal from "../components/DonationModal";

const DonationModalContext = createContext();

export const useDonationModal = () => useContext(DonationModalContext);


export const DonationModalProvider = ({ children }) => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [fundId, setFundId] = useState(null);

  return (
    <DonationModalContext.Provider
      value={{ isDonationModalOpen, setIsDonationModalOpen, setFundId }}
    >
      {children}
      <DonationModal />{" "}
    </DonationModalContext.Provider>
  );
};
