import { useEffect, useState } from "react";
import circle from "../../assets/images/icons/circle.svg";
import insideCircle from "../../assets/images/icons/inside-circle.svg";
import smoothScroll from "../../utils/smoothScroll";

const ScrollToTop = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed flex flex-col h-[85%] w-auto transition-transform duration-1000 ease-linear ${
        hasScrolled ? "translate-y-0" : "-translate-y-custom-1"
      } z-40 right-8`}
    >
      <div className="bg-wire bg-repeat-y bg-center flex-1"></div>

      <div
        onClick={() => smoothScroll("root", 800)}
        className={`relative w-[68px] h-[68px] cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-110 ${
          hasScrolled ? "animate-pulse" : ""
        }`}
      >
        <img
          src={insideCircle}
          alt=""
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
        <img src={circle} alt="" className="inset-0" />
      </div>
    </div>
  );
};

export default ScrollToTop;
