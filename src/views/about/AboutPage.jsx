import TopImage from "../../components/TopImage";
import cloud3 from "../../assets/images/backgrounds/cloud-31.webp";
import banner from "../../assets/images/backgrounds/banner.webp";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import aboutVideo from "../../assets/videos/about.mp4";
import aboutBg from "../../assets/images/backgrounds/bg-about.svg";
import aboutBg2 from "../../assets/images/backgrounds/bg-about-2.svg";
import { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import trip1 from "../../assets/images/backgrounds/trip-1.webp";
import trip2 from "../../assets/images/backgrounds/trip-2.webp";
import trip3 from "../../assets/images/backgrounds/trip-3.webp";
import trip4 from "../../assets/images/backgrounds/trip-4.webp";
import ListItem from "../../components/animations/list-item/ListItem";
import image from "../../assets/images/backgrounds/image.png";
import SeeMoreButton from "../../components/animations/button/SeeMoreButton";
import CollapsedText from "../../components/CollapsedText";

const mission = [
  {
    title: "Sứ mệnh và tầm nhìn",
    content:
      "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis inventore, vero neque aspernatur reprehenderit velit cupiditate dolorum eius recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, culpa. Voluptates iure ut eius aperiam porro itaque dolor laborum quo hic, quasi tempora, maiores aspernatur sed velit vero suscipit. Maxime. 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis inventore, vero neque aspernatur reprehenderit velit cupiditate dolorum eius recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, culpa. Voluptates iure ut eius aperiam porro itaque dolor laborum quo hic, quasi tempora, maiores aspernatur sed velit vero suscipit. Maxime. 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis inventore, vero neque aspernatur reprehenderit velit cupiditate dolorum eius recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, culpa. Voluptates iure ut eius aperiam porro itaque dolor laborum quo hic, quasi tempora, maiores aspernatur sed velit vero suscipit. Maxime. 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis inventore, vero neque aspernatur reprehenderit velit cupiditate dolorum eius recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, culpa. Voluptates iure ut eius aperiam porro itaque dolor laborum quo hic, quasi tempora, maiores aspernatur sed velit vero suscipit. Maxime.",
  },
  {
    title: "Nguyên tắc hoạt động",
    content:
      "2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis inventore, vero neque aspernatur reprehenderit velit cupiditate dolorum eius recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, culpa. Voluptates iure ut eius aperiam porro itaque dolor laborum quo hic, quasi tempora, maiores aspernatur sed velit vero suscipit. Maxime. 2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis inventore, vero neque aspernatur reprehenderit velit cupiditate dolorum eius recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, culpa. Voluptates iure ut eius aperiam porro itaque dolor laborum quo hic, quasi tempora, maiores aspernatur sed velit vero suscipit. Maxime.",
  },
  {
    title: "Cách thức hoạt động",
    content:
      "3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis inventore, vero neque aspernatur reprehenderit velit cupiditate dolorum eius recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, culpa. Voluptates iure ut eius aperiam porro itaque dolor laborum quo hic, quasi tempora, maiores aspernatur sed velit vero suscipit. Maxime.",
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

const AboutPage = () => {
  const [dropIndex, setDropIndex] = useState(null);
  const [selectedContent, setSelectedContent] = useState("");

  return (
    <div className="w-full h-auto relative">
      <TopImage cloud={cloud3} image={banner} />
      <div className="w-full bg-white relative">
        <img
          src={aboutBg}
          alt=""
          className="absolute hidden xl:block xl:top-20 left-0"
        />
        <div className="w-full container pt-7 xl:pt-20 pb-4 xl:pb-16 flex-col flex gap-6 xl:gap-[40px] relative">
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-20">
            <div className="flex flex-1 justify-center">
              <h1 className="text-primary text-xl xl:text-4xl text-center font-lora-regular">
                Câu chuyện
                <br /> Của "Tôi đi từ thiện"
              </h1>
            </div>
            <div className="flex flex-col flex-[1.5] gap-6 xl:gap-8">
              <div className="flex flex-col gap-[15.5px]">
                <CollapsedText
                  collapseText={
                    "Lấy hình ảnh chiếc lá bồ đề – biểu tượng thiêng liêng của Phật giáo làm hình tượng xuyên suốt, “Tôi đi từ thiện” là cầu nối để các nhà hảo tâm (lá lành) hỗ trợ các hoàn cảnh khó khăn (lá chưa lành) vươn lên trong cuộc sống; góp phần lan tỏa tình yêu thương nhân ái trong mỗi cá nhân, mỗi gia đình Việt và xây dựng một xã hội tốt đẹp giàu tính nhân văn."
                  }
                  textArray={[
                    `Lấy hình ảnh chiếc lá bồ đề – biểu tượng thiêng liêng của Phật giáo làm hình tượng xuyên suốt, “Tôi đi từ thiện” là cầu nối để các nhà hảo tâm (lá lành) hỗ trợ các hoàn cảnh khó khăn (lá chưa lành) vươn lên trong cuộc sống; góp phần lan tỏa tình yêu thương nhân ái trong mỗi cá nhân, mỗi gia đình Việt và xây dựng một xã hội tốt đẹp giàu tính nhân văn.`,
                    `“Tôi đi từ thiện” là dự án thiện nguyện do Công ty cổ phần dịch vụ và truyền thông Amai khởi xướng, chủ trì, phối hợp cùng Văn phòng Bộ – Bộ Lao động – Thương binh và Xã hội; Ngân hàng Chính sách xã hội Việt Nam thực hiện.`,
                  ]}
                  styleText={
                    "text-sm xl:text-base  leading-[21px] xl:leading-6"
                  }
                />
              </div>
              <div className="flex gap-4 xl:gap-12">
                {mission.map((item, index) => {
                  return (
                    <div className="flex flex-col flex-1 self-start cursor-pointer">
                      <div
                        onClick={() => {
                          setDropIndex(dropIndex === index ? null : index);
                          setSelectedContent(item.content);
                        }}
                        className="flex flex-1 justify-between items-center border-t-[0.5px] border-[#C89400] pt-[18px] xl:pt-4"
                      >
                        <span className="text-xs xl:text-xl  font-semibold">
                          {item.title}
                        </span>
                        <img
                          src={arrowRight}
                          alt=""
                          className="w-[30px] h-[30px] xl:w-auto xl:h-auto"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full">
            <p
              className={`${
                dropIndex !== null ? "max-h-[200px]" : "max-h-0"
              } text-sm xl:text-lg  overflow-hidden transition-all duration-300`}
            >
              {selectedContent}
            </p>
          </div>
          <video
            src={aboutVideo}
            alt="about"
            autoPlay
            muted={true}
            className=" rounded-[9.6px] xl:rounded-[32px]"
            controls={false}
            playsInline
            loop
          />
        </div>
      </div>
      <div className="relative w-full bg-white pb-11 xl:pb-[90px]">
        <img
          src={aboutBg2}
          alt=""
          className="absolute hidden xl:block bottom-0 right-0"
        />
        <div className="container xl:pt-16 flex flex-col gap-8 xl:gap-[138px]">
          <div className="flex flex-col w-full xl:gap-[72px]">
            <div className="xl:flex flex-1 justify-center hidden">
              <h1 className="text-primary text-xl xl:text-4xl text-center font-lora-regular">
                Hành Trình Từ Thiện
              </h1>
            </div>
            <div className="relative pt-6 xl:pt-0">
              <div className="absolute w-[3px] h-full bg-linear-4 left-2 xl:left-1/2 xl:-translate-x-1/2"></div>
              <div className="flex flex-1 justify-center xl:hidden">
                <h1 className="text-primary text-xl xl:text-4xl text-center font-lora-regular">
                  Hành Trình Từ Thiện
                </h1>
              </div>
              <div className="w-full h-auto py-10 xl:pb-0 xl:pt-[135px] gap-3 xl:gap-0 flex flex-col xl:flex-row">
                <div className="flex flex-col gap-28 flex-1">
                  <div className="xl:flex hidden gap-2 items-center justify-center rotate-45">
                    <div className="w-[273px] h-[273px] overflow-hidden">
                      <img
                        src={trip1}
                        alt=""
                        className="rotate-[-45deg] scale-[1.85] translate-x-3 translate-y-3"
                      />
                    </div>
                    <div className="w-[203px] h-[203px] bg-blue-600 overflow-hidden">
                      <img
                        src={trip2}
                        alt=""
                        className="rotate-[-45deg] scale-[2.5] translate-x-[6px] translate-y-[40px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pl-10 xl:pl-20 xl:pr-12">
                    <div className="flex flex-col gap-2 xl:gap-1">
                      <div className="relative">
                        <div className="absolute w-[30px] h-[30px] bg-primary-3 rounded-full -left-[45.5px] xl:left-auto xl:-right-[63px] top-1/2 -translate-y-1/2"></div>
                        <h1 className="font-semibold xl:text-2xl text-[#894500]">
                          Năm 2022
                        </h1>
                      </div>
                      <p className="text-sm xl:text-base xl:leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil quam repudiandae molestias, labore dolore earum
                        placeat. Tempore provident molestiae facilis architecto,
                        libero debitis enim. Delectus, veritatis alias. Nulla,
                        qui odit? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nihil quam repudiandae molestias,
                        labore dolore earum placeat. Tempore provident molestiae
                        facilis architecto, libero debitis enim. Delectus,
                        veritatis alias. Nulla, qui odit?
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 xl:gap-1">
                      <div className="relative">
                        <div className="absolute w-[30px] h-[30px] bg-primary-3 rounded-full -left-[45.5px] xl:left-auto xl:-right-[63px] top-1/2 -translate-y-1/2"></div>
                        <h1 className="font-semibold xl:text-2xl text-[#894500]">
                          Năm 2022
                        </h1>
                      </div>
                      <p className="text-sm xl:text-base xl:leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil quam repudiandae molestias, labore dolore earum
                        placeat. Tempore provident molestiae facilis architecto,
                        libero debitis enim. Delectus, veritatis alias. Nulla,
                        qui odit? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nihil quam repudiandae molestias,
                        labore dolore earum placeat. Tempore provident molestiae
                        facilis architecto, libero debitis enim. Delectus,
                        veritatis alias. Nulla, qui odit?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-16 flex-1">
                  <div className="flex flex-col gap-3 pl-10 xl:pr-20 xl:pl-12">
                    <div className="flex flex-col gap-2 xl:gap-1">
                      <div className="relative">
                        <div className="absolute w-[30px] h-[30px] bg-primary-3 rounded-full -left-[45.5px] xl:-left-[63px] top-1/2 -translate-y-1/2"></div>
                        <h1 className="font-semibold xl:text-2xl text-[#894500]">
                          Năm 2022
                        </h1>
                      </div>
                      <p className="text-sm xl:text-base xl:leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil quam repudiandae molestias, labore dolore earum
                        placeat. Tempore provident molestiae facilis architecto,
                        libero debitis enim. Delectus, veritatis alias. Nulla,
                        qui odit? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nihil quam repudiandae molestias,
                        labore dolore earum placeat. Tempore provident molestiae
                        facilis architecto, libero debitis enim. Delectus,
                        veritatis alias. Nulla, qui odit?
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 xl:gap-1">
                      <div className="relative">
                        <div className="absolute w-[30px] h-[30px] bg-primary-3 rounded-full -left-[45.5px] xl:-left-[63px] top-1/2 -translate-y-1/2"></div>
                        <h1 className="font-semibold xl:text-2xl text-[#894500]">
                          Năm 2022
                        </h1>
                      </div>
                      <p className="text-sm xl:text-base xl:leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil quam repudiandae molestias, labore dolore earum
                        placeat. Tempore provident molestiae facilis architecto,
                        libero debitis enim. Delectus, veritatis alias. Nulla,
                        qui odit? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nihil quam repudiandae molestias,
                        labore dolore earum placeat. Tempore provident molestiae
                        facilis architecto, libero debitis enim. Delectus,
                        veritatis alias. Nulla, qui odit?
                      </p>
                    </div>
                  </div>
                  <div className="xl:flex hidden gap-2 items-center justify-center -space-x-14">
                    <div className="w-[273px] h-[273px] bg-[#1b2b3a] rotate-45 overflow-hidden">
                      <img
                        src={trip3}
                        alt=""
                        className="rotate-[-45deg] scale-150 -translate-x-[60px] translate-y-[60px]"
                      />
                    </div>
                    <div className="w-[203px] h-[203px] rotate-45 border-[5px] border-white overflow-hidden">
                      <img
                        src={trip4}
                        alt=""
                        className="rotate-[-45deg] scale-[2.65] -translate-x-[60px] translate-y-[130px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SeeMoreButton text={"Xem thêm"} Icon={FiArrowDown} />
          </div>
          <div className="flex flex-col gap-4 xl:gap-6 xl:px-64">
            <h1 className="text-primary text-xl xl:text-4xl text-center font-lora-regular">
              Lời Cảm Ơn
            </h1>
            <p className="text-sm xl:text-base leading-[21px] xl:leading-6 flex-shrink-0">
              “Lời cảm ơn sâu sắc đến tất cả các nhà hảo tâm đã chung tay giúp
              đỡ, ủng hộ các ngôi chùa bị hỏng và cũ. Sự chia sẻ và tình yêu
              thương của các nhà hảo tâm chính là động lực để chúng tôi tiếp tục
              thực hiện sứ mệnh này. Chúng tôi tin rằng, với sự đồng hành của
              các nhà hảo tâm, những ngôi chùa sẽ được bảo tồn và phát triển,
              trở thành biểu tượng của tinh thần đoàn kết và lòng từ bi.”
            </p>
          </div>
        </div>
      </div>

      <div className="xl:hidden w-full relative">
        <ListItem
          bgColor={"bg-white"}
          title={"Hoàn cảnh quyên góp"}
          type={"charity_funds"}
          items={charityFunds}
          padding={"pb-8"}
        />
      </div>
    </div>
  );
};

export default AboutPage;
