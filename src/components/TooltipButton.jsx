import React from "react";
import styled from "styled-components";

const TooltipButton = () => {
  return (
    <StyledWrapper className="flex-1">
      <div class="tooltip-container">
        <div class="button-content">
          <span class="text">Chia sẻ</span>
        </div>
        <div class="tooltip-content">
          <div class="social-icons">
            <a href="#" class="social-icon facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
            <a href="#" class="social-icon messenger">
              <svg
                viewBox="0,0,256,256"
                width="50px"
                height="50px"
              >
                <g>
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,2c-12.69922,0 -23,9.60156 -23,21.5c0,6.30078 2.89844,12.19922 8,16.30078v8.80078l8.60156,-4.5c2.09766,0.59766 4.19922,0.79688 6.39844,0.79688c12.69922,0 23,-9.59766 23,-21.5c0,-11.79687 -10.30078,-21.39844 -23,-21.39844zM27.30078,30.60156l-5.80078,-6.20312l-10.80078,6.10156l12,-12.69922l5.90234,5.89844l10.5,-5.89844z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="#" class="social-icon instagram">
              <svg
                viewBox="0,0,256,256"
                width="64px"
                height="64px"
              >
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
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .tooltip-container {
    position: relative;
    display: inline-block;
    overflow: visible;
    width: 100%;
  }
  .button-content {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 14px 28px;
    border-radius: 32px;
    border: 1px solid #ffe7ba;
    cursor: pointer;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 10;
    overflow: hidden;
  }

  .button-content:hover {
    transform: translateY(-4px) scale(1.03);
  }

  .button-content:active {
    transform: translateY(-2px) scale(0.98);
  }

  .text {
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
    color: #dd8124;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: letter-spacing 0.3s ease;
  }

  .button-content:hover .text {
    letter-spacing: 1px;
  }

  .share-icon {
    fill: white;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      fill 0.3s ease;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  }

  .button-content:hover .share-icon {
    transform: rotate(180deg) scale(1.1);
    fill: #ffffff;
  }

  /* Tooltip Styles */
  .tooltip-content {
    position: absolute;
    top: 102%;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    background: #ffe7ba;
    border-radius: 15px;
    padding: 10px 12px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      visibility 0.5s ease;
    z-index: 100;
    pointer-events: none;
    backdrop-filter: blur(10px);
  }

  .tooltip-container:hover .tooltip-content {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1);
    pointer-events: auto;
  }

  .social-icons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background: white;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      background 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .social-icon::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .social-icon:hover::before {
    opacity: 1;
  }

  .social-icon svg {
    width: 24px;
    height: 24px;
    fill: #333;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      fill 0.3s ease;
    z-index: 1;
  }

  .social-icon:hover {
    transform: translateY(-5px) scale(1.1);
  }
  .social-icon:active {
    transform: translateY(-2px) scale(1.05);
  }

  .social-icon:hover svg {
    transform: scale(1.2);
    fill: white;
  }
  .social-icon.facebook:hover {
    background: linear-gradient(135deg, #1877f2, #165ed0);
  }
  .social-icon.messenger:hover {
    background: linear-gradient(
      45deg,
      #0498fa 14.61%,
      #5c5efe 38.67%,
      #f44e90 66.28%,
      #fa8679 85.39%
    );
  }
  .social-icon.instagram:hover {
    background: linear-gradient(
      45deg,
      #faad4f 14.61%,
      #dd2a7b 39.38%,
      #9537b0 58.49%,
      #515bd4 85.39%
    );
  }
  .tooltip-content::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent #ffe7ba transparent;
  }
`;

export default TooltipButton;
