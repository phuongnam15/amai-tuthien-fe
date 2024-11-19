import banner from "../../assets/images/backgrounds/banner.webp";
import bode from "../../assets//images/backgrounds/bode.webp";
import tay from "../../assets/images/backgrounds/tay.webp";
import thap from "../../assets/images/backgrounds/thap.webp";
import light from "../../assets/images/backgrounds/light.webp";
import nen from "../../assets/images/backgrounds/nen.svg";
import cloud1 from "../../assets/images/backgrounds/cloud-11.webp";
import cloud2 from "../../assets/images/backgrounds/cloud-21.webp";
import cloud3 from "../../assets/images/backgrounds/cloud-31.webp";
import TopImage from "../../components/TopImage";
import useCheckScreen from "../../utils/hooks/useCheckScreen";
import handHeart from "../../assets/images/icons/hand-heart.svg";
import handHeart2 from "../../assets/images/icons/hand-heart-2.svg";
import box from "../../assets/images/icons/box.svg";
import thap2 from "../../assets/images/backgrounds/thap-2.svg";
import trungthu from "../../assets/images/backgrounds/trungthu.svg";
import lachualanh from "../../assets/images/backgrounds/lachualanh.svg";
import cacbannho from "../../assets/images/backgrounds/cacbannho.webp";
import image from "../../assets/images/backgrounds/image.png";
import image1 from "../../assets/images/1.webp";
import image2 from "../../assets/images/2.webp";
import ListItem from "../../components/animations/list-item/ListItem";
import mamnon1 from "../../assets/images/mamnon-1.webp";
import mamnon2 from "../../assets/images/mamnon-2.webp";
import mamnon3 from "../../assets/images/mamnon-3.webp";
import mamnon4 from "../../assets/images/mamnon-4.webp";
import mamnon5 from "../../assets/images/mamnon-5.webp";
import mamnon6 from "../../assets/images/mamnon-6.webp";
import post1 from "../../assets/images/post-1.webp";
import post2 from "../../assets/images/post-2.webp";
import post3 from "../../assets/images/post-3.webp";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import CollapsedText from "../../components/CollapsedText";

const slats = [
  {
    slat: "100",
    content: "Dự án đã được gây quỹ thành công",
  },
  {
    slat: "5 tỷ đồng",
    content: "Đã được quyên góp",
  },
  {
    slat: "10+ triệu",
    content: "Lượt quyên góp",
  },
];

const otherWays = [
  {
    text: "Doanh nghiệp từ thiện",
    icon: handHeart,
  },
  {
    text: "Đăng ký tình nguyện",
    icon: handHeart2,
  },
  {
    text: "Cá nhân từ thiện",
    icon: box,
  },
];

