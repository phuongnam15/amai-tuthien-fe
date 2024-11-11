const Feeling = ({ item, index }) => {
  return (
    <div key={index} className="w-full flex flex-col xl:flex-row gap-4 xl:gap-24">
      <div className="flex rounded-[7.2px] xl:rounded-3xl overflow-hidden flex-shrink-0 h-[420px] xl:h-[550px] xl:flex-1">
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="xl:pt-8 xl:flex-[1.3]">
        <h1 className="text-primary text-sm xl:text-2xl font-semibold mb-2 xl:mb-[47px]">
          Nguyễn Thị A - Tình nguyện viên tham gia chương trình Giúp đỡ chùa Ba
          Vàng, 2024
        </h1>
        <p className=" text-sm xl:text-2xl leading-[21px] xl:leading-9">{item.content}</p>
      </div>
    </div>
  );
};

export default Feeling;
