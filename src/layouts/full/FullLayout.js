import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useAppreciation } from "../../contexts/appreciationContext";
import Appreciation from "../../components/Appreciation";
import image from "../../assets/images/backgrounds/image.png";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import useCheckMobileScreen from "../../utils/hooks/useCheckMobileScreen";

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

const FullLayout = () => {
  const isMobileScreen = useCheckMobileScreen();
  const { isShowAppreciationMobile } = useAppreciation();
  const pathname = useLocation().pathname.substring(1);
  const array = [
    "chua",
    "phong-cau-sieu",
    "phong-ho-menh-cau-an",
    "phong-le-gio-ong-ba",
    "audio",
    "thap-huong"
  ];
  const shouldShowFooter = !array.some((item) => pathname.includes(item));

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center">
      <Header />
      <div className="flex-1 w-full flex flex-col">
        { !isMobileScreen && <ScrollToTop /> }
        {isShowAppreciationMobile ? (
          <Appreciation charityFunds={charityFunds} />
        ) : (
          <Outlet />
        )}
      </div>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default FullLayout;
