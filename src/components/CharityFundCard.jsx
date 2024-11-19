import { useNavigate } from "react-router-dom";
import { useDonationModal } from "../contexts/donationModalContext";
import TooltipButton from "./TooltipButton";

const CharityFundCard = ({ item, index }) => {
  const { isDonationModalOpen, setIsDonationModalOpen, setFundId } =
    useDonationModal();
  const navigate = useNavigate();

  return (
    <div
      key={index}
      className="col-span-3 2xl:min-h-[469px] xl:col-span-2 hover:shadow-xl transition-shadow border border-[#D9D9D9] rounded-xl xl:rounded-[20px] bg-white p-[10.5px] xl:p-6 flex flex-col gap-2 xl:gap-3 duration-300"
    >
      <div className="w-full h-[160px] xl:h-fit">
        <img
          src={item.image}
          alt=""
          className="object-center object-cover h-full xl:h-auto w-full"
        />
      </div>

      <div className="flex flex-col gap-2 xl:gap-3">
        <span onClick={() => navigate(`/chi-tiet-quy-tu-thien/${item.id}`)} className="text-[#3D3D3D] cursor-pointer hover:underline font-bold line-clamp-2 xl:line-clamp-none overflow-hidden text-base xl:text-lg leading-6">
          {item.name}
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex gap-[2px] -translate-x-[4px] xl:translate-x-0 xl:gap-1 text-xs xl:text-base">
            <span className="font-bold">
              {item.progress?.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
            <span>|</span>
            <span className="text-[#7D7D7D]">
              {item.target?.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <div className="w-full relative h-[8px] rounded-[20px] bg-[#D9D9D9]">
            <div className="absolute bg-primary inset-y-0 w-1/2 rounded-[20px]"></div>
          </div>
        </div>
        <div className="flex xl:gap-5 justify-between">
          <div className="flex gap-[6px] xl:gap-6">
            <div className="flex flex-col gap-1 xl:gap-3">
              <span className="text-[8px] xl:text-xs text-[#7D7D7D]">
                Lượt quyên góp
              </span>
              <span className="font-bold text-sm">{item.donations}</span>
            </div>
            <div className="flex flex-col gap-1 xl:gap-3">
              <span className="text-[8px] xl:text-xs text-[#7D7D7D]">
                Đạt được
              </span>
              <span className="font-bold text-sm">
                {Math.floor((item.progress / item.target) * 100)}%
              </span>
            </div>
          </div>
          <div className="bg-primary-3 py-1 px-[2px] xl:px-3 flex flex-col text-[#DD8124] justify-center items-center rounded-lg">
            <span className="text-[8px] xl:text-xs">Còn lại</span>
            <span className="font-bold text-[10px] xl:text-sm">20 ngày</span>
          </div>
        </div>
        <div className="flex gap-1 xl:gap-5 mt-2 xl:mt-4">
          <TooltipButton />
          <button
            onClick={() => {
              setIsDonationModalOpen(true);
              setFundId(item.id);
            }}
            className="flex-1 rounded-lg  xl:rounded-[32px] bg-primary text-xs xl:text-base text-white py-[7px] xl:py-2"
          >
            Quyên góp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharityFundCard;