const mainEvents = [
  {
    text: "Tâm bồ đề",
    icon: thap2,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique, a aliquam dolores alias eum earum ut debitis voluptatibus beatae consequatur.",
  },
  {
    text: "Trung thu cho em",
    icon: trungthu,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique, a aliquam dolores alias eum earum ut debitis voluptatibus beatae consequatur.",
  },
  {
    text: "Mầm non từ bi",
    icon: lachualanh,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique, a aliquam dolores alias eum earum ut debitis voluptatibus beatae consequatur.",
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
  {
    name: "4Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
    donations: 50,
    target: 2000000000,
    progress: 1000000000,
    image: image,
  },
  {
    name: "5Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
    donations: 50,
    target: 2000000000,
    progress: 1000000000,
    image: image,
  },
  {
    name: "6Gây quỹ hỗ trợ xây dựng chùa Ba Vàng-Uông Bí, Quảng Ninh",
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

const questions = [
  {
    title: "Tâm bồ đề là gì?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nisi ullam ipsam pariatur ipsum quam odio, illum, provident libero sint doloremque recusandae rem itaque obcaecati, corporis quidem hic voluptatibus cupiditate!",
  },
  {
    title: "Tôi Đi Từ Thiện có thu lợi nhuận từ việc gây quỹ không?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nisi ullam ipsam pariatur ipsum quam odio, illum, provident libero sint doloremque recusandae rem itaque obcaecati, corporis quidem hic voluptatibus cupiditate!",
  },
  {
    title:
      "Sau bao lâu kể từ khi quyên góp, tiền sẽ được chuyển đến tay hoàn cảnh?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nisi ullam ipsam pariatur ipsum quam odio, illum, provident libero sint doloremque recusandae rem itaque obcaecati, corporis quidem hic voluptatibus cupiditate!",
  },
  {
    title: "Làm thế nào để liên hệ và gửi hoàn cảnh tới Tôi Đi Từ Thiện?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nisi ullam ipsam pariatur ipsum quam odio, illum, provident libero sint doloremque recusandae rem itaque obcaecati, corporis quidem hic voluptatibus cupiditate!",
  },
  {
    title: "Nếu hoàn cảnh gây quỹ không thành công thì sao?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nisi ullam ipsam pariatur ipsum quam odio, illum, provident libero sint doloremque recusandae rem itaque obcaecati, corporis quidem hic voluptatibus cupiditate!",
  },
];

const HomePage = () => {
  const { isMobileScreen } = useCheckScreen();
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="w-full h-auto relative">
      {isMobileScreen ? (
        <TopImage cloud={cloud3} image={banner} />
      ) : (
        <TopImage cloud={cloud1} image={banner} />
      )}
      <div className="w-full h-fit xl:pt-10 pb-20 relative bg-white sm:bg-primary-2 overflow-hidden">
        <div className="absolute w-full top-[85%]">
          <img src={cloud2} alt="" className="w-full rotate-180" />
        </div>
        <div className="flex py-10 container">
          <div className="flex flex-col flex-1 justify-center relative">
            <h1 className="text-xl xl:text-[40px] font-lora-regular text-primary mb-2">
              Tôi đi từ thiện
            </h1>
            <h4 className="font-bold text-xs xl:text-xl text-primary mb-3 xl:mb-8">
              Nền tảng quyên góp từ thiện - Cùng nhau xây đắp phước lành
            </h4>
            <CollapsedText
              collapseText={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magni quidem! Modi, nostrum? Recusandae commodi iusto ab culpa rem enim?"
              }
              textArray={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magni quidem! Modi, nostrum? Recusandae commodi iusto ab culpa rem enim? Quia totam alias optio ducimus aperiam, odit earum? Voluptatibus, tempore.",
              ]}
              styleText={"text-sm xl:text-base mb-2 xl:mb-5 text-[#3D3D3D]"}
            />
            <div className="flex justify-between xl:justify-normal xl:gap-[52px] mb-8 px-6 xl:px-0">
              {slats.map((item, index) => {
                return (
                  <div className="flex flex-col xl:gap-3">
                    <div className="relative flex items-center mb-[-7px] xl:mb-0">
                      <img
                        src={bode}
                        alt=""
                        className="left-0 h-[65%] xl:h-auto"
                      />
                      <span className="absolute translate-y-1 translate-x-2 font-semibold text-[14.4px] xl:text-2xl text-primary">
                        {item.slat}
                      </span>
                    </div>
                    <p className="text-[8.4px] xl:text-sm max-w-20 xl:max-w-32 ">
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </div>
            <button className="py-[7px] px-9 xl:py-[10px] xl:px-11 text-white font-semibold text-sm xl:text-base rounded-[32px] bg-primary self-start">
              Quyên góp
            </button>
          </div>
          <div className="relative hidden sm:flex justify-end items-center flex-1">
            <div className="relative xl:h-[500px] xl:w-[392px] bg-[#B26040] rounded-[232.5px] shadow-inset-1">
              <img
                src={tay}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[1]"
              />
              <img
                src={nen}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2] top-1/2 -translate-y-3/4 filter brightness-125 contrast-150"
              />
              <img
                src={light}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[1] top-0 filter brightness-125 contrast-150"
              />
              <img
                src={light}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[1] top-0 filter brightness-125 contrast-150"
              />
              <img
                src={light}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[1] top-0"
              />
              <div className="absolute bottom-0 left-0 right-0 -top-7 overflow-hidden rounded-b-[232.5px]">
                <img
                  src={thap}
                  alt=""
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-3 xl:pt-14 pb-10 xl:pb-36 relative overflow-hidden">
        <div className="absolute w-full top-[80%]">
          <img src={cloud3} alt="" className="w-full" />
        </div>
        <h1 className="text-xl xl:text-[36px] text-primary font-lora-regular text-center">
          Cùng Tìm Hiểu Cách Đóng Góp Khác
        </h1>
        <div className="flex justify-center gap-8 xl:gap-40 mt-[18px] xl:mt-24">
          {otherWays.map((item, index) => {
            return (
              <div className="flex flex-col gap-4 items-center">
                <img
                  src={item.icon}
                  alt=""
                  className="w-[65px] h-[65px] xl:w-[160px] xl:h-[160px]"
                />
                <span className="text-[9px] xl:text-2xl  font-semibold">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white pt-3 pb-10 xl:pt-20 xl:pb-36 relative overflow-hidden">
        <div className="absolute w-full top-[94%] xl:top-[85%]">
          <img src={cloud1} alt="" className="w-full" />
        </div>
        <div className="container flex xl:gap-10">
          <div className="flex flex-col xl:flex-1">
            <h1 className="text-primary text-xl text-center xl:text-left xl:text-4xl font-lora-regular mb-[18px] xl:mb-4">
              Các Chương Trình Chính
            </h1>
            <CollapsedText
              collapseText={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos accusamus consectetur sunt, obcaecati distinctio culpa cum, nostrum facilis dolores atque commodi nesciunt quasi aspernatur cumque!"
              }
              textArray={[
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos accusamus consectetur sunt, obcaecati distinctio culpa cum, nostrum facilis dolores atque commodi nesciunt quasi aspernatur cumque! Velit reprehenderit ut sunt inventore!",
              ]}
              styleText={"text-sm xl:text-base text-[#3D3D3D] xl:mb-[51px]"}
            />
            <div className="flex-col xl:flex-row flex gap-[18px] xl:gap-6 pl-5 xl:pl-0 py-5 xl:py-0">
              {mainEvents.map((item, index) => {
                return (
                  <div
                    className={`flex ${
                      index === 1 ? "flex-row-reverse" : "flex-row"
                    } xl:flex-col gap-9 xl:gap-3`}
                  >
                    <div
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(0)}
                      className="xl:perspective xl:cursor-pointer group w-[84px] h-[149px] xl:w-[180px] xl:h-[320px] flex-shrink-0"
                    >
                      <div className="relative xl:preserve-3d xl:group-hover:my-rotate-y-180 w-full h-full xl:duration-1000">
                        <div className="bg-linear-2 absolute inset-0 backface-hidden rounded-[200px]">
                          <div className="w-[22px] h-[22px] xl:w-[47px] xl:h-[47px] bg-[#fde694] rounded-full opacity-70 top-[16%] right-[15%] absolute"></div>
                          <img
                            src={item.icon}
                            alt="thap"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[70%] xl:h-auto"
                          />
                        </div>
                        <div className="absolute inset-0 bg-linear-2 backface-hidden my-rotate-y-180 rounded-[200px] flex items-center px-5">
                          <p className="text-sm text-slate-700">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="font-semibold text-base xl:text-xl xl:text-center ">
                        {item.text}
                      </span>
                      <p className="xl:hidden text-sm ">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 hidden xl:flex bg-black-hole xl:bg-[center_left_-140px] 2xl:bg-[center_left_-125px] xl:bg-[length:900px_860px] 2xl:bg-[length:990px_860px] relative">
            <div className="absolute border-l-[200px] border-l-white border-b-[200px] border-b-transparent"></div>
            <div className="bg-white absolute w-full h-full bg-opacity-15"></div>
            <img
              src={cacbannho}
              alt="other1"
              className={`absolute transition-opacity w-full h-full mix-blend-screen duration-500 ${
                hoveredIndex === 0 ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src={image1}
              alt="other2"
              className={`absolute transition-opacity w-full h-full mix-blend-screen duration-500 ${
                hoveredIndex === 1 ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src={image2}
              alt="other1"
              className={`absolute transition-opacity w-full h-full mix-blend-screen duration-500 ${
                hoveredIndex === 2 ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      <ListItem
        cloud={cloud3}
        bgColor={"bg-primary-2"}
        title={"Các chương trình từ thiện"}
        type={"charity_funds"}
        items={charityFunds}
        padding={"pt-2 pb-14 xl:pt-10 xl:pb-28"}
      />
      <ListItem
        bgColor={"bg-white"}
        title={"Mầm non Từ Bi"}
        type={"preschools"}
        items={preschools}
        padding={"pb-8 xl:pt-4 xl:pb-[60px]"}
      />
      <ListItem
        bgColor={"bg-white"}
        title={"Tin tức cộng đồng"}
        type={"posts"}
        items={posts}
        padding={"pb-8 xl:pb-[60px]"}
      />

      <div className="w-full bg-white pb-8 xl:pb-[60px]">
        <div className="container flex flex-col xl:gap-[60px]">
          <div className="w-full">
            <h1 className="font-lora-regular text-xl xl:text-4xl text-center text-primary">
              Câu hỏi thường gặp
            </h1>
          </div>
          <div className="relative">
            <div className="absolute hidden xl:block top-0 bottom-0 w-[3px] bg-linear-3"></div>
            <div className="w-full flex flex-col gap-[18px] xl:gap-7 xl:pl-16 py-10">
              {questions.map((item, index) => {
                return (
                  <div className="flex flex-col border-b border-gray-300 xl:border-none pb-3 xl:pb-0">
                    <div
                      onClick={() =>
                        setSelectedQuestion(
                          selectedQuestion === index ? null : index
                        )
                      }
                      className="xl:py-4 cursor-pointer xl:hover:bg-[#F3BC17] transition-all duration-500 xl:px-6 rounded-2xl xl:bg-primary-3 flex justify-between xl:justify-normal gap-5 xl:gap-10 items-center xl:self-start relative"
                    >
                      <div className="absolute hidden xl:block left-0 w-[30px] h-[30px] rounded-full bg-[#F3BC17] top-1/2 -translate-y-1/2 -translate-x-[77.5px]"></div>
                      <span className="font-semibold text-base xl:text-xl ">
                        {item.title}
                      </span>
                      {selectedQuestion === index ? (
                        <FiChevronDown className="text-2xl xl:text-3xl flex-shrink-0" />
                      ) : (
                        <FiChevronRight className="text-2xl xl:text-3xl flex-shrink-0" />
                      )}
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        selectedQuestion === index ? "max-h-[200px]" : "max-h-0"
                      }`}
                    >
                      <p className=" text-sm xl:text-base xl:border-[#404040] xl:pt-3 mt-3 xl:border-t xl:border-opacity-50">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
