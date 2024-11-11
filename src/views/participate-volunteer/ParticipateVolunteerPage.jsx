import TopImage from "../../components/TopImage";
import cloud3 from "../../assets/images/backgrounds/cloud-31.webp";
import banner2 from "../../assets/images/backgrounds/banner2.webp";
import banner from "../../assets/images/backgrounds/banner.webp";
import useCheckMobileScreen from "../../utils/hooks/useCheckMobileScreen";
import reason1 from "../../assets/images/backgrounds/reason-1.webp";
import reason2 from "../../assets/images/backgrounds/reason-2.webp";
import partner1 from "../../assets/images/logos/partner-1.svg";
import partner2 from "../../assets/images/logos/partner-2.svg";
import partner3 from "../../assets/images/logos/partner-3.svg";
import partner4 from "../../assets/images/logos/partner-4.svg";
import ListItem from "../../components/animations/list-item/ListItem";
import image from "../../assets/images/backgrounds/image.png";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import smoothScroll from "../../utils/smoothScroll";
import CollapsedText from "../../components/CollapsedText";

const partners = [
  {
    image: partner1,
  },
  {
    image: partner2,
  },
  {
    image: partner3,
  },
  {
    image: partner4,
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

const ParticipateVolunteerPage = () => {
  const isMobileScreen = useCheckMobileScreen();
  const [isFinancialMarket, setIsFinancialMarket] = useState(false);
  const [isDonateItems, setIsDonateItems] = useState(false);
  const [isParticipateInVolunteering, setIsParticipateInVolunteering] =
    useState(false);
  const [isOtherType, setIsOtherType] = useState(false);
  const [isTempleBuilding, setIsTempleBuilding] = useState(false);
  const [isMidAutumnFestival, setIsMidAutumnFestival] = useState(false);
  const [isKindergartenCompassion, setIsKindergartenCompassion] =
    useState(false);
  const [isOtherProject, setIsOtherProject] = useState(false);
  const [isSocialGoal, setIsSocialGoal] = useState(false);
  const [isCommunityDevelopment, setIsCommunityDevelopment] = useState(false);
  const [isBrandImage, setIsBrandImage] = useState(false);
  const [isOtherTarget, setIsOtherTarget] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

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
            <div className="flex flex-col items-center xl:gap-4 xl:px-36">
              <h1 className="font-lora-regular text-xl xl:text-4xl px-14 xl:px-0 text-primary text-center mb-4 xl:mb-0">
                Doanh Nghiệp Từ Thiện “Sẻ Chia Phước Lành”
              </h1>
              <CollapsedText
                collapseText={
                  "Lorem ipsum dolor sit amet consectetur. A quis nec leo imperdiet at commodo sed. Pharetra eu a urna mauris pretium. Morbi phasellus in congue eleifend duis. Morbi rhoncus amet adipiscing platea at lectus."
                }
                textArray={[
                  "Lorem ipsum dolor sit amet consectetur. A quis nec leo imperdiet at commodo sed. Pharetra eu a urna mauris pretium. Morbi phasellus in congue eleifend duis. Morbi rhoncus amet adipiscing platea at lectus. Lorem ipsum dolor sit amet consectetur. A quis nec leo imperdiet at commodo sed. Pharetra eu a urna mauris pretium. Morbi phasellus in congue eleifend duis. Morbi rhoncus amet adipiscing platea at lectus. Lorem ipsum dolor sit amet consectetur. A quis nec leo imperdiet at commodo sed. Pharetra eu a urna mauris pretium. Morbi phasellus in congue eleifend duis. Morbi rhoncus amet adipiscing platea at lectus. Morbi rhoncus amet adipiscing platea at lectus.",
                ]}
                styleText={"text-sm xl:text-base leading-[21px] xl:leading-6"}
              />
              <button
                onClick={() => smoothScroll("contact-section", 400)}
                className="my-6 xl:my-2 py-[7px] xl:py-2 px-[22px] xl:px-6 bg-primary font-semibold text-sm xl:text-base rounded-[30px] xl:rounded-lg text-white"
              >
                Liên hệ hợp tác
              </button>
              <div className="w-[200px] xl:w-[280px] h-[2px] bg-linear-5 xl:mt-4"></div>
            </div>
            <div className="">
              <h1 className="text-center  font-lora-regular text-xl xl:text-4xl mb-6 xl:mb-10">
                Điều Gì Khiến Doanh Nghiệp Hợp Tác Với “Tôi Đi Từ Thiện”
              </h1>
              <div className="flex flex-col gap-6 xl:gap-10">
                <div className="flex flex-col xl:flex-row gap-6 xl:gap-0">
                  <div className="flex flex-col gap-2 flex-1 xl:pr-[98px]">
                    <h1 className="text-base xl:text-2xl font-semibold ">
                      Những dấu ấn từ thiện nổi bật
                    </h1>
                    <p className="text-sm xl:text-base leading-6 ">
                      Trong suốt hành trình hoạt động, chúng tôi đã thực hiện
                      nhiều dự án từ thiện đầy ý nghĩa nhằm giúp đỡ các ngôi
                      chùa và trẻ em mồ côi tại chùa. Từ việc xây dựng cơ sở vật
                      chất, hỗ trợ học phí cho trẻ em, đến việc cung cấp lương
                      thực và nhu yếu phẩm, mỗi dự án đều mang lại những thay
                      đổi tích cực cho cộng đồng. Những đóng góp của các đối tác
                      không chỉ giúp cải thiện cuộc sống cho những người cần hỗ
                      trợ mà còn lan tỏa tinh thần từ bi và lòng nhân ái đến
                      toàn xã hội.
                    </p>
                  </div>
                  <div className="h-[200px] relative xl:h-[300px] rounded-lg overflow-hidden w-full xl:w-[49.5%]">
                    <img
                      src={reason2}
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
                      Những dấu ấn từ thiện nổi bật
                    </h1>
                    <p className="text-sm xl:text-base leading-6 ">
                      Trong suốt hành trình hoạt động, chúng tôi đã thực hiện
                      nhiều dự án từ thiện đầy ý nghĩa nhằm giúp đỡ các ngôi
                      chùa và trẻ em mồ côi tại chùa. Từ việc xây dựng cơ sở vật
                      chất, hỗ trợ học phí cho trẻ em, đến việc cung cấp lương
                      thực và nhu yếu phẩm, mỗi dự án đều mang lại những thay
                      đổi tích cực cho cộng đồng. Những đóng góp của các đối tác
                      không chỉ giúp cải thiện cuộc sống cho những người cần hỗ
                      trợ mà còn lan tỏa tinh thần từ bi và lòng nhân ái đến
                      toàn xã hội.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ListItem
        bgColor={"bg-primary-2"}
        title={"Đối tác của chúng tôi"}
        type={"partner"}
        items={partners}
        padding={"py-5 xl:py-10"}
      />

      <div className="w-full bg-white" id="contact-section">
        <div className="container">
          <div className="w-full xl:px-[200px] flex flex-col gap-4 xl:gap-6 py-10 xl:py-20">
            <h1 className="text-xl xl:text-4xl px-5 xl:px-0 font-lora-regular text-center text-primary">
              Doanh Nghiệp Điền Biểu Mẫu Sau Để Tham Gia Thiện Nguyện Cùng “Tôi
              Đi Từ Thiện”
            </h1>
            <span className="text-xs xl:text-base text-center">
              "Chung tay vì nụ cười trẻ thơ, cùng nhau gieo mầm từ bi"
            </span>
            <input
              type="text"
              placeholder="Tên công ty, hoặc tổ chức"
              className="form-input"
            />
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
              <input
                type="text"
                placeholder="Họ và tên người đại diện"
                className="form-input flex-1"
              />
              <input
                type="text"
                placeholder="Chức vụ"
                className="form-input flex-1"
              />
            </div>
            <div className="flex gap-4 xl:gap-6">
              <input
                type="text"
                placeholder="Số điện thoại"
                className="form-input min-w-0 flex-1"
              />
              <input
                type="text"
                placeholder="Email"
                className="form-input min-w-0 flex-1"
              />
            </div>
            <div className="grid grid-cols-2 gap-y-2 xl:gap-y-4">
              <div className="flex col-span-2 items-center gap-1">
                <span className="text-sm xl:text-base font-semibold ">
                  Loại hình hợp tác
                </span>
                <span className="font-light text-sm xl:text-base italic text-[#A62200]">
                  (Bắt buộc)
                </span>
              </div>
              <div className="col-span-1 flex gap-[7.5px] xl:gap-3 items-center">
                <label
                  htmlFor="financial_market"
                  className={`${
                    isFinancialMarket && "bg-primary"
                  } form-checkbox`}
                >
                  {isFinancialMarket && (
                    <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    id="financial_market"
                    checked={isFinancialMarket}
                    onChange={() => setIsFinancialMarket(!isFinancialMarket)}
                  />
                </label>
                <span className="text-xs xl:text-base">Tài chợ tài chính</span>
              </div>

              <div className="col-span-1 flex gap-[7.5px] xl:gap-3 items-center">
                <label
                  htmlFor="donate_items"
                  className={`${isDonateItems && "bg-primary"} form-checkbox`}
                >
                  {isDonateItems && (
                    <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    id="donate_items"
                    checked={isDonateItems}
                    onChange={() => setIsDonateItems(!isDonateItems)}
                  />
                </label>
                <span className="text-xs xl:text-base">Quyên góp vật phẩm</span>
              </div>

              <div className="self-start col-span-1 flex gap-[7.5px] xl:gap-3 items-center">
                <label
                  htmlFor="participate_in_volunteering"
                  className={`${
                    isParticipateInVolunteering && "bg-primary"
                  } form-checkbox`}
                >
                  {isParticipateInVolunteering && (
                    <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    id="participate_in_volunteering"
                    checked={isParticipateInVolunteering}
                    onChange={() =>
                      setIsParticipateInVolunteering(
                        !isParticipateInVolunteering
                      )
                    }
                  />
                </label>
                <span className="text-xs xl:text-base">
                  Tham gia tình nguyện
                </span>
              </div>

              <div className="col-span-1 flex flex-col gap-[7.5px] xl:gap-3 items-start">
                <div className="flex items-center gap-[7.5px] xl:gap-3">
                  <label
                    htmlFor="other_type"
                    className={`${isOtherType && "bg-primary"} form-checkbox`}
                  >
                    {isOtherType && (
                      <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                    )}
                    <input
                      type="checkbox"
                      className="hidden"
                      id="other_type"
                      checked={isOtherType}
                      onChange={() => setIsOtherType(!isOtherType)}
                    />
                  </label>
                  <span className="text-xs xl:text-base">
                    Khác (điền thông tin chi tiết)
                  </span>
                </div>
              </div>
              {isOtherType && (
                <textarea
                  placeholder="Vui lòng điền thông tin chi tiết tại đây..."
                  className="w-full col-span-2 p-2 border border-gray-300 rounded-md mt-2 text-sm xl:text-base outline-primary text-gray-700"
                ></textarea>
              )}
            </div>
            <div className="grid grid-cols-2 gap-y-2 xl:gap-y-4">
              <div className="flex col-span-2 items-center gap-1">
                <span className="text-sm xl:text-base font-semibold ">
                  Dự án quan tâm
                </span>
                <span className="font-light text-sm xl:text-base italic text-[#A62200]">
                  (Bắt buộc)
                </span>
              </div>
              <div className="col-span-1 flex gap-[7.5px] xl:gap-3 items-center">
                <label
                  htmlFor="temple_building"
                  className={`${
                    isTempleBuilding && "bg-primary"
                  } form-checkbox`}
                >
                  {isTempleBuilding && (
                    <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    id="temple_building"
                    checked={isTempleBuilding}
                    onChange={() => setIsTempleBuilding(!isTempleBuilding)}
                  />
                </label>
                <span className="text-xs xl:text-base">Góp gạch xây chùa</span>
              </div>

              <div className="col-span-1 flex gap-[7.5px] xl:gap-3 items-center">
                <label
                  htmlFor="mid_autumn_festival"
                  className={`${
                    isMidAutumnFestival && "bg-primary"
                  } form-checkbox`}
                >
                  {isMidAutumnFestival && (
                    <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    id="mid_autumn_festival"
                    checked={isMidAutumnFestival}
                    onChange={() =>
                      setIsMidAutumnFestival(!isMidAutumnFestival)
                    }
                  />
                </label>
                <span className="text-xs xl:text-base">Trung thu cho em</span>
              </div>

              <div className="self-start col-span-1 flex gap-[7.5px] xl:gap-3 items-center">
                <label
                  htmlFor="kindergarten_compassion"
                  className={`${
                    isKindergartenCompassion && "bg-primary"
                  } form-checkbox`}
                >
                  {isKindergartenCompassion && (
                    <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    id="kindergarten_compassion"
                    checked={isKindergartenCompassion}
                    onChange={() =>
                      setIsKindergartenCompassion(!isKindergartenCompassion)
                    }
                  />
                </label>
                <span className="text-xs xl:text-base">Mầm non từ bi</span>
              </div>

              <div className="col-span-1 flex flex-col gap-[7.5px] xl:gap-3 items-start">
                <div className="flex items-center gap-[7.5px] xl:gap-3">
                  <label
                    htmlFor="other_project"
                    className={`${
                      isOtherProject && "bg-primary"
                    } form-checkbox`}
                  >
                    {isOtherProject && (
                      <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                    )}
                    <input
                      type="checkbox"
                      className="hidden"
                      id="other_project"
                      checked={isOtherProject}
                      onChange={() => setIsOtherProject(!isOtherProject)}
                    />
                  </label>
                  <span className="text-xs xl:text-base">
                    Khác (điền thông tin chi tiết)
                  </span>
                </div>
              </div>
              {isOtherProject && (
                <textarea
                  placeholder="Vui lòng điền thông tin chi tiết tại đây..."
                  className="w-full p-2 col-span-2 border border-gray-300 rounded-md mt-2 text-sm xl:text-base outline-primary text-gray-700"
                ></textarea>
              )}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-2 xl:gap-y-4">
              <div className="flex col-span-1 xl:col-span-2 items-center gap-1">
                <span className="text-sm xl:text-base font-semibold ">
                  Mục tiêu hợp tác
                </span>
                <span className="font-light text-sm xl:text-base italic text-[#A62200]">
                  (Bắt buộc)
                </span>
              </div>
              <div className="col-span-1 flex gap-[7.5px] xl:gap-3 items-center">
                <label
                  htmlFor="social_goal"
                  className={`${isSocialGoal && "bg-primary"} form-checkbox`}
                >
                  {isSocialGoal && (
                    <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    id="social_goal"
                    checked={isSocialGoal}
                    onChange={() => setIsSocialGoal(!isSocialGoal)}
                  />
                </label>
                <span className="text-xs xl:text-base">
                  Mục tiêu xã hội (CSR)
                </span>
              </div>

              <div className="col-span-1 flex gap-[7.5px] xl:gap-3 items-center">
                <label
                  htmlFor="community_development"
                  className={`${
                    isCommunityDevelopment && "bg-primary"
                  } form-checkbox`}
                >
                  {isCommunityDevelopment && (
                    <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    id="community_development"
                    checked={isCommunityDevelopment}
                    onChange={() =>
                      setIsCommunityDevelopment(!isCommunityDevelopment)
                    }
                  />
                </label>
                <span className="text-xs xl:text-base">
                  Phát triển mối quan hệ cộng đồng
                </span>
              </div>

              <div className="self-start col-span-1 flex gap-[7.5px] xl:gap-3 items-center">
                <label
                  htmlFor="brand_image"
                  className={`${isBrandImage && "bg-primary"} form-checkbox`}
                >
                  {isBrandImage && (
                    <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    id="brand_image"
                    checked={isBrandImage}
                    onChange={() => setIsBrandImage(!isBrandImage)}
                  />
                </label>
                <span className="text-xs xl:text-base">
                  Tăng cường hình ảnh thương hiệu
                </span>
              </div>

              <div className="col-span-1 flex flex-col gap-[7.5px] xl:gap-3 items-start">
                <div className="flex items-center gap-[7.5px] xl:gap-3">
                  <label
                    htmlFor="other_target"
                    className={`${isOtherTarget && "bg-primary"} form-checkbox`}
                  >
                    {isOtherTarget && (
                      <FaCheck className="text-white w-3 h-3 xl:w-6 xl:h-6" />
                    )}
                    <input
                      type="checkbox"
                      className="hidden"
                      id="other_target"
                      name="other_target"
                      checked={isOtherTarget}
                      onChange={() => setIsOtherTarget(!isOtherTarget)}
                    />
                  </label>
                  <span className="text-xs xl:text-base">
                    Khác (điền thông tin chi tiết)
                  </span>
                </div>
              </div>
              {isOtherTarget && (
                <textarea
                  placeholder="Vui lòng điền thông tin chi tiết tại đây..."
                  className="w-full p-2 col-span-2 border border-gray-300 rounded-md mt-2 text-sm xl:text-base outline-primary text-gray-700"
                ></textarea>
              )}
            </div>
            <div className="w-full flex flex-col gap-1 xl:gap-4">
              <span className="text-sm  xl:text-base font-semibold ">
                Tài liệu đính kèm (nếu có)
              </span>
              <div className="border border-[#686868] border-opacity-50 rounded-[5.6px] xl:rounded-xl py-[10px] px-2 xl:py-4 xl:px-4 flex justify-end items-center">
                <label htmlFor="" for="file-upload" className="cursor-pointer">
                  <span className="text-xs xl:text-xl  py-[10px] px-4 hover:bg-gray-300 transition duration-300 bg-[#C8C8C8] rounded-lg">
                    Browse
                  </span>
                  <input type="file" className="hidden" id="file-upload" />
                </label>
              </div>
            </div>

            <textarea
              placeholder="Thông điệp hoặc yêu cầu thêm"
              className="form-input h-[85px] xl:h-[180px]"
            />

            <div className="w-full flex gap-2 xl:gap-4 items-center">
              <label
                htmlFor="terms_accepted"
                className={`${
                  isTermsAccepted && "bg-primary"
                } cursor-pointer flex justify-center items-center xl:w-[25px] xl:h-[25px] w-4 h-4 rounded border border-[#686868] border-opacity-50`}
              >
                {isTermsAccepted && (
                  <FaCheck className="text-white w-2 h-2 xl:w-4 xl:h-4" />
                )}
                <input
                  type="checkbox"
                  className="hidden"
                  id="terms_accepted"
                  checked={isTermsAccepted}
                  onChange={() => setIsTermsAccepted(!isTermsAccepted)}
                />
              </label>
              <a
                href="https://youtube.com"
                className="text-primary text-xs xl:text-base underline"
              >
                Doanh nghiệp đồng ý với các điều khoản hợp tác từ thiện?
              </a>
            </div>

            <button className="px-[22px] xl:px-[45px] py-[7px] xl:py-[10px] rounded-[30px] xl:rounded-[32px] bg-primary text-sm xl:text-base font-semibold self-start text-white">
              Gửi đăng ký
            </button>
          </div>
        </div>
      </div>

      <ListItem
        title={"Các Chương Trình Khác"}
        bgColor={"bg-white"}
        type={"charity_funds"}
        items={charityFunds}
        padding={"pb-8 xl:pb-[90px]"}
      />
    </div>
  );
};

export default ParticipateVolunteerPage;
