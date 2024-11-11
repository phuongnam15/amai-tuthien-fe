const SeeMoreButton = ({ text, Icon }) => {
  return (
    <div className="flex justify-center items-center">
      <button className="border border-[#FFE7BA] rounded-[36px] p-4 overflow-hidden text-[#DD8124] group hover:text-white transition-colors duration-300 flex items-center gap-2 relative">
        <div className="absolute inset-0 rounded-[30px] bg-[#FFE7BA] -translate-x-[calc(101%)] group-hover:translate-x-0 z-[0] transition-transform duration-300"></div>
        <span className="font-semibold text-base relative">{text}</span>{" "}
        <Icon className="text-2xl relative" />
      </button>
    </div>
  );
};

export default SeeMoreButton;
