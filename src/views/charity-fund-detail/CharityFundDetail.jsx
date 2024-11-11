import { useParams } from "react-router-dom";
import useCheckMobileScreen from "../../utils/hooks/useCheckMobileScreen";
import cloud3 from "../../assets/images/backgrounds/cloud-31.webp";
import banner from "../../assets/images/backgrounds/banner.webp";
import banner2 from "../../assets/images/backgrounds/banner2.webp";
import TopImage from "../../components/TopImage";
import { useState } from "react";
import tag from "../../assets/images/icons/tag.svg";
import location from "../../assets/images/icons/map-pin.svg";
import dollar from "../../assets/images/icons/solar_dollar-linear.svg";
import ListItem from "../../components/animations/list-item/ListItem";
import image from "../../assets/images/backgrounds/image.png";
import mamnon1 from "../../assets/images/mamnon-1.webp";
import mamnon2 from "../../assets/images/mamnon-2.webp";
import mamnon3 from "../../assets/images/mamnon-3.webp";
import mamnon4 from "../../assets/images/mamnon-4.webp";
import mamnon5 from "../../assets/images/mamnon-5.webp";
import mamnon6 from "../../assets/images/mamnon-6.webp";
import CollapsedText from "../../components/CollapsedText";

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

const preschools = [
  {
    image: mamnon1,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
  {
    image: mamnon2,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
  {
    image: mamnon3,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
  {
    image: mamnon4,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
  {
    image: mamnon5,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
  {
    image: mamnon6,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
];

const CharityFundDetail = () => {
  const { id } = useParams();
  const isMobileScreen = useCheckMobileScreen();
  const [seeAll, setSeeAll] = useState(false);
  const [fund, setFund] = useState({
    id: id,
    type: "preschool",
    title: "Quỹ Hỗ Trợ Xây Dựng Chùa Ba Vàng",
    content: "",
    beneficiaries: "Chùa ba vàng",
    account_name: "Chùa ba vàng",
    bank_name: "Ngân hàng quân đội MB Bank",
    bank_number: "0123456789",
    target: 60000000,
    progress: 30000000,
    address: "Tổ 17B khu 5A, Quang Trung, Uông Bí, Quảng Ninh 02307",
    description:
      "Lorem ipsum dolor sit amet consectetur. A quis nec leo imperdiet at commodo sed. Pharetra eu a urna mauris pretium. Morbi phasellus in congue eleifend duis. Morbi rhoncus amet adipiscing platea at lectus. Lorem ipsum dolor sit amet consectetur. A quis nec leo imperdiet at commodo sed. Pharetra eu a urna mauris pretium. Morbi phasellus in congue eleifend duis. Morbi rhoncus amet adipiscing platea at lectus. Lorem ipsum dolor sit amet consectetur. A quis nec leo imperdiet at commodo sed. Pharetra eu a urna mauris pretium. Morbi phasellus in congue eleifend duis. Morbi rhoncus amet adipiscing platea at lectus. Morbi rhoncus amet adipiscing platea at lectus",
    list_donors: [
      {
        name: "Nguyen Van A",
        amount: 2000000,
      },
      {
        name: "Nguyen Van A",
        amount: 2000000,
      },
      {
        name: "Nguyen Van A",
        amount: 2000000,
      },
      {
        name: "Nguyen Van A",
        amount: 2000000,
      },
      {
        name: "Nguyen Van A",
        amount: 2000000,
      },
      {
        name: "Nguyen Van A",
        amount: 2000000,
      },
      {
        name: "Nguyen Van A",
        amount: 2000000,
      },
    ],
  });

  return (
    <div className="w-full bg-white">
      {isMobileScreen ? (
        <TopImage cloud={cloud3} image={banner} />
      ) : (
        <TopImage cloud={cloud3} image={banner2} />
      )}
      <div className="container">
        <div className="flex flex-col items-center xl:gap-4 xl:px-36 pt-8 xl:pt-0">
          <h1 className="font-lora-regular text-xl xl:text-4xl px-14 xl:px-0 text-primary text-center mb-4 xl:mb-0">
            {fund.title}
          </h1>
          <CollapsedText 
            collapseText={fund.description.split(" ").slice(0, 30).join(" ")}
            textArray={[fund.description]}
            styleText={"text-sm xl:text-base leading-[21px] xl:leading-6"}
          />
          <div className="w-[200px] xl:w-[280px] h-[2px] bg-linear-5 mt-4 xl:mt-8"></div>
        </div>
        <div className="flex xl:flex-row flex-col-reverse gap-8 xl:gap-[98px] pt-8 xl:pt-16">
          <div className="flex-1 flex flex-col">
            <div>{fund.content}</div>

            <div className="px-4 py-6 xl:px-6 bg-[#E1E1E1] rounded-xl">
              <h1 className="font-bold text-base xl:text-2xl mb-3 xl:mb-8 ">
                Đối tượng thụ hưởng
              </h1>
              <div className="flex flex-col gap-[10px] xl:gap-5">
                <h1 className="font-semibold text-sm xl:text-xl ">
                  {fund.account_name}
                </h1>
                <div className="flex flex-col-reverse xl:flex-col gap-[10px] xl:gap-5">
                  <div className="flex gap-3 items-center">
                    <img src={tag} alt="" />
                    <span className="text-sm xl:text-base">Tâm bồ đề</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={location} alt="" />
                    <span className="text-sm xl:text-base">{fund.address}</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={dollar} alt="" />
                    <span className="text-sm xl:text-base">
                      Số tiền quyên góp của các nhà hảo tâm sẽ được chuyển trực
                      tiếp đến tài khoản thụ hưởng của chùa Ba Vàng
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 xl:gap-24">
            <div className="">
              <h1 className="xl:text-2xl font-bold mb-[19px] xl:mb-[21px]">
                Thông tin quyên góp
              </h1>
              <div className="mb-4 xl:mb-1 w-full py-4 px-[22px] xl:py-[22px] text-sm xl:text-base border border-[#B3B3B3] bg-[#ECECEC] gap-4 rounded-lg flex flex-col">
                <div className="flex gap-1">
                  <p className="font-semibold ">
                    Đối tượng thụ hưởng:
                  </p>{" "}
                  <p>{fund.beneficiaries}</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold ">Tên tài khoản:</p>{" "}
                  <p>{fund.account_name}</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold ">Tên ngân hàng:</p>{" "}
                  <p>{fund.bank_name}</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold ">Số tài khoản:</p>{" "}
                  <p>{fund.bank_number}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 mb-4 xl:mb-2">
                <div className="text-base">
                  <span className="xl:text-primary  font-bold xl:font-normal">
                    {fund.progress?.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                  <span className="hidden xl:inline">{" / "}</span>
                  <span className="xl:hidden">{" | "}</span>
                  <span className="text-[#808080]">
                    {fund.target?.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </div>
                <div className="relative rounded-[20px] bg-[#D9D9D9] w-full h-3">
                  <div className="absolute w-1/2 h-full bg-primary rounded-[20px]"></div>
                </div>
              </div>
              <div className="flex mb-4 xl:mb-3">
                <div className="flex flex-col flex-1 gap-2">
                  <span className="text-[#7D7D7D] xl:text-[#444] text-xs xl:text-sm">
                    Lượt quyên góp
                  </span>
                  <span className="font-semibold">
                    {fund.list_donors.length}
                  </span>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <span className="text-[#7D7D7D] xl:text-[#444] text-xs xl:text-sm">
                    Đạt được
                  </span>
                  <span className="font-semibold">
                    {Math.floor((fund.progress / fund.target) * 100)}%
                  </span>
                </div>
                <div className="hidden xl:flex flex-col flex-1 gap-2">
                  <span className="text-[#444] xl:text-sm">
                    Thời gian còn lại
                  </span>
                  <span className="text-sm font-semibold">{"60 ngày"}</span>
                </div>
                <div className="bg-primary-3 gap-0.5 px-4 xl:px-3 xl:hidden flex flex-col text-[#DD8124] justify-center items-center rounded-lg">
                  <span className="text-sm">Còn lại</span>
                  <span className="font-bold text-sm xl:text-sm">20 ngày</span>
                </div>
              </div>
              <div className="flex xl:flex-col w-full gap-4 xl:gap-[11px]">
                <button className="py-[10px] rounded-[32px] text-base bg-primary text-white flex-1">
                  Quyên góp
                </button>
                <button className="py-[10px] rounded-[32px] text-base border border-[#FFE7BA] text-[#DD8124] flex-1">
                  Chia sẻ
                </button>
              </div>
            </div>
            <div className="">
              <h1 className="xl:text-2xl font-bold mb-4 xl:mb-10">
                Danh sách các nhà hảo tâm
              </h1>
              <div className="flex flex-col w-full rounded-xl bg-[#E1E1E1] p-5 gap-3 xl:gap-4">
                {fund.list_donors
                  .slice(0, !seeAll ? 5 : fund.list_donors.length - 1)
                  .map((item, index) => {
                    return (
                      <div className="flex flex-col text-sm gap-1 xl:gap-2">
                        <span>{item.name}</span>
                        <span className="font-semibold ">
                          {item.amount?.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </div>
                    );
                  })}
                <button
                  onClick={() => setSeeAll(!seeAll)}
                  className="text-[#757575] text-sm"
                >
                  {seeAll ? "Ẩn bơt" : "Xem tất cả"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ListItem
        title={"Các chương trình khác"}
        bgColor={"bg-white"}
        type={fund.type === "preschool" ? "preschools" : "charity_funds"}
        items={charityFunds}
        padding={"py-8 xl:py-24"}
      />
    </div>
  );
};

export default CharityFundDetail;
