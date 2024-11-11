import useCheckMobileScreen from "../../utils/hooks/useCheckMobileScreen";
import cloud3 from "../../assets/images/backgrounds/cloud-31.webp";
import banner from "../../assets/images/backgrounds/banner.webp";
import banner2 from "../../assets/images/backgrounds/banner2.webp";
import TopImage from "../../components/TopImage";
import { useEffect, useState } from "react";
import image from "../../assets/images/backgrounds/image.png";
import ListItem from "../../components/animations/list-item/ListItem";
import post1 from "../../assets/images/post-1.webp";
import post2 from "../../assets/images/post-2.webp";
import post3 from "../../assets/images/post-3.webp";
import mamnon1 from "../../assets/images/mamnon-1.webp";
import mamnon2 from "../../assets/images/mamnon-2.webp";
import mamnon3 from "../../assets/images/mamnon-3.webp";
import mamnon4 from "../../assets/images/mamnon-4.webp";
import mamnon5 from "../../assets/images/mamnon-5.webp";
import mamnon6 from "../../assets/images/mamnon-6.webp";
import CharityFundCard from "../../components/CharityFundCard";
import { FiArrowRight } from "react-icons/fi";
import Preschool from "../../components/Preschool";
import SeeMoreButton from "../../components/animations/button/SeeMoreButton";
import { useLocation, useNavigate } from "react-router-dom";
const tablist = [
  {
    name: "Tâm bồ đề",
    href: "/tam-bo-de",
  },
  {
    name: "Trung thu cho em",
    href: "/trung-thu-cho-em",
  },
  {
    name: "Mầm non từ bi",
    href: "/mam-non-tu-bi",
  },
];

const charityFunds = [
  {
    id: 1,
    name: "1Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
    donations: 50,
    target: 2000000000,
    progress: 1000000000,
    image: image,
  },
  {
    id: 2,
    name: "2Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
    donations: 50,
    target: 2000000000,
    progress: 1000000000,
    image: image,
  },
  {
    id: 3,
    name: "3Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
    donations: 50,
    target: 2000000000,
    progress: 1000000000,
    image: image,
  },
  {
    id: 4,
    name: "4Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
    donations: 50,
    target: 2000000000,
    progress: 1000000000,
    image: image,
  },
  {
    id: 5,
    name: "5Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
    donations: 50,
    target: 2000000000,
    progress: 1000000000,
    image: image,
  },
  {
    id: 6,
    name: "6Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
    donations: 50,
    target: 2000000000,
    progress: 1000000000,
    image: image,
  },
];

const posts = [
  {
    image: post1,
    created_at: "11/02/2024",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique praesent amet",
  },
  {
    image: post2,
    created_at: "11/02/2024",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique praesent amet",
  },
  {
    image: post3,
    created_at: "11/02/2024",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique praesent amet",
  },
];

const preschools = [
  {
    id: 1,
    image: mamnon1,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
  {
    id: 2,
    image: mamnon2,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
  {
    id: 3,
    image: mamnon3,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
  {
    id: 4,
    image: mamnon4,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
  {
    id: 5,
    image: mamnon5,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
  {
    id: 6,
    image: mamnon6,
    name: "Nguyễn Văn A",
    description: "Mầm non tại chùa Ba Vàng",
  },
];

const CharityEvent = () => {
  const isMobileScreen = useCheckMobileScreen();
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  useEffect(() => {
    setSelectedTab(
      pathname === "/tam-bo-de" ? 0 : pathname === "/trung-thu-cho-em" ? 1 : 2
    );
  }, []);
  return (
    <div className="w-full bg-white">
      {isMobileScreen ? (
        <TopImage cloud={cloud3} image={banner} />
      ) : (
        <TopImage cloud={cloud3} image={banner2} />
      )}

      <div className="flex justify-center items-center gap-[11px] xl:gap-8 pt-5">
        {tablist.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setSelectedTab(index);
                navigate(item.href);
              }}
              className={`${
                selectedTab === index
                  ? "bg-[#FFE7BA] text-[#DD8124] border-[#FFE7BA]"
                  : "text-primary-5"
              } py-1 xl:py-[10px] text-xs xl:text-xl px-4 xl:px-[72px] border-[0.3px] xl:border rounded-[18px] xl:rounded-[60px] border-primary-5 `}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {selectedTab === 0 ? (
        <>
          <div className="w-full py-8 xl:pt-[58px] xl:pb-[90px]">
            <div className="container flex flex-col gap-8 xl:gap-[60px]">
              <div className="grid grid-cols-6 gap-x-4 gap-y-6 xl:gap-x-6 xl:gap-y-[60px] w-full">
                {charityFunds.map((item, index) => {
                  return (
                    <div
                      onClick={() =>
                        navigate(`/chi-tiet-quy-tu-thien/${item.id}`)
                      }
                      className="col-span-3 xl:col-span-2"
                    >
                      <CharityFundCard item={item} index={index} />
                    </div>
                  );
                })}
              </div>
              <SeeMoreButton text={"Xem thêm"} Icon={FiArrowRight} />
            </div>
          </div>
        </>
      ) : selectedTab === 1 ? (
        <>
          <div className="w-full py-8 xl:pt-[58px] xl:pb-[90px]">
            <div className="container flex flex-col gap-8 xl:gap-[60px]">
              <div className="grid grid-cols-6 gap-x-4 gap-y-6 xl:gap-x-6 xl:gap-y-[60px] w-full">
                {charityFunds.map((item, index) => {
                  return (
                    <div
                      onClick={() =>
                        navigate(`/chi-tiet-quy-tu-thien/${item.id}`)
                      }
                      className="col-span-3 xl:col-span-2"
                    >
                      <CharityFundCard item={item} index={index} />
                    </div>
                  );
                })}
              </div>
              <SeeMoreButton text={"Xem thêm"} Icon={FiArrowRight} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full py-8 xl:pt-[58px] xl:pb-[90px]">
            <div className="container flex flex-col gap-8 xl:gap-[60px]">
              <div className="grid grid-cols-6 gap-x-4 gap-y-6 xl:gap-x-6 xl:gap-y-[60px] w-full">
                {preschools.map((item, index) => {
                  return (
                    <div className="col-span-3 xl:col-span-2">
                      <Preschool item={item} index={index} />
                    </div>
                  );
                })}
              </div>
              <SeeMoreButton text={"Xem thêm"} Icon={FiArrowRight} />
            </div>
          </div>
        </>
      )}
      <ListItem
        bgColor={"bg-white"}
        title={"Tin tức cộng đồng"}
        type={"posts"}
        items={posts}
        padding={"pb-8 xl:pb-[90px]"}
      />
    </div>
  );
};

export default CharityEvent;
