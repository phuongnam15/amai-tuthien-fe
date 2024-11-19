import useCheckScreen from "../../utils/hooks/useCheckScreen";
import CharityFundCard from "../../components/CharityFundCard";
import image from "../../assets/images/backgrounds/image.png";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import news1 from "../../assets/images/news-1.webp";
import news2 from "../../assets/images/news-2.webp";
import news3 from "../../assets/images/news-3.webp";
import news4 from "../../assets/images/news-4.webp";
import news5 from "../../assets/images/news-5.webp";
import news6 from "../../assets/images/news-6.webp";
import news7 from "../../assets/images/news-7.webp";
import Post from "../../components/Post";
import ListItem from "../../components/animations/list-item/ListItem";
import TopImage from "../../components/TopImage";
import cloud3 from "../../assets/images/backgrounds/cloud-31.webp";
import banner from "../../assets/images/backgrounds/banner.webp";
import banner2 from "../../assets/images/backgrounds/banner2.webp";
import SeeMoreButton from "../../components/animations/button/SeeMoreButton";
import { useNavigate } from "react-router-dom";

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

const news = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique praesent amet",
    created_at: "11/02/2024",
    image: news1,
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique praesent amet",
    created_at: "11/02/2024",
    image: news2,
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique praesent amet",
    created_at: "11/02/2024",
    image: news3,
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique praesent amet",
    created_at: "11/02/2024",
    image: news4,
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique praesent amet",
    created_at: "11/02/2024",
    image: news5,
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique praesent amet",
    created_at: "11/02/2024",
    image: news6,
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique praesent amet",
    created_at: "11/02/2024",
    image: news7,
  },
];

const PostPage = () => {
  const { isMobileScreen, isLargeScreen } = useCheckScreen();
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white">
      <TopImage cloud={cloud3} image={banner} />

      <div className={`w-full flex flex-col xl:flex-row py-8 xl:py-14 mx-auto gap-8 xl:gap-0 ${isLargeScreen && "container"} `}>
        <div
          className={`xl:pr-6 xl:border-r xl:border-[#C89400] flex flex-col gap-8 ${!isLargeScreen && "container"}`}
        >
          <h1 className="text-primary font-lora-regular text-xl xl:text-[32px] text-center w-full">
            Các tin tức quyên góp mới nhất
          </h1>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 xl:gap-x-6 xl:gap-y-[38px]">
            <div className="col-span-2">
              <div className="flex flex-col gap-2 xl:gap-4 col-span-6 xl:col-span-2">
                <div className="w-full h-[200px] xl:h-[372px] rounded-xl overflow-hidden">
                  <img
                    src={news[0].image}
                    alt=""
                    className="object-cover w-full h-full hover:scale-105 transition-all duration-300"
                  />
                </div>
                <span className="font-normal text-xs xl:text-sm">
                  {news[0].created_at}
                </span>
                <p onClick={() => navigate(`/chi-tiet-bai-viet/${news[0].id}`)} className="cursor-pointer hover:underline font-semibold text-sm xl:text-xl">
                  {news[0].description}
                </p>
              </div>
            </div>
            {news.map((item, index) => {
              return index > 0 ? (
                <div className="col-span-1">
                  <Post item={item} index={index} />
                </div>
              ) : (
                <></>
              );
            })}
          </div>
          <SeeMoreButton text={"Xem thêm"} Icon={FiArrowDown} />
        </div>
        {!isMobileScreen ? (
          <div className="xl:pl-6  flex flex-col xl:gap-8">
            <h1 className="text-primary font-lora-regular text-xl xl:text-[32px] text-center w-full">
              Hoàn cảnh quyên góp
            </h1>
            <div className="hidden flex-col xl:flex xl:gap-6">
              {charityFunds.map((item, index) => {
                return (
                  <div className="xl:w-[368px]">
                    <CharityFundCard item={item} index={index} />
                  </div>
                );
              })}
            </div>
            <SeeMoreButton text={"Xem tất cả"} Icon={FiArrowRight} />
          </div>
        ) : (
          <ListItem
            title={"Hoàn cảnh quyên góp"}
            bgColor={"bg-white"}
            type={"charity_funds"}
            items={charityFunds}
            padding={""}
          />
        )}
      </div>
    </div>
  );
};

export default PostPage;
