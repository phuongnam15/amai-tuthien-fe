import { useNavigate } from "react-router-dom";

const Post = ({ item, index }) => {
  const navigate = useNavigate();
  return (
    <div key={index} className="flex flex-col gap-2 xl:gap-4 col-span-6 xl:col-span-2">
      <div className="w-full h-[200px] rounded-xl overflow-hidden">
        <img src={item.image} alt="" className="object-cover cursor-pointer w-full h-full hover:scale-105 transition-all duration-300" />
      </div>
      <span className="font-normal text-xs xl:text-sm">{item.created_at}</span>
      <p onClick={() => navigate(`/chi-tiet-bai-viet/${item.id}`) } className="font-semibold text-sm xl:text-xl cursor-pointer hover:underline">{item.description}</p>
    </div>
  );
};

export default Post;
