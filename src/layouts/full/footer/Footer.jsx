import { useTranslation } from "react-i18next";
import instagram from "../../../assets/images/logos/Insta.svg";
import facebook from "../../../assets/images/logos/Fb.svg";
import tiktok from "../../../assets/images/logos/Tiktok.svg";
import youtube from "../../../assets/images/logos/Youtube.svg";
import bgFooter from "../../../assets/images/backgrounds/footer.svg";

const infoSocial = [
  {
    icon: facebook,
    href: "#",
  },
  {
    icon: instagram,
    href: "#",
  },
  {
    icon: tiktok,
    href: "#",
  },
  {
    icon: youtube,
    href: "#",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-primary-3 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgFooter}
          alt=""
          className="absolute inset-0 left-1/2 -translate-x-1/2 h-full object-cover"
        />
      </div>
      <div className="container">
        <div className="w-full pt-4 pb-3 xl:pt-28 xl:pb-10">
          <div className="flex xl:hidden flex-col items-center gap-3 xl:gap-7 relative">
            <div className="flex flex-col items-center gap-1 xl:gap-3 px-9">
              <h1 className="font-lora-regular text-xl xl:text-[2rem] text-primary">
                Tôi đi từ thiện
              </h1>
              <p className="text-center text-[10px] xl:text-base ">
                "Tôi đi từ thiện" là dự án thiện nguyện do Công ty cổ phần dịch
                vụ và truyền thông Amai khởi xướng, chủ trì, phối hợp cùng Văn
                phòng Bộ - Bộ Lao Động - Thương binh và Xã hội; Ngân hàng Chính
                sách xã hội Việt Nam thực hiện.
              </p>
            </div>
            <div className="flex justify-center gap-2 xl:gap-4">
              {infoSocial.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.icon}
                    alt=""
                    className="xl:w-10 xl:h-10"
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-between xl:grid-cols-3 xl:grid relative">
            <div className="col-span-1 flex flex-col gap-1 xl:gap-7">
              <h1 className="font-lora-regular text-xl xl:text-[2rem] text-primary">
                Địa chỉ:
              </h1>
              <div className="flex flex-col text-[10px] xl:text-base gap-1 xl:gap-2 ">
                <span>
                  Địa chỉ: CT3-2 Khu đô thị Mễ Trì Hạ,
                  <br /> Nam Từ Liêm
                </span>
                <span>Thành phố: Hà Nội</span>
                <span>Quốc gia: Việt Nam</span>
              </div>
            </div>
            <div className="col-span-1 hidden xl:flex flex-col items-center gap-7">
              <div className="flex flex-col items-center gap-3">
                <h1 className="font-lora-regular text-[2rem] text-primary">
                  Tôi đi từ thiện
                </h1>
                <p className="text-center ">
                  "Tôi đi từ thiện" là dự án thiện nguyện do Công ty cổ phần
                  dịch vụ và truyền thông Amai khởi xướng, chủ trì, phối hợp
                  cùng Văn phòng Bộ - Bộ Lao Động - Thương binh và Xã hội; Ngân
                  hàng Chính sách xã hội Việt Nam thực hiện.
                </p>
              </div>
              <div className="flex justify-center gap-4">
                {infoSocial.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item.icon}
                      alt=""
                      className="xl:w-10 xl:h-10"
                    />
                  );
                })}
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-end gap-1 xl:gap-7">
              <h1 className="font-lora-regular text-xl xl:text-[2rem] text-primary">
                Thông tin:
              </h1>
              <div className="flex flex-col text-[10px] xl:text-base gap-1 xl:gap-2 text-end ">
                <span>Support: info@gmail.com</span>
                <span>Email: info@gmail.com</span>
                <span>SĐT: +84 3345678900</span>
              </div>
            </div>
          </div>
        </div>
        <span className="inline-block text-center italic text-[8px]  xl:text-[13px] w-full py-1 xl:py-2 border-t border-[#C89400]">
          Copyright © 2024 · Tôi Đi Từ Thiện · All Rights Reserved · Design by
          AMAI agency
        </span>
      </div>
    </footer>
  );
};

export default Footer;
