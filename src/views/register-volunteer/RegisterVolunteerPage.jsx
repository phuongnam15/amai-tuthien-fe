import TopImage from "../../components/TopImage";
import cloud3 from "../../assets/images/backgrounds/cloud-31.webp";
import banner2 from "../../assets/images/backgrounds/banner2.webp";
import banner from "../../assets/images/backgrounds/banner.webp";
import useCheckScreen from "../../utils/hooks/useCheckScreen";
import reason1 from "../../assets/images/backgrounds/reason-1.webp";
import reason2 from "../../assets/images/backgrounds/reason-2.webp";
import reason3 from "../../assets/images/backgrounds/reason-3.webp";
import partner1 from "../../assets/images/logos/partner-1.svg";
import partner2 from "../../assets/images/logos/partner-2.svg";
import partner3 from "../../assets/images/logos/partner-3.svg";
import partner4 from "../../assets/images/logos/partner-4.svg";
import ListItem from "../../components/animations/list-item/ListItem";
import image from "../../assets/images/backgrounds/image.png";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import feeling1 from "../../assets/images/backgrounds/feeling-1.webp";
import feeling2 from "../../assets/images/2.webp";
import smoothScroll from "../../utils/smoothScroll";
import CollapsedText from "../../components/CollapsedText";

const feelings = [
  {
    title:
      "Nguyễn Thị A - Tình nguyện viên tham gia chương trình Giúp đỡ chùa Ba Vàng, 2024",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ultrices odio ornare orci elementum. Cursus pellentesque non nunc faucibus ipsum. Non imperdiet nibh ac in malesuada diam ut vestibulum. Habitant laoreet orci tellus elit. Purus suscipit leo rhoncus magna enim scelerisque fermentum risus dolorMauris convallis nibh integer in a consequat vel",
    image: feeling1,
  },
  {
    title:
      "Nguyễn Văn B - Tình nguyện viên tham gia chương trình Giúp đỡ chùa Ba Vàng, 2024",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ultrices odio ornare orci elementum. Cursus pellentesque non nunc faucibus ipsum. Non imperdiet nibh ac in malesuada diam ut vestibulum. Habitant laoreet orci tellus elit. Purus suscipit leo rhoncus magna enim scelerisque fermentum risus dolorMauris convallis nibh integer in a consequat vel",
    image: feeling2,
  },
];

const charityFunds = [
  {
    name: "1Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
    donations: 50,
    target: 2000000000,
    progress: 1000000000,
    image: image,
  },
  {
    name: "2Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
    donations: 50,
    target: 2000000000,
    progress: 1000000000,
    image: image,
  },
  {
    name: "3Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
    donations: 50,
    target: 2000000000,
    progress: 1000000000,
    image: image,
  },
];

