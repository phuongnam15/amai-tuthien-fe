import bannerAudio from "../../assets/images/backgrounds/banner-audio.webp";
import { useNavigate } from "react-router-dom";
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

const AudioPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-6 xl:gap-8 pb-7">
        <div className="container hidden xl:block">
          <img src={bannerAudio} alt="" className="w-full" />
        </div>
        <div className="w-full xl:hidden block">
          <img src={bannerAudio} alt="" className="w-full" />
        </div>
        <div className="container flex flex-col gap-4 xl:gap-8">
          <h1 className="text-stroke font-lora-bold text-[#DE595D] text-xl xl:text-4xl">
            Tryện Phật giáo
          </h1>
          <div className="flex flex-col gap-6">
            <h1 className="self-start text-base xl:text-2xl font-semibold py-2 px-4 rounded-lg bg-[#FFE7C7]">
              Danh mục truyện
            </h1>
            <div className="grid grid-cols-3 gap-4">
              {audios.map((item, index) => {
                return (
                  <div className="flex col-span-3 xl:col-span-1 gap-3 justify-stretch">
                    <img src={item.image} alt="" className="w-20 h-20" />
                    <div className="flex-col flex justify-between">
                      <h1
                        className="text-base font-semibold hover:underline cursor-pointer"
                        onClick={() => navigate(`/audio/${item.id}`)}
                      >
                        {item.name}
                      </h1>
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
            <div className="xl:hidden">
              <SeeMoreButton text={"Xem thêm"} Icon={FiArrowDown} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPage;
