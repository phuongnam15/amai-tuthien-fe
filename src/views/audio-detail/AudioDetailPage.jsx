import { useState } from "react";
import { useParams } from "react-router-dom";
import heart from "../../assets/images/icons/heart.svg";
import share from "../../assets/images/icons/share.svg";
import time from "../../assets/images/time.png";
import next from "../../assets/images/icons/next.svg";
import prev from "../../assets/images/icons/prev.svg";
import pause2 from "../../assets/images/icons/pause-2.svg";
import play2 from "../../assets/images/icons/play-2.svg";
import muted2 from "../../assets/images/icons/muted-2.svg";
import unmuted2 from "../../assets/images/icons/unmuted-2.svg";
import bannerAudio from "../../assets/images/backgrounds/banner-audio.webp";
import SeeMoreButton from "../../components/animations/button/SeeMoreButton";
import { FiArrowDown } from "react-icons/fi";

const audios = [
  {
    image:
      "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Lời phật dạy",
    datetime: "24 thg10,2024",
    amount: 32,
  },
  {
    image:
      "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Lời phật dạy",
    datetime: "24 thg10,2024",
    amount: 32,
  },
  {
    image:
      "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Lời phật dạy",
    datetime: "24 thg10,2024",
    amount: 32,
  },
  {
    image:
      "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Lời phật dạy",
    datetime: "24 thg10,2024",
    amount: 32,
  },
  {
    image:
      "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Lời phật dạy",
    datetime: "24 thg10,2024",
    amount: 32,
  },
  {
    image:
      "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Lời phật dạy",
    datetime: "24 thg10,2024",
    amount: 32,
  },
  {
    image:
      "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Lời phật dạy",
    datetime: "24 thg10,2024",
    amount: 32,
  },
];

const AudioDetailPage = () => {
  const { id } = useParams();
  const [isPlay, setIsPlay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [audio, setAudio] = useState({
    image:
      "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Lời phật dạy",
    datetime: "24 thg10,2024",
    amount: 32,
  });

  return (
    <>
      <div className="flex flex-col gap-6 xl:hidden">
        <div className="w-full xl:w-auto xl:container mx-auto">
          <img src={bannerAudio} alt="" className="w-full" />
        </div>
        <div className="container flex flex-col gap-4">
          <h1 className="text-stroke font-lora-bold text-[#DE595D] text-xl xl:text-4xl">
            Tryện Phật giáo
          </h1>
          <div className="flex flex-col">
            <h1 className="self-start text-base xl:text-2xl font-semibold py-2 px-4 rounded-lg bg-[#FFE7C7]">
              Danh mục truyện
            </h1>
          </div>
        </div>
      </div>

      <div className="container pt-6 xl:pt-12 pb-20 flex flex-col xl:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-6">
          <div className="w-full py-[60px] px-6 bg-[#4A0404]">
            <div className="flex flex-col xl:flex-row gap-[17.6px]">
              <img
                src={audio.image}
                alt=""
                className="w-full xl:w-[180px] xl:h-[180px]"
              />
              <div className="relative flex flex-col items-center justify-end flex-1 gap-11">
                <div className="absolute bottom-0 left-0">
                  {isMuted ? (
                    <img
                      onClick={() => setIsMuted(false)}
                      src={unmuted2}
                      alt=""
                      className="h-7"
                    />
                  ) : (
                    <img
                      onClick={() => setIsMuted(true)}
                      src={muted2}
                      alt=""
                      className="h-7"
                    />
                  )}
                </div>
                <div className="flex flex-col items-center justify-end gap-3">
                  <h1 className="text-white text-xl font-bold">
                    Lời phật dạy 01
                  </h1>
                  <span className="text-xs text-white">Tác giả</span>
                  <div className="flex gap-1 items-center">
                    <span className="text-white text-xs">0:17</span>
                    <div className="flex-1">
                      <img src={time} alt="" className="w-full" />
                    </div>
                    <span className="text-white text-xs">02:42</span>
                  </div>
                </div>
                <div className="flex gap-12">
                  <img src={prev} alt="" />
                  {isPlay ? (
                    <img
                      onClick={() => setIsPlay(false)}
                      src={pause2}
                      alt=""
                      className="h-7"
                    />
                  ) : (
                    <img
                      onClick={() => setIsPlay(true)}
                      src={play2}
                      alt=""
                      className="h-7 "
                    />
                  )}
                  <img src={next} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl xl:text-2xl">Lời Phật Dạy 01 | Tác giả</h1>
            <div className="flex justify-between items-center">
              <span className="text-xs xl:text-base">{audio.datetime}</span>
              <div className="flex gap-4">
                <img
                  src={heart}
                  alt=""
                  className="w-6 h-6 xl:w-auto xl:h-auto"
                />
                <img
                  src={share}
                  alt=""
                  className="w-6 h-6 xl:w-auto xl:h-auto"
                />
              </div>
            </div>
            <div className="border-t border-primary-5"></div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl xl:text-[32px]">Truyện Lời Phật Dạy</h1>
            <p className="text-sm xl:text-base">
              Lorem ipsum dolor sit amet consectetur. Ac facilisi enim
              adipiscing quisque sed feugiat id netus. Turpis turpis a cursus
              suspendisse sollicitudin nisl mauris pellentesque nisl. A
              fermentum tempus venenatis nibh leo aliquam massa nunc non.
              Laoreet semper duis risus massa vulputate magna elementum quam.
              Morbi faucibus curabitur elementum sit tristique elementum lorem
              sed. Tellus.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-2xl font-semibold">Danh sách</h1>
          <div className="flex flex-col gap-4">
            {audios.map((item, index) => {
              return (
                <div className="flex gap-3 justify-stretch">
                  <img src={item.image} alt="" className="w-20 h-20" />
                  <div className="flex-col flex justify-between">
                    <h1 className="text-base font-semibold">{item.name}</h1>
                    <span className="text-primary-5 text-xs">
                      {item.datetime}
                    </span>
                    <span className="text-primary-5 text-xs">
                      Số lượng: {item.amount} audio
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-8 xl:hidden">
            <SeeMoreButton text={"Xem thêm"} Icon={FiArrowDown} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioDetailPage;