const RegisterVolunteerPage = () => {
  const [isAtOffice, setIsAtOffice] = useState(false);
  const [isAtEvent, setIsAtEvent] = useState(false);
  const { isMobileScreen } = useCheckScreen();

  return (
    <div className="relative w-full bg-white">
      {isMobileScreen ? (
        <TopImage cloud={cloud3} image={banner} />
      ) : (
        <TopImage cloud={cloud3} image={banner2} />
      )}
      <div className="w-full">
        <div className="container">
          <div className="flex flex-col w-full py-8 xl:py-[60px] gap-8 xl:gap-[90px]">
            <div className="flex flex-col items-center xl:gap-4">
              <h1 className="font-lora-regular text-xl xl:text-4xl px-16 xl:px-0 text-primary text-center mb-4 xl:mb-0">
                Tình Nguyện Với “Tôi Đi Từ Thiện” Để Làm Nên Những Đổi Thay
              </h1>
              <CollapsedText
                collapseText={"Lorem ipsum dolor sit amet consectetur. A quis nec leo imperdiet at commodo sed. Pharetra eu a urna mauris pretium. Morbi phasellus in congue eleifend duis. Morbi rhoncus amet adipiscing platea at lectus."}
                textArray={[
                  "Lorem ipsum dolor sit amet consectetur. A quis nec leo imperdiet at commodo sed. Pharetra eu a urna mauris pretium. Morbi phasellus in congue eleifend duis. Morbi rhoncus amet adipiscing platea at lectus. Lorem ipsum dolor sit amet consectetur. A quis nec leo imperdiet at commodo sed. Pharetra eu a urna mauris pretium. Morbi phasellus in congue eleifend duis. Morbi rhoncus amet adipiscing platea at lectus. Lorem ipsum dolor sit amet consectetur. A quis nec leo imperdiet at commodo sed. Pharetra eu a urna mauris pretium. Morbi phasellus in congue eleifend duis. Morbi rhoncus amet adipiscing platea at lectus. Morbi rhoncus amet adipiscing platea at lectus."
                ]}
                styleText={"text-sm xl:text-base leading-[21px] xl:leading-6 xl:px-32"}
              />
              <button
                onClick={() => smoothScroll("register-section", 400)}
                className="my-6 xl:my-2 py-[7px] xl:py-2 px-[22px] xl:px-6 bg-primary font-semibold text-sm xl:text-base rounded-[30px] xl:rounded-lg text-white"
              >
                Đăng kí ngay
              </button>
              <div className="w-[200px] xl:w-[280px] h-[2px] bg-linear-5 xl:mt-4"></div>
            </div>
            <div className="">
              <h1 className="text-center  font-lora-regular text-xl xl:text-4xl mb-6 xl:mb-10">
                Cách bạn có thể đóng góp công đức tới những ngôi chùa
              </h1>
              <div className="flex flex-col gap-6 xl:gap-10">
                <div className="flex flex-col xl:flex-row gap-6 xl:gap-0">
                  <div className="flex flex-col gap-2 flex-1 xl:pr-[98px]">
                    <h1 className="text-base xl:text-2xl font-semibold ">
                      Tình nguyện tại văn phòng của chúng tôi
                    </h1>
                    <p className="text-sm xl:text-base leading-6 ">
                      A quis nec leo imperdiet at commodo sed. Pharetra eu a
                      urna mauris pretium. Morbi phasellus in congue eleifend
                      duis. Morbi rhoncus amet adipiscing platea at lectus.
                      Morbi rhoncus amet adipiscing platea at lectus. A quis nec
                      leo imperdiet at commodo sed. Pharetra eu a urna mauris
                      pretium. Morbi phasellus in congue eleifend duis. Morbi
                      rhoncus amet adipiscing platea at lectus. Morbi rhoncus
                      amet adipiscing platea at lectus.
                    </p>
                  </div>
                  <div className="h-[200px] relative xl:h-[300px] rounded-lg overflow-hidden w-full xl:w-[49.5%]">
                    <img
                      src={isMobileScreen ? reason2 : reason3}
                      alt=""
                      className="xl:object-top w-full absolute top-1/2 -translate-y-1/2 xl:top-auto xl:translate-y-0"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="h-[300px] hidden xl:block rounded-lg overflow-hidden w-[49.5%]">
                    <img src={reason1} alt="" className="object-top w-full" />
                  </div>
                  <div className="flex flex-col gap-2 flex-1 xl:pl-[98px]">
                    <h1 className="text-base xl:text-2xl font-semibold ">
                      Tình nguyện tại các sự kiện của chúng tôi
                    </h1>
                    <p className="text-sm xl:text-base leading-6 ">
                      A quis nec leo imperdiet at commodo sed. Pharetra eu a
                      urna mauris pretium. Morbi phasellus in congue eleifend
                      duis. Morbi rhoncus amet adipiscing platea at lectus.
                      Morbi rhoncus amet adipiscing platea at lectus. A quis nec
                      leo imperdiet at commodo sed. Pharetra eu a urna mauris
                      pretium. Morbi phasellus in congue eleifend duis. Morbi
                      rhoncus amet adipiscing platea at lectus. Morbi rhoncus
                      amet adipiscing platea at lectus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ListItem
        title={"Cảm nhận của các bạn tình nguyện viên"}
        bgColor={"bg-primary-2"}
        type={"feeling"}
        items={feelings}
        padding={"pt-5 pb-3 xl:py-[68px]"}
      />

      <div className="w-full bg-white" id="register-section">
        <div className="container">
          <div className="w-full xl:px-[200px] flex flex-col gap-4 xl:gap-6 py-10 xl:py-20">
            <h1 className="text-xl xl:text-4xl font-lora-regular text-center text-primary">
              Điền Biểu Mẫu Sau Để Tham Gia Thiện Nguyện Cùng “Tôi Đi Từ Thiện”
            </h1>
            <span className="text-xs xl:text-base text-center">
              "Chung tay vì nụ cười trẻ thơ, cùng nhau gieo mầm từ bi"
            </span>
            <input type="text" placeholder="Họ và tên" className="form-input" />
            <div className="flex flex-row xl:flex-col gap-4 xl:gap-6">
              <div className="flex flex-col gap-4 xl:gap-5">
                <label className="text-base xl:text-xl">Địa chỉ Email</label>
                <input
                  type="text"
                  placeholder="Địa chỉ Email"
                  className="form-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-3 xl:gap-y-4">
              <div className="flex col-span-2 items-center gap-1">
                <span className="text-sm xl:text-base font-semibold ">
                  Bạn muốn đăng ký tình nguyện
                </span>
                <span className="font-light text-sm xl:text-base italic text-[#A62200]">
                  (Bắt buộc)
                </span>
              </div>
              <div className="col-span-2 xl:col-span-1 flex gap-[7.5px] xl:gap-3 items-center">
                <label
                  htmlFor="office"
                  className={`${isAtOffice && "bg-primary"} form-checkbox`}
                >
                  {isAtOffice && (
                    <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    id="office"
                    checked={isAtOffice}
                    onChange={() => setIsAtOffice(!isAtOffice)}
                  />
                </label>
                <span className="text-xs xl:text-base">
                  Tại văn phòng của chúng tôi
                </span>
              </div>
              <div className="col-span-2 xl:col-span-1 flex gap-[7.5px] xl:gap-3 items-center">
                <label
                  htmlFor="event"
                  className={`${isAtEvent && "bg-primary"} form-checkbox`}
                >
                  {isAtEvent && (
                    <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    id="event"
                    checked={isAtEvent}
                    onChange={() => setIsAtEvent(!isAtEvent)}
                  />
                </label>
                <span className="text-xs xl:text-base">
                  Tại các sự kiện của chúng tôi
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1 xl:gap-4">
              <span className="text-sm  xl:text-base font-semibold ">
                Tài lên CV của bạn
              </span>
              <div className="border border-primary-5 border-opacity-50 rounded-[5.6px] xl:rounded-xl py-[10px] px-2 xl:py-4 xl:px-4 flex justify-end items-center">
                <label htmlFor="" for="file-upload" className="cursor-pointer">
                  <span className="text-xs xl:text-xl  py-[10px] px-4 hover:bg-gray-300 transition duration-300 bg-[#C8C8C8] rounded-lg">
                    Browse
                  </span>
                  <input type="file" className="hidden" id="file-upload" />
                </label>
              </div>
            </div>

            <textarea
              placeholder="Lời nhắn"
              className="form-input h-[85px] xl:h-[180px]"
            />

            <button className="px-[22px] xl:px-[45px] py-[7px] xl:py-[10px] rounded-[30px] xl:rounded-[32px] bg-primary text-sm xl:text-base font-semibold self-start text-white">
              Gửi đăng ký
            </button>
          </div>
        </div>
      </div>

      <ListItem
        title={"Các chương trình khác"}
        bgColor={"bg-white"}
        type={"charity_funds"}
        items={charityFunds}
        padding={"pb-8 xl:pb-[90px]"}
      />
    </div>
  );
};

export default RegisterVolunteerPage;
