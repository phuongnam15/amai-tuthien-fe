import bgPagoda from "../../assets/images/backgrounds/bg-pagoda.svg";
import pagoda from "../../assets/images/backgrounds/pagoda.webp";
import control from "../../assets/images/icons/control-pagoda.svg";
import muted from "../../assets/images/icons/muted.svg";
import unmuted from "../../assets/images/icons/unmuted.svg";
import download from "../../assets/images/icons/download.svg";
import pause from "../../assets/images/icons/pause.svg";
import play from "../../assets/images/icons/play.svg";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import arrowDrop from "../../assets/images/icons/arrow-drop.svg";
import line2 from "../../assets/images/icons/line-2.svg";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import SeeMoreButton from "../../components/animations/button/SeeMoreButton";
import { FiArrowDown } from "react-icons/fi";
import useCheckMobileScreen from "../../utils/hooks/useCheckMobileScreen";
import bathuong from "../../assets/images/backgrounds/bat-huong.webp";
import smoke from "../../assets/videos/smoke.gif";
import loiphatday from "../../assets/audios/Lời phật dạy 2.mp3";

const scriptures = [
  {
    name: "A Di Đà Phật",
  },
  {
    name: "Nam Mô A Di Đà Phật",
  },
  {
    name: "Kinh Diệu Pháp Liên Hoa",
  },
  {
    name: "Kinh Vu Lan",
  },
  {
    name: "Kinh Lăng Nghiêm - Công Phu Khuya",
  },
  {
    name: "Kinh Dược Sư",
  },
  {
    name: "Kinh Phổ Môn",
  },
  {
    name: "Kinh Tám Điều Từ Tâm",
  },
  {
    name: "Kinh A Di Đà",
  },
];

const campus = [
  {
    name: "Chánh điện chùa",
    href: "/chua",
  },
  {
    name: "Phòng cầu siêu",
    href: "/phong-cau-sieu",
  },
  {
    name: "Phòng Hộ Mệnh - Cầu An",
    href: "/phong-ho-menh-cau-an",
  },
  {
    name: "Phòng Lễ Giỗ Ông Bà",
    href: "/phong-le-gio-ong-ba",
  },
];

const items = [
  {
    background: "bg-pagoda",
  },
  {
    background: "bg-pagoda-2",
  },
];

const listPraying = [
  {
    image: pagoda,
    name: "Nguyễn Văn A",
    legalName: "Trí Huệ",
    born: "24/10/2014",
    die: "14/04/2020",
    age: "6",
    address: "123, Lê Đức Thọ",
    hometown: "Mỹ Đình 2, Hà Nội",
  },
  {
    image: pagoda,
    name: "Nguyễn Văn A",
    legalName: "Trí Huệ",
    born: "24/10/2014",
    die: "14/04/2020",
    age: "6",
    address: "123, Lê Đức Thọ",
    hometown: "Mỹ Đình 2, Hà Nội",
  },
  {
    image: pagoda,
    name: "Nguyễn Văn A",
    legalName: "Trí Huệ",
    born: "24/10/2014",
    die: "14/04/2020",
    age: "6",
    address: "123, Lê Đức Thọ",
    hometown: "Mỹ Đình 2, Hà Nội",
  },
  {
    image: pagoda,
    name: "Nguyễn Văn A",
    legalName: "Trí Huệ",
    born: "24/10/2014",
    die: "14/04/2020",
    age: "6",
    address: "123, Lê Đức Thọ",
    hometown: "Mỹ Đình 2, Hà Nội",
  },
  {
    image: pagoda,
    name: "Nguyễn Văn A",
    legalName: "Trí Huệ",
    born: "24/10/2014",
    die: "14/04/2020",
    age: "6",
    address: "123, Lê Đức Thọ",
    hometown: "Mỹ Đình 2, Hà Nội",
  },
  {
    image: pagoda,
    name: "Nguyễn Văn A",
    legalName: "Trí Huệ",
    born: "24/10/2014",
    die: "14/04/2020",
    age: "6",
    address: "123, Lê Đức Thọ",
    hometown: "Mỹ Đình 2, Hà Nội",
  },
];

