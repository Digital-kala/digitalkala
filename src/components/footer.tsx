import React from "react";

import { IconType } from "react-icons";
import { TbMail } from "react-icons/tb";
import { GrInstagram, GrLinkedin } from "react-icons/gr";

import { contentPaddingClass, handleURLClick, sendEmail } from "./utils";

import heroImage from "../assets/image/logo-blue.svg";

const iconSize = 20;
const navigationTextClass = "text-black/50 cursor-pointer hover:text-black";

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

export function Footer() {
  return (
    <div className="relative pt-[10vh] pb-[6vh] bg-white text-black flex flex-col"  id="contact">
      <div className={contentPaddingClass}>
        <div className="pb-14 website-font-medium text-xl">
          Join us to bridge the{" "}
          <span className="text-[#FFC632]">digital gap.</span>
        </div>

        <div className="grid grid-cols-8">
          <div className="w-[8rem] col-span-3">
            <img src={heroImage} alt="hero" />
          </div>

          <div className="col-span-2 space-y-2 text-xs">
            <div className="font-bold">Our Projects</div>
            <div
              className={navigationTextClass}
              onClick={() =>
                handleURLClick("https://www.nepalesescholarshiphub.com/")
              }
            >
              Nepalese Scholarship Hub
            </div>
          </div>

          <div className="col-span-2 space-y-2 text-xs">
            <div className="font-bold">Contact Us</div>
            <div
              onClick={sendEmail}
              className={
                "flex flex-row space-x-2 items-center align-middle " +
                navigationTextClass
              }
            >
              <TbMail size={iconSize} />
              <div className="text-xs">digitalkala.nepal@gmail.com</div>
            </div>
          </div>

          <div className="col-span-1 space-y-2 items-end flex flex-col">
            <div className="font-bold text-xs ">Connect with us</div>
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
          </div>
        </div>
      </div>

      <div
        className={contentPaddingClass + " pt-10 text-xs flex justify-between"}
      >
        <div className={navigationTextClass}>Privacy Policy</div>

        <div className="text-black">
          &copy; {new Date().getFullYear()}. All Rights Reserved by Digital
          Kala.
        </div>
      </div>
    </div>
  );
}
