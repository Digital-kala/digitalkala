import React from "react";

import { IconType } from "react-icons";
import { TbMail } from "react-icons/tb";
import { GrInstagram, GrLinkedin } from "react-icons/gr";

import { handleURLClick, sendEmail } from "./utils";

import heroImage from "../assets/image/logo-white.svg";

function createSocialMediaLink(icon: IconType, size: number, url: string) {
  return (
    <div
      className="hover:text-blue-300 cursor-pointer"
      onClick={() => handleURLClick(url)}
    >
      {React.createElement(icon, { size: size })}
    </div>
  );
}

const iconSize = 20;

export function Footer() {
  return (
    <div className="relative pt-[10vh] pb-[6vh] bg-[#0C3457] text-white">
      <div className="grid grid-cols-7 px-[25vh]">
        <div className="w-[8rem] col-span-1">
          <img src={heroImage} alt="hero" />
        </div>

        <div className="col-span-2 pl-6">
          <div
            onClick={sendEmail}
            className="flex flex-row space-x-2 items-center align-middle cursor-pointer text-white/85"
          >
            <TbMail size={iconSize} />
            <span className="text-xs">digitalkala.nepal@gmail.com</span>
          </div>
        </div>

        <div className="col-span-2 text-xs space-y-2">
          <p>Our Projects</p>
          <p
            className="text-white/50 cursor-pointer hover:text-white"
            onClick={() =>
              handleURLClick("https://www.nepalesescholarshiphub.com/")
            }
          >
            Nepalese Scholarship Hub
          </p>
        </div>

        <div className="items-end flex flex-col space-y-6 col-span-2">
          <div className="flex flex-row space-x-3">
            {createSocialMediaLink(
              GrInstagram,
              iconSize,
              "https://www.instagram.com/digitalkala.nepal/"
            )}
            {createSocialMediaLink(
              GrLinkedin,
              iconSize,
              "https://www.linkedin.com/company/digitalkala/"
            )}
          </div>

          <div className="text-white/80 text-xs">
            &copy; {new Date().getFullYear()}. All Rights Reserved by Digital
            Kala.
          </div>
        </div>
      </div>
    </div>
  );
}