const PagodaPage = () => {
  const navigate = useNavigate();
  const [isPlay, setIsPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isShowControl, setIsShowControl] = useState(false);
  const pathname = useLocation().pathname;
  const [dropIndex, setDropIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPraying, setIsPraying] = useState(false);
  const [isSendRegister, setIsSendRegister] = useState(false);
  const isSmokeUp = pathname === "/thap-huong";
  const audioRef = useRef(null);
  const textRef = useRef(null);
  const isMobileScreen = useCheckMobileScreen();
  const [isOpenConfirmRegisterModal, setIsOpenConfirmRegisterModal] = useState(false);
  const spaceName =
    pathname === "/chua"
      ? "Chánh điện chùa"
      : pathname === "/phong-cau-sieu"
      ? "Phòng Cầu Siêu"
      : pathname === "/phong-ho-menh-cau-an"
      ? "Phòng Hộ Mệnh - Cầu An"
      : pathname === "/thap-huong"
      ? "Thắp Hương"
      : "Phòng Lễ Giỗ Ông Bà";

  const togglePlay = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlay(!isPlay);
  };

  const nextPage = () => {
    setCurrentImageIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };
  const prevPage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  useEffect(() => {
    const textWidth = textRef.current.offsetWidth;
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slide-text {
        0% { right: -${textWidth}px; }
        100% { right: 100%; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const handleFirstClick = () => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlay(true);
      }
      document.removeEventListener("click", handleFirstClick);
    };

    document.addEventListener("click", handleFirstClick, { once: true });

    return () => {
      document.removeEventListener("click", handleFirstClick);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} muted={isMuted}>
        <source src={loiphatday} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 duration-300 transition-transform transform px-5 xl:px-0 ${
          isOpenConfirmRegisterModal
            ? "translate-y-0"
            : isMobileScreen
            ? "translate-y-full"
            : "scale-0"
        }`}
        onClick={() => {
          setIsOpenConfirmRegisterModal(false);
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-auto xl:w-[640px] rounded-xl xl:rounded-3xl bg-white pt-8 pb-5 xl:py-16 px-5 xl:px-[60px]"
        >
          <div className="flex flex-col gap-3 xl:gap-6">
            <h1 className="text-lg xl:text-2xl text-primary-6 font-semibold">
              Xác Nhận Đăng Ký Thành Công!
            </h1>

            <p className="text-xs xl:text-base leading-[1.15rem] xl:leading-6">
              Lorem ipsum dolor sit amet consectetur. In lorem massa volutpat in
              volutpat imperdiet. Augue morbi dui praesent et augue eu mauris
              egestas. In iaculis volutpat pellentesque lacus faucibus enim
              interdum. Duis adipiscing pellentesque enim mauris in diam.
              Ullamcorper pellentesque amet amet aliquam mauris cursus.
            </p>
            <div className="flex justify-end gap-3 xl:gap-6 text-xs xl:text-base">
              <button className="bg-primary-3 py-[10px] px-4 xl:px-6 rounded-lg font-semibold">
                Trở về
              </button>
              <button className="bg-primary-6 py-[10px] px-4 xl:px-6 rounded-lg text-white">
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#260800] flex-1 flex flex-col relative">
        <div className="absolute inset-0 opacity-15">
          <img
            src={bgPagoda}
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="container relative flex flex-col py-9 gap-4">
            <div className="w-full h-full flex-1 flex flex-col gap-3">
              <div className="flex-1 relative">
                {items.map((item, index) => {
                  return (
                    currentImageIndex === index && (
                      <div
                        className={`${item.background} relative min-h-[650px] xl:min-h-[781px] bg-center bg-cover`}
                      >
                        {isSmokeUp && (
                          <>
                            <img
                              src={smoke}
                              alt=""
                              autoPlay
                              muted={true}
                              loop
                              className="absolute mix-blend-lighten left-[50.5%] h-52 -translate-x-1/2"
                              style={{ bottom: "calc(22% + 140px)" }}
                            />
                            <img
                              src={bathuong}
                              alt=""
                              className="absolute w-[160px] h-[180px] bottom-[21%] left-[51%] -translate-x-1/2"
                            />
                          </>
                        )}
                      </div>
                    )
                  );
                })}
                <div className="absolute flex flex-col gap-6 right-3 xl:right-14 bottom-3 xl:bottom-6">
                  {!isSmokeUp && (
                    <div
                      onClick={() => navigate("/thap-huong")}
                      className="flex flex-col gap-3 relative xl:hidden"
                    >
                      <div className="p-[10px] bg-[#F8E0C1] rounded-lg flex gap-4 self-start cursor-default border border-[#F8E0C1] hover:border-[#951900]">
                        <span className="text-xs xl:text-base xl:font-semibold">
                          Thắp hương
                        </span>
                      </div>
                    </div>
                  )}
                  <div className={`flex gap-6 justify-end`}>
                    <button
                      onClick={prevPage}
                      className="transition-transform duration-200 p-1.5 rounded-full border border-white hover:scale-110"
                    >
                      <FiArrowLeft className="text-lg text-white" />
                    </button>
                    <button
                      onClick={nextPage}
                      className="transition-transform duration-200 p-1.5 rounded-full border border-white hover:scale-110"
                    >
                      <FiArrowRight className="text-lg text-white" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-5 xl:top-6 left-3 xl:left-6">
                  <div
                    onClick={() => setIsShowControl(!isShowControl)}
                    className="w-9 h-9 xl:w-10 xl:h-10 border border-[#F8E0C1] hover:border-[#951900] cursor-pointer flex justify-center items-center bg-[#F8E0C1] rounded-full"
                  >
                    <img
                      src={control}
                      alt=""
                      className="w-5 h-5 xl:w-auto xl:h-auto"
                    />
                  </div>
                  {isShowControl && (
                    <div className="flex flex-col gap-2 p-3 xl:p-4 w-[150px] xl:w-[186px] bg-white rounded-lg mt-3">
                      <div className="flex items-center gap-2">
                        {isPlay ? (
                          <img
                            src={pause}
                            alt=""
                            className="w-6 h-6 cursor-pointer"
                            onClick={togglePlay}
                          />
                        ) : (
                          <img
                            src={play}
                            alt=""
                            className="w-6 h-6 cursor-pointer"
                            onClick={togglePlay}
                          />
                        )}
                        <span className="text-sm xl:text-base text-primary-5">
                          {isPlay ? "Tạm dừng" : "Chạy tiếp"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {isMuted ? (
                          <img
                            src={unmuted}
                            alt=""
                            className="w-6 h-6 cursor-pointer"
                            onClick={() => setIsMuted(false)}
                          />
                        ) : (
                          <img
                            src={muted}
                            alt=""
                            className="w-6 h-6 cursor-pointer"
                            onClick={() => setIsMuted(true)}
                          />
                        )}
                        <span className="text-sm xl:text-base text-primary-5">
                          Âm lượng
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src={download}
                          alt=""
                          className="w-6 h-6 cursor-pointer"
                        />
                        <span className="text-sm xl:text-base text-primary-5">
                          Tải xuống
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm xl:text-base text-primary-5">
                        <span className="font-bold cursor-pointer text-center w-6">
                          1x
                        </span>
                        <span className="">Tốc độ phát</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute top-5 xl:top-6 right-3 xl:right-12 py-2 px-[10px] bg-[#DDAE6D99] flex rounded-lg">
                  <span className="text-white text-sm xl:text-xl">
                    {spaceName}
                  </span>
                </div>
                <div className="absolute left-3 xl:left-6 bottom-[10px] flex flex-col xl:flex-row gap-4">
                  <div className="flex flex-col gap-3 relative">
                    <div
                      className={`flex flex-col gap-3 xl:gap-4 py-4 pl-1 xl:pl-2 bg-white rounded-lg bottom-12 min-w-[200px] xl:min-w-[330px] transition-opacity duration-150 absolute ${
                        dropIndex === 0 ? "" : "hidden"
                      }`}
                    >
                      <div className="w-full pl-3">
                        <span className="self-start px-4 xl:px-12 py-1 rounded xl:rounded-lg bg-primary-6 text-white text-sm xl:text-xl">
                          Chùa
                        </span>
                      </div>
                      {scriptures.map((child, index) => (
                        <div
                          key={index}
                          className="group flex hover:pl-5 items-center transition-all duration-200 cursor-pointer"
                        >
                          <img
                            src={line2}
                            alt=""
                            className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary-6"
                          />
                          <a
                            href={child.href}
                            className="block group-hover:text-primary-6 text-primary-5 text-xs xl:text-base group-hover:pl-3 transition-all duration-200"
                          >
                            {child.name}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div
                      onClick={() => setDropIndex(dropIndex === 0 ? null : 0)}
                      className="p-[10px] bg-[#F8E0C1] rounded-lg flex gap-2 xl:gap-4 items-center self-start cursor-default border border-[#F8E0C1] hover:border-[#951900]"
                    >
                      <span className="text-xs xl:text-base xl:font-semibold">
                        Tủ kinh
                      </span>
                      <img
                        src={arrowDrop}
                        alt=""
                        className={`${
                          dropIndex === 0 ? "" : "rotate-180"
                        } transition-transform duration-150 w-5 h-5 xl:w-auto xl:h-auto`}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 relative">
                    <div
                      className={`flex flex-col gap-3 xl:gap-4 py-4 pl-1 xl:pl-2 bg-white rounded-lg bottom-12 min-w-[200px] xl:min-w-[330px] transition-opacity duration-150 absolute ${
                        dropIndex === 1 ? "" : "hidden"
                      }`}
                    >
                      <div className="w-full pl-3">
                        <span className="self-start px-4 xl:px-12 py-1 rounded xl:rounded-lg bg-primary-6 text-white text-sm xl:text-xl">
                          Khuôn viên chùa
                        </span>
                      </div>
                      {campus.map((child, index) => (
                        <div
                          key={index}
                          onClick={() => navigate(child.href)}
                          className="group flex hover:pl-5 items-center transition-all duration-200 cursor-pointer"
                        >
                          <img
                            src={line2}
                            alt=""
                            className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary-6"
                          />
                          <span
                            href={child.href}
                            className="block group-hover:text-primary-6 text-primary-5 text-xs xl:text-base group-hover:pl-3 transition-all duration-200"
                          >
                            {child.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div
                      onClick={() => setDropIndex(dropIndex === 1 ? null : 1)}
                      className="p-[10px] bg-[#F8E0C1] rounded-lg flex gap-2 xl:gap-4 items-center self-start cursor-default border border-[#F8E0C1] hover:border-[#951900]"
                    >
                      <span className="text-xs xl:text-base xl:font-semibold">
                        Khuôn viên chùa
                      </span>
                      <img
                        src={arrowDrop}
                        alt=""
                        className={`${
                          dropIndex === 1 ? "" : "rotate-180"
                        } transition-transform duration-150 w-5 h-5 xl:w-auto xl:h-auto`}
                      />
                    </div>
                  </div>
                  {!isSmokeUp && (
                    <div
                      onClick={() => navigate("/thap-huong")}
                      className="xl:flex flex-col gap-3 relative hidden"
                    >
                      <div className="p-[10px] bg-[#F8E0C1] rounded-lg flex gap-4 self-start cursor-default border border-[#F8E0C1] hover:border-[#951900]">
                        <span className="text-xs xl:text-base xl:font-semibold">
                          Thắp hương
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div class="w-full relative h-9 xl:h-auto rounded py-2 xl:py-4 xl:px-7 bg-[#FFE7C7] whitespace-nowrap xl:whitespace-normal overflow-hidden">
                <p
                  ref={textRef}
                  class={`text-xs xl:text-sm ${
                    isMobileScreen &&
                    "animate-slide absolute w-fit top-1/2 -translate-y-1/2"
                  }`}
                >
                  Xin Quý vị hãy tịnh tâm và chấp tay niệm "Nam Mô A Di Đà Phật"
                  (108 lần) sau khi niệm xong xin Qúy vị tụng hồi hướng "Nguyện
                  đem công đức này, Hướng về khắp tất cả, Đệ tử và chúng sanh,
                  Đều trọn thành Phật đạo.
                </p>
              </div>
            </div>
            {pathname !== "/chua" &&
              pathname !== "/thap-huong" &&
              !isPraying && (
                <>
                  <div className="xl:container flex flex-col gap-4">
                    <div className="rounded-lg bg-white py-5 xl:py-6 px-4 xl:px-8 flex flex-col gap-4">
                      <h1 className="text-xl xl:text-[32px] font-semibold">
                        {pathname === "/phong-cau-sieu"
                          ? "Đăng kí Cầu Siêu"
                          : pathname === "/phong-ho-menh-cau-an"
                          ? "Đăng kí Hộ Mệnh - Cầu An"
                          : "Đăng kí Lễ Giỗ Ông Bà"}
                      </h1>
                      <div
                        className={`py-10 xl:px-56 flex flex-col gap-4 ${
                          isSendRegister ? "border-y" : "border-t"
                        } border-primary-5`}
                      >
                        <div className="w-full flex flex-col gap-1 xl:gap-4">
                          <span className="text-base xl:text-xl">
                            Tải lên hình ảnh
                          </span>
                          <div className="border border-primary-5 border-opacity-50 rounded-[5.6px] xl:rounded-xl py-[10px] px-2 xl:py-4 xl:px-4 flex justify-end items-center">
                            <label
                              htmlFor=""
                              for="file-upload"
                              className="cursor-pointer"
                            >
                              <span className="text-xs xl:text-xl py-[10px] px-4 hover:bg-gray-300 transition duration-300 bg-[#C8C8C8] rounded-lg">
                                Browse
                              </span>
                              <input
                                type="file"
                                className="hidden"
                                id="file-upload"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
                          <div className="flex flex-col gap-4 xl:gap-5 flex-1">
                            <label className="text-base xl:text-xl">
                              Họ và tên
                              <span className="text-red-500"> *</span>
                            </label>
                            <input
                              type="text"
                              placeholder="ví dụ: Nguyễn Văn A"
                              className="form-input"
                            />
                          </div>
                          <div className="flex flex-col gap-4 xl:gap-5 flex-1">
                            <label className="text-base xl:text-xl">
                              Pháp danh
                            </label>
                            <input
                              type="text"
                              placeholder="ví dụ: Huệ Năng"
                              className="form-input"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-4 xl:gap-6">
                          <div className="flex flex-col gap-4 xl:gap-5 flex-1">
                            <label className="text-base xl:text-xl">
                              Ngày sinh
                              <span className="text-red-500"> *</span>
                            </label>
                            <input
                              type="date"
                              placeholder="ví dụ: 24/10/1945"
                              className="form-input"
                            />
                          </div>
                          <div className="flex flex-col gap-4 xl:gap-5 flex-1">
                            <label className="text-base xl:text-xl">
                              Ngày mất
                              <span className="text-red-500"> *</span>
                            </label>
                            <input
                              type="date"
                              placeholder="ví dụ: 14/04/2014"
                              className="form-input"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 xl:gap-5 flex-1">
                          <label className="text-base xl:text-xl">
                            Hưởng dương
                          </label>
                          <input
                            type="text"
                            placeholder="ví dụ: 69 tuổi"
                            className="form-input"
                          />
                        </div>
                        <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
                          <div className="flex flex-col gap-4 xl:gap-5 flex-1">
                            <label className="text-base xl:text-xl">
                              Địa chỉ
                            </label>
                            <input
                              type="text"
                              placeholder="ví dụ: 123, Lê Đức Thọ"
                              className="form-input"
                            />
                          </div>
                          <div className="flex flex-col gap-4 xl:gap-5 flex-1">
                            <label className="text-base xl:text-xl">
                              Quê quán
                            </label>
                            <input
                              type="text"
                              placeholder="ví dụ: Mỹ Đình 2, Hà Nội"
                              className="form-input"
                            />
                          </div>
                        </div>
                        {!isSendRegister && (
                          <button
                            onClick={() => setIsSendRegister(true)}
                            className="py-[10px] px-11 self-start text-base font-semibold text-white bg-primary-6 rounded-[32px]"
                          >
                            Gửi đăng kí
                          </button>
                        )}
                      </div>
                      {isSendRegister && (
                        <div className="flex justify-end">
                          <div className="flex flex-col xl:flex-row gap-4 xl:gap-6 xl:px-56 w-fit">
                            <button
                              onClick={() =>
                                setIsOpenConfirmRegisterModal(true)
                              }
                              className="text-white w-full xl:w-auto text-xs xl:text-base py-[10px] px-6 rounded-lg bg-primary border border-primary"
                            >
                              Xác nhận đăng ký
                            </button>
                            <div className="flex gap-2 xl:gap-6">
                              <button
                                onClick={() => setIsSendRegister(false)}
                                className="text-xs xl:text-base py-[10px] px-6 rounded-lg bg-primary-3 border border-primary-3 font-semibold"
                              >
                                Chỉnh sửa lại
                              </button>
                              <button
                                onClick={() => setIsSendRegister(false)}
                                className="text-primary-5 text-xs xl:text-base py-[10px] px-6 rounded-lg border border-primary-5"
                              >
                                Huỷ
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="rounded-lg bg-white py-5 xl:py-6 px-4 xl:px-8">
                      <h1 className="text-xl xl:text-[32px] font-semibold pb-4 border-b border-primary-5">
                        {pathname === "/phong-cau-sieu"
                          ? "Danh sách đăng kí Cầu Siêu"
                          : pathname === "/phong-ho-menh-cau-an"
                          ? "Danh sách đăng kí Hộ Mệnh - Cầu An"
                          : "Danh sách đăng kí Lễ Giỗ Ông Bà"}
                      </h1>
                      <div className="grid grid-cols-10 pt-6 pb-10 gap-4">
                        {listPraying.map((item, index) => {
                          return (
                            <div className="col-span-5 xl:col-span-2 text-[10px] xl:text-xs border border-[#7D7D7D] bg-[#DDAE6D96] p-[10px] xl:p-6 flex flex-col gap-1 items-center">
                              <img
                                src={item.image}
                                alt=""
                                className="w-11 h-11"
                              />
                              <span className="font-semibold">{item.name}</span>
                              <span>P / D: {item.legalName}</span>
                              <span>Sinh: {item.born}</span>
                              <span>Mất: {item.die}</span>
                              <span>Hưởng thọ: {item.age} tuổi</span>
                              <span>Địa chỉ: {item.address}</span>
                              <span>Quê quán: {item.hometown}</span>
                            </div>
                          );
                        })}
                      </div>
                      <SeeMoreButton text={"Xem thêm"} Icon={FiArrowDown} />
                    </div>
                  </div>
                </>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PagodaPage;
