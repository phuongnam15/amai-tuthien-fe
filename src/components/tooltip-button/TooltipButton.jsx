import React from "react";
import './tooltipButton.css';

const TooltipButton = () => {
  return (
    <div className="flex-1 relative">
      <div class="tooltip-container relative inline-block overflow-visible w-full">
        <div class="group active:-translate-y-[2px] active:scale-[0.98] hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 border border-[#ffe7ba] cursor-pointer relative z-10 overflow-hidden bg-white flex justify-center items-center py-[7px]  xl:py-2 xl:px-6 rounded-lg xl:rounded-[2rem]">
          <span class="group-hover:tracking-[1px] text-xs xl:text-base font-semibold text-[#dd8124] transition-all duration-300">
            Chia sẻ
          </span>
        </div>
        <div class="tooltip-content absolute top-[102%] left-1/2 -translate-x-1/2 scale-[0.8] bg-[#ffe7ba] rounded-2xl p-2 xl:py-[10px] xl:px-3 opacity-0 invisible z-[100] backdrop-blur-[10px] pointer-events-none">
          <div class="flex justify-between gap-[10px]">
            <a
              href="#"
              class="social-icon flex justify-center items-center w-[35px] xl:w-[43px] h-[35px] xl:h-[43px] rounded-full bg-white relative overflow-hidden hover:bg-[linear-gradient(135deg,#1877f2,#165ed0)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
            <a
              href="#"
              class="social-icon flex justify-center items-center w-[35px] xl:w-[43px] h-[35px] xl:h-[43px] rounded-full bg-white relative overflow-hidden hover:bg-[linear-gradient(45deg,#0498fa_14.61%,#5c5efe_38.67%,#f44e90_66.28%,#fa8679_85.39%)]"
            >
              <svg viewBox="0,0,256,256" width="50px" height="50px">
                <g>
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,2c-12.69922,0 -23,9.60156 -23,21.5c0,6.30078 2.89844,12.19922 8,16.30078v8.80078l8.60156,-4.5c2.09766,0.59766 4.19922,0.79688 6.39844,0.79688c12.69922,0 23,-9.59766 23,-21.5c0,-11.79687 -10.30078,-21.39844 -23,-21.39844zM27.30078,30.60156l-5.80078,-6.20312l-10.80078,6.10156l12,-12.69922l5.90234,5.89844l10.5,-5.89844z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="#"
              class="social-icon flex justify-center items-center w-[35px] xl:w-[43px] h-[35px] xl:h-[43px] rounded-full bg-white relative overflow-hidden hover:bg-[linear-gradient(45deg,#faad4f_14.61%,#dd2a7b_39.38%,#9537b0_58.49%,#515bd4_85.39%)]"
            >
              <svg viewBox="0,0,256,256" width="64px" height="64px">
                <g>
                  <g transform="scale(4,4)">
                    <path d="M21.58008,7c-8.039,0 -14.58008,6.54494 -14.58008,14.58594v20.83203c0,8.04 6.54494,14.58203 14.58594,14.58203h20.83203c8.04,0 14.58203,-6.54494 14.58203,-14.58594v-20.83398c0,-8.039 -6.54494,-14.58008 -14.58594,-14.58008zM47,15c1.104,0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-1.104,0 -2,-0.896 -2,-2c0,-1.104 0.896,-2 2,-2zM32,19c7.17,0 13,5.83 13,13c0,7.17 -5.831,13 -13,13c-7.17,0 -13,-5.831 -13,-13c0,-7.169 5.83,-13 13,-13zM32,23c-4.971,0 -9,4.029 -9,9c0,4.971 4.029,9 9,9c4.971,0 9,-4.029 9,-9c0,-4.971 -4.029,-9 -9,-9z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TooltipButton;
