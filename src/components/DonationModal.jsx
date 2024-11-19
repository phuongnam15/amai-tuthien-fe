import useCheckScreen from "../utils/hooks/useCheckScreen";
import { useDonationModal } from "../contexts/donationModalContext";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import QR from "../assets/images/qr.webp";
import card from "../assets/images/icons/card.svg";
import key from "../assets/images/icons/key.svg";
import { useAppreciation } from "../contexts/appreciationContext";

const tablist = [
  {
    text: "Chuyển khoản",
  },
  {
    text: "Paypal",
  },
  {
    text: "Credit Card",
  },
];

const donationMethods = [
  {
    text: "Một lần",
  },
  {
    text: "Hàng ngày",
  },
  {
    text: "Hàng tuần",
  },
  {
    text: "Hàng tháng",
  },
  {
    text: "Hàng quý",
  },
  {
    text: "Hàng năm",
  },
];

const DonationModal = () => {
  const { isDonationModalOpen, setIsDonationModalOpen } = useDonationModal();
  const {
    isShowAppreciation,
    setIsShowAppreciation,
    setAppreciationType,
    setIsShowAppreciationMobile,
    appreciationType,
  } = useAppreciation();
  const { isMobileScreen } = useCheckScreen();
  const [selectedTab, setSelectedTab] = useState(0);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedDonationMethod, setSelectedDonationMethod] = useState(0);

  const DonationAmount = () => {
    return (
      <div className="flex flex-col gap-4 xl:gap-5">
        <label className="text-base xl:text-xl">Số tiền quyên góp</label>
        <div className="flex gap-4 xl:gap-6">
          <label className="relative flex-1">
            <input
              type="text"
              placeholder="150.000"
              className="form-input w-full"
            />
            <span className="absolute text-primary text-sm xl:text-base top-1/2 -translate-y-1/2 right-[11px] xl:right-6">
              VND
            </span>
          </label>
          <label className="relative flex-1">
            <input
              type="text"
              placeholder="5.85"
              className="form-input w-full"
            />
            <span className="absolute text-primary text-sm xl:text-base top-1/2 -translate-y-1/2 right-[11px] xl:right-6">
              USD
            </span>
          </label>
        </div>
      </div>
    );
  };

  const DonationMethod = () => {
    return (
      <div className="flex flex-col gap-4 xl:gap-5">
        <label className="text-base xl:text-xl">Phương thức quyên góp</label>
        <div className="flex flex-wrap gap-4 xl:gap-8">
          {donationMethods.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setSelectedDonationMethod(index)}
                className={`${
                  selectedDonationMethod === index
                    ? "bg-[#FFE7BA] text-[#DD8124] border-[#FFE7BA]"
                    : "text-primary-5"
                } text-xs xl:text-base py-2 px-3 xl:py-4 xl:px-6 border rounded-md xl:rounded-xl border-primary-5 border-opacity-50`}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const PersonalInformation = () => {
    return (
      <>
        <div className="flex flex-col gap-4 xl:gap-5">
          <label className="text-base xl:text-xl">
            Thông tin cá nhân
            <span className="text-red-500"> *</span>
          </label>
          <div className="flex gap-4 xl:gap-6">
            <input
              type="text"
              placeholder="Tên"
              className="form-input min-w-0 flex-1"
            />
            <input
              type="text"
              placeholder="Họ"
              className="form-input min-w-0  flex-1"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:gap-5">
          <label className="text-base xl:text-xl">Địa chỉ Email</label>
          <input
            type="text"
            placeholder="Địa chỉ Email"
            className="form-input"
          />
        </div>
        <div className="w-full flex gap-2 xl:gap-4 items-center">
          <label
            htmlFor="is_anonymous"
            className={`${
              isAnonymous && "bg-primary"
            } cursor-pointer flex justify-center items-center xl:w-[25px] xl:h-[25px] w-4 h-4 rounded border border-primary-5 border-opacity-50`}
          >
            {isAnonymous && (
              <FaCheck className="text-white w-2 h-2 xl:w-4 xl:h-4" />
            )}
            <input
              type="checkbox"
              className="hidden"
              id="is_anonymous"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
          </label>
          <span href="https://youtube.com" className="text-xs xl:text-base">
            Tôi muốn quyên góp ẩn danh
          </span>
        </div>
        <div className="flex flex-col gap-4 xl:gap-5">
          <label className="text-base xl:text-xl">Lời nhắn</label>
          <input
            type="text"
            placeholder="Để lại lời nhắn"
            className="form-input"
          />
        </div>
      </>
    );
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50 duration-300 ${
        isMobileScreen ? "items-end" : "items-center"
      } transition-transform transform ${
        isDonationModalOpen
          ? "translate-y-0"
          : isMobileScreen
          ? "translate-y-full"
          : "scale-0"
      }`}
      onClick={() => {
        setIsDonationModalOpen(false);
        setIsShowAppreciation(false);
        setAppreciationType("");
        setIsShowAppreciationMobile(false);
      }}
    >
      {isDonationModalOpen && (
        <>
          {isShowAppreciation ? (
            <>
              <div className="w-[640px] rounded-3xl bg-white border-[3px] border-primary custom-shadow py-20 px-[60px]">
                <div className="flex flex-col gap-2 items-center">
                  <h1 className="text-4xl font-lora-regular text-primary">
                    {appreciationType === "quyen-gop"
                      ? "Cảm ơn các bạn đã quyên góp"
                      : "Cảm ơn các bạn đã tham gia"}
                  </h1>
                  <span className="text-xl">
                    {appreciationType === "quyen-gop"
                      ? '"Từ bi sẻ chia ươm mầm ước mơ"'
                      : '"Chung tay vì nụ cười trẻ thơ, cùng nhau gieo mầm từ bi"'}
                  </span>
                  <div className="flex flex-col gap-4 mt-5">
                    <p className="text-base">
                      {appreciationType === "quyen-gop"
                        ? "Chúng tôi xin chân thành cảm ơn tấm lòng nhân ái và sự hỗ trợ quý báu từ bạn. Sự đóng góp của bạn sẽ trực tiếp giúp đỡ các trẻ em mồ côi và nhà chùa, mang đến cho các em một cuộc sống tốt đẹp hơn và những cơ hội mới. Nhờ vào sự quan tâm của những người như bạn, chúng tôi có thể tiếp tục sứ mệnh hỗ trợ và lan tỏa yêu thương. Chúc bạn và gia đình luôn gặp nhiều may mắn, hạnh phúc và bình an."
                        : "Chúng tôi vô cùng cảm kích trước tinh thần thiện nguyện và sự sẵn lòng cống hiến của bạn. Đăng ký của bạn đã được ghi nhận, và chúng tôi sẽ gửi thông tin chi tiết về chương trình qua email trong vòng 3-5 ngày làm việc tới. Sự tham gia của bạn sẽ giúp mang lại những điều tốt đẹp hơn cho các trẻ em mồ côi và ngôi chùa. Chúng tôi mong chờ được cùng bạn chung tay trong suốt cuộc hành trình."}
                    </p>
                    <span className="text-base font-semibold">
                      {appreciationType === "quyen-gop"
                        ? "Trân trọng cảm ơn!"
                        : "Xin chân thành cảm ơn và hẹn gặp bạn sớm!"}
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full xl:w-[700px] xl:h-[700px] rounded-t-3xl xl:rounded-3xl bg-white xl:border-[3px] border-primary custom-shadow px-4 pb-7 pt-[15px] xl:py-[50px] xl:px-[60px]"
            >
              <div className="w-full h-full flex flex-col">
                {isMobileScreen && (
                  <div className="flex justify-center mb-8">
                    <div
                      onClick={() => setIsDonationModalOpen(false)}
                      className="w-20 h-2 bg-[#717171] rounded-[30px]"
                    ></div>
                  </div>
                )}
                <div className="flex flex-col gap-2 xl:gap-[13px] items-center mb-6 xl:mb-7">
                  <h1 className="text-xl xl:text-4xl font-lora-regular text-primary">
                    Thông Tin Quyên Góp
                  </h1>
                  <span className="text-xs xl:text-xl">
                    "Từ bi sẻ chia ươm mầm ước mơ"
                  </span>
                </div>
                <div className="overflow-y-auto flex-1">
                  <div className="flex flex-col gap-4 xl:gap-6">
                    <div className="flex flex-col gap-4 xl:gap-5">
                      <label className="text-base xl:text-xl">
                        Phương thức thanh toán
                      </label>
                      <div className="flex justify-between xl:justify-normal xl:gap-8">
                        {tablist.map((item, index) => {
                          return (
                            <button
                              key={index}
                              onClick={() => setSelectedTab(index)}
                              className={`${
                                selectedTab === index
                                  ? "bg-[#FFE7BA] text-[#DD8124] border-[#FFE7BA]"
                                  : "text-primary-5"
                              } text-xs xl:text-base p-4 border rounded-lg border-primary-5 border-opacity-50`}
                            >
                              {item.text}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {selectedTab === 0 ? (
                      <>
                        <PersonalInformation />
                        <div className="flex flex-col gap-3">
                          <p className="text-sm">
                            <span className="font-semibold">Xin lưu ý: </span>
                            Lorem ipsum dolor sit amet consectetur. Id faucibus
                            tempor lobortis fermentum orci orci eros tincidunt
                            nec. Amet lacus tristique donec amet id vestibulum.
                            Arcu euismod mattis auctor quis orci interdum at
                            imperdiet. Mattis aliquam viverra tortor interdum.
                          </p>
                          <span className="w-1/3 border-b border-black border-opacity-50"></span>
                          <span className="text-sm">
                            Để quyên góp qua hình thức chuyển khoản, vui lòng
                            làm theo các bước sau:
                          </span>
                        </div>
                        <div className="px-6 py-4 bg-primary-2 rounded-3xl xl:rounded-lg">
                          <div className="xl:text-base text-sm flex flex-col gap-2 xl:gap-3">
                            <p>
                              <span className="font-semibold">
                                1. Tên tài khoản:{" "}
                              </span>
                              Chùa ba vàng
                            </p>
                            <p>
                              <span className="font-semibold">
                                2. Tên ngân hàng:{" "}
                              </span>
                              Ngân hàng quân đội MB Bank
                            </p>
                            <p>
                              <span className="font-semibold">
                                3. Số tài khoản:{" "}
                              </span>
                              0123456789
                            </p>
                            <p>
                              <span className="font-semibold">
                                4. Địa chỉ ngân hàng:{" "}
                              </span>
                              8 đường Nguyễn Huệ, Quận 1, thành phố Hồ Chí Minh,
                              Việt Nam
                            </p>
                            <p>
                              <span className="font-semibold">
                                5. Nội dung chuyển khoản:{" "}
                              </span>
                              Tên + Từ bi sẻ chia
                            </p>
                            <div className="flex flex-col gap-3">
                              <span className="font-semibold">
                                6. Hoặc quét mã bên dưới:{" "}
                              </span>
                              <div className="w-full flex justify-center xl:justify-normal">
                                <img
                                  src={QR}
                                  alt=""
                                  className="w-1/2 h-auto xl:h-[200px] xl:object-contain xl:object-left"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : selectedTab === 1 ? (
                      <>
                        <DonationAmount />
                        <DonationMethod />
                        <PersonalInformation />
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col gap-4 xl:gap-5">
                          <label className="text-base xl:text-xl">
                            Credit Card
                          </label>
                          <div className="flex flex-col gap-1 xl:gap-2">
                            <div className="flex gap-1 items-center">
                              <img src={key} alt="key" />
                              <span className="text-xs text-primary">
                                Giao thức thanh toán mã hoá an toàn
                              </span>
                            </div>
                            <div className="relative">
                              <img
                                src={card}
                                alt="card"
                                className="absolute left-3 xl:left-7 top-1/2 -translate-y-[57%]"
                              />
                              <button className="absolute bg-[#001D0C] rounded py-1 px-[10px] right-2 xl:right-7 top-1/2 -translate-y-1/2 text-xs xl:text-sm text-white">
                                Dùng{" "}
                                <span className="text-[#00FE67]">link</span>
                              </button>
                              <input
                                type="text"
                                placeholder="Số thẻ"
                                className="xl:py-4 xl:pr-6 text-sm xl:text-base py-[7px] pr-[11px] rounded-[5.6px] xl:rounded-xl outline-none border border-primary-5 border-opacity-50 pl-10 xl:pl-[55px] w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <DonationAmount />
                        <DonationMethod />
                        <PersonalInformation />
                      </>
                    )}
                    <button
                      onClick={() => {
                        if (isMobileScreen) {
                          setIsShowAppreciationMobile(true);
                          setIsDonationModalOpen(false);
                        } else {
                          setIsShowAppreciation(true);
                        }
                        setAppreciationType("quyen-gop");
                      }}
                      className="bg-primary mt-8 xl:mt-10 w-full py-2 xl:py-4 text-white text-sm xl:text-base rounded-lg"
                    >
                      Quyên góp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DonationModal;
