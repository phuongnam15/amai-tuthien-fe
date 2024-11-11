import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import Language from "./Language";
import logo from "../../../assets/images/logos/logo.webp";
import { useLocation, useNavigate } from "react-router-dom";
import line from "../../../assets/images/icons/line.svg";
import line2 from "../../../assets/images/icons/line-2.svg";

const menuItems = [
  {
    name: "Trang chủ",
    href: "/trang-chu",
  },
  {
    name: "Giới thiệu",
    href: "/gioi-thieu",
  },
  {
    name: "Các chương trình từ thiện",
    href: "#",
    childs: [
      { name: "Tâm bồ đề", href: "/tam-bo-de" },
      { name: "Trung thu cho em", href: "/trung-thu-cho-em" },
      { name: "Mầm non từ bi", href: "/mam-non-tu-bi" },
      { name: "Doanh nghiệp từ thiện", href: "/tham-gia-tu-thien" },
      { name: "Đăng kí tình nguyện", href: "/dang-ki-tinh-nguyen" },
    ],
  },
  {
    name: "Tin tức sự kiện",
    href: "/tin-tuc",
  },
  {
    name: "Liên hệ",
    href: "/lien-he",
  },
  {
    name: "Đi chùa online",
    href: "#",
    childs: [
      { name: "Chùa", href: "/chua" },
      {
        name: "Audio",
        href: "/audio",
        childs: [
          {
            name: "Audio Truyện Phật giáo",
            href: "/truyen-phat-giao",
          },
          {
            name: "Audio Kinh Điển Đại Thừa",
            href: "/kinh-dien-dai-thua",
          },
          {
            name: "Audio Đại Tạng Kinh (Nikaya)",
            href: "/nikaya",
          },
          {
            name: "Audio Kinh Tụng",
            href: "/kinh-tung",
          },
          {
            name: "Audio Luận Tạng",
            href: "/luan-tang",
          },
          {
            name: "Phật Pháp Cho Người Bắt Đầu",
            href: "/phat-phap-cho-nguoi-bat-dau",
          },
          {
            name: "Audio Thiền Học",
            href: "/thien-hoc",
          },
          {
            name: "Audio Tịnh Độ",
            href: "/tinh-do",
          },
          {
            name: "Audio Triết Học Phật Giáo",
            href: "/triet-hoc-phat-giao",
          },
          {
            name: "Âm Nhạc Phật Giáo",
            href: "/am-nhac-phat-giao",
          },
          {
            name: "Các Bài Thuyết Pháp",
            href: "/cac-bai-thuyet-phap",
          },
          {
            name: "Thầy Thích Bồng Lai",
            href: "/thay-thich-bong-lai",
          },
          {
            name: "Cư Sĩ Diệu Âm (Australia)",
            href: "/cu-si-dieu-am",
          },
          {
            name: "Pháp Sư Ngộ Thông",
            href: "/phap-su-ngo-thong",
          },
          {
            name: "Pháp Sư Tịnh Không",
            href: "/phap-su-tinh-khong",
          },
        ],
      },
    ],
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full py-4 bg-linear-1 sticky z-50 top-0">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-1 xl:gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-[56px] h-[47px] xl:w-[75px] xl:h-[60px] cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h1
            className="text-2xl text-primary font-hanoipho cursor-pointer"
            onClick={() => navigate("/")}
          >
            Tôi đi từ thiện
          </h1>
        </div>

        {/* Mobile Menu Icon */}
        <button className="text-3xl lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FiX className="text-[#7D7D7D]" />
          ) : (
            <FiMenu className="text-[#343434]" />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex xl:gap-5 2xl:gap-7 items-center">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleMenuClick(index)}
              >
                <a
                  href={item.href}
                  className={`${
                    location.pathname === item.href
                      ? "text-primary-1"
                      : "text-[#7D7D7D]"
                  } hover:text-primary-1 font-semibold text-lg tracking-wide`}
                >
                  {item.name}
                </a>
                {item.childs && (
                  <span>
                    {activeIndex === index ? (
                      <FiChevronUp className="text-[#7D7D7D] text-2xl" />
                    ) : (
                      <FiChevronDown className="text-[#7D7D7D] text-2xl" />
                    )}
                  </span>
                )}
              </div>

              {item.childs && activeIndex === index && (
                <div className="absolute min-w-fit top-full left-0 right-0 mt-2 bg-white shadow-lg py-2 z-10">
                  {item.childs.map((child, childIndex) => (
                    <>
                      <div
                        onMouseEnter={() => setHoveredIndex(childIndex)}
                        className="group flex pl-2 py-2 hover:pl-5 items-center transition-all duration-200"
                      >
                        <img
                          src={line}
                          alt=""
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                        />
                        <a
                          key={childIndex}
                          href={child.href}
                          className="block group-hover:text-primary group-hover:pl-3 transition-all duration-200"
                        >
                          {child.name}
                        </a>
                      </div>
                      {child.childs && hoveredIndex === childIndex && (
                        <div className="border-t border-opacity-50">
                          {child.childs.map((subChild, subChildIndex) => (
                            <>
                              <div className="group flex pl-2 py-2 hover:pl-5 items-center transition-all duration-200 pr-10">
                                <img
                                  src={line2}
                                  alt=""
                                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary-6"
                                />
                                <a
                                  key={subChildIndex}
                                  href={subChild.href}
                                  className="block group-hover:text-primary-6 group-hover:pl-3 transition-all duration-200 whitespace-nowrap"
                                >
                                  {subChild.name}
                                </a>
                              </div>
                              {subChildIndex === child.childs.length - 6 && (
                                <div className="border-t border-opacity-50 w-full"></div>
                              )}
                            </>
                          ))}
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Language />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-20 flex justify-end h-screen">
            <div className="w-80 bg-white h-full p-6 shadow-lg overflow-y-auto">
              <button className="text-3xl mb-4" onClick={toggleMobileMenu}>
                <FiX className="text-[#343434]" />
              </button>
              <div className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="relative">
                    <div
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={() => handleMenuClick(index)}
                    >
                      <a
                        href={item.href}
                        className={`${
                          location.pathname === item.href
                            ? "text-primary-1"
                            : "text-gray-600"
                        } hover:text-primary-1 font-semibold  text-lg tracking-wide`}
                      >
                        {item.name}
                      </a>
                      {item.childs && (
                        <span>
                          {activeIndex === index ? (
                            <FiChevronUp className="text-[#7D7D7D] text-2xl" />
                          ) : (
                            <FiChevronDown className="text-[#7D7D7D] text-2xl" />
                          )}
                        </span>
                      )}
                    </div>

                    {item.childs && activeIndex === index && (
                      <div className="mt-2 bg-gray-100 shadow-lg py-2">
                        {item.childs.map((child, childIndex) => (
                          <>
                            <a
                              key={childIndex}
                              href={child.href}
                              className="block px-4 py-2"
                            >
                              {child.name}
                            </a>
                            {child.childs && (
                              <div className="border-t border-opacity-50">
                                {child.childs.map((subChild, subChildIndex) => (
                                  <>
                                    <div className="group flex pl-7 py-2 hover:pl-5 items-center transition-all duration-200 pr-10">
                                      <a
                                        key={subChildIndex}
                                        href={subChild.href}
                                        className="block transition-all duration-200 whitespace-nowrap"
                                      >
                                        {subChild.name}
                                      </a>
                                    </div>
                                    {subChildIndex ===
                                      child.childs.length - 6 && (
                                      <div className="border-t border-opacity-50 w-full"></div>
                                    )}
                                  </>
                                ))}
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Language />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
