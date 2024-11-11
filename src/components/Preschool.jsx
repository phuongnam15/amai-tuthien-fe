import { useNavigate } from "react-router-dom";

const Preschool = ({ item, index }) => {
  const navigate = useNavigate();
  return (
    <div
      key={index}
      className="flex flex-col gap-4 col-span-3 xl:col-span-2 items-center"
    >
      <div className="w-[150px] h-[150px] xl:w-[300px] xl:h-[300px] rounded-full overflow-hidden">
        <img src={item.image} alt="" className="w-full h-full object-cover" />
      </div>
      <span className="font-bold xl:font-semibold text-base xl:text-2xl">
        {item.name}
      </span>
      <span className="text-sm xl:text-base  font-semibold">
        {item.description}
      </span>
      <button onClick={() => navigate(`/chi-tiet-quy-tu-thien/${item.id}`)} className="py-[7px] xl:py-[10px] px-[49px] xl:px-[45px] text-sm xl:text-base border border-primary-3 bg-primary-3 rounded-[32px]">
        Chi tiết
      </button>
    </div>
  );
};

export default Preschool;
