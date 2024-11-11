import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../../store/customizer/CustomizerSlice";
import FlagEn from "../../../assets/images/flags/icon-flag-en.svg";
import FlagVn from "../../../assets/images/flags/icon-flag-vn.svg";
import { useTranslation } from "react-i18next";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Languages = [
  {
    flagname: "English",
    icon: FlagEn,
    value: "en",
  },
  {
    flagname: "Việt Nam",
    icon: FlagVn,
    value: "vn",
  },
];

const Language = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const customizer = useSelector((state) => state.customizer);
  const currentLang =
    Languages.find((_lang) => _lang.value === customizer.isLanguage) ||
    Languages[1];
  const { i18n } = useTranslation();

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [customizer.isLanguage, i18n]);

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex items-center focus:outline-none"
      >
        <img
          src={currentLang.icon}
          alt={currentLang.value}
          className="xl:w-[30px] xl:h-5"
        />
        <span className="">
          {showMenu ? (
            <FiChevronUp className="text-[#7D7D7D] text-2xl" />
          ) : (
            <FiChevronDown className="text-[#7D7D7D] text-2xl" />
          )}
        </span>
      </button>

      {showMenu && (
        <div className="absolute left-0 lg:right-0 lg:left-auto mt-2 w-48 bg-white shadow-lg z-50">
          {Languages.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                dispatch(setLanguage(option.value));
                localStorage.setItem("language", option.value);
                handleClose();
              }}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
            >
              <img
                src={option.icon}
                alt={option.flagname}
                className="w-5 h-5 mr-2"
              />
              <span>{option.flagname}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;
