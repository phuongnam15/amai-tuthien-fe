const TopImage = ({ cloud, image }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute w-full top-[85%]">
        <img src={cloud} alt="" className="w-full" />
      </div>
      <img src={image} alt="" className="w-full h-auto" />
    </div>
  );
};

export default TopImage;
